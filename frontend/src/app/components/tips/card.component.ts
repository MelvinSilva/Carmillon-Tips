import { Component, LOCALE_ID, OnInit } from '@angular/core';
import { StrapiService } from '../../services/strapi.service';
import { DatePipe, NgFor, NgIf } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { MatDialog } from '@angular/material/dialog';
import { ModalUpdate } from './modal-update.component';

registerLocaleData(localeFr);

type Carte = {
  id: number;
  attributes: {
    disponible: boolean;
    reduction: number;
    ville: string;
    enseigne: string;
    adresse: string;
    date_verification: string;
    description: string;
    verifier: boolean;
    date: string; // Assurez-vous que le format de date est correct
    image?: {
      data?: {
        attributes?: {
          formats?: {
            small?: {
              url?: string;
            };
          };
        };
      };
    };
  };
};

@Component({
  selector: 'app-cartes',
  standalone: true,
  imports: [NgFor, NgIf, DatePipe],
  styles: [
    `
      .bg-card {
        background-color: #f4f5f6;
      }
      .bg-enseigne {
        background-color: #d7d7d7;
        font-size: 20px;
        white-space: nowrap; /* Empêche le passage à la ligne */
        overflow: hidden; /* Cache le contenu débordant */
        text-overflow: ellipsis;
        border-radius: 20px;
        margin: 0px 10px;
        color: #3f2a56;
        height: 68px;
      }
      .bg-enseigne:hover {
        overflow: visible;
        white-space: normal;
        font-size: 13px;
        height: 68px;
      }
      .bg-reduction {
        background-color: #ee528a;
      }
      .color-edit {
        color: #3f2a56;
      }
    `,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }],
  template: `
    <div *ngIf="!tipsData || tipsData.length === 0; else content">
      <p class="p-2 h-96 text-center text-white text-3xl">
        Aucune donnée disponible.
      </p>
    </div>
    <ng-template #content>
      <div class="m-1 flex justify-center">
        <div class="w-full max-w-screen-2xl">
          <div class="flex flex-wrap justify-center gap-4">
            <ng-container *ngFor="let carte of tipsData">
              <div
                *ngIf="carte.attributes.disponible"
                class="w-80 max-h-max bg-card rounded-xl flex flex-col gap-4 relative"
              >
                <span
                  *ngIf="carte.attributes.reduction !== null"
                  class="absolute top-0 right-0 bg-reduction p-2 rounded-tr-lg text-white text-xl flex items-center justify-center"
                  style="border-bottom-left-radius: 10px; height: 36px;"
                  >{{ carte.attributes.reduction }}
                </span>
                <button
                  (click)="openModal(carte.id)"
                  class="absolute bottom-0 right-0 bg-gray-200 p-2 rounded-br-lg color-edit text-md flex items-center justify-center"
                  style="border-top-left-radius: 10px; height: 36px;"
                >
                  ✎
                </button>

                <!--   <span
                  *ngIf="
                    carte.attributes.reduction === null ||
                    carte.attributes.reduction === undefined
                  "
                  class="absolute top-0 right-0 bg-red-500 p-2 rounded-tr-lg text-white text-xs flex items-center justify-center"
                  style="border-bottom-left-radius: 10px; height: 36px;"
                >
                  Réduction
                </span> -->

                <div class="h-32 flex items-center justify-center">
                  <img
                    class="w-full h-full object-contain rounded-lg p-2"
                    [src]="
                      carte.attributes.image?.data?.attributes?.formats?.small
                        ?.url
                        ? 'http://localhost:1337' +
                          carte.attributes.image?.data?.attributes?.formats
                            ?.small?.url
                        : '../../../assets/shop.png'
                    "
                  />
                </div>
                <div class="flex flex-col text-md">
                  <div
                    class="text-white font-extrabold bg-enseigne text-center p-2"
                  >
                    {{ carte.attributes.enseigne.split('-')[0].trim() }}
                    <div class="text-sm font-bold">
                      {{ carte.attributes.ville }}
                    </div>
                  </div>
                  <div class="text-neutral-600 pl-3 pb-1 pt-3">
                    📮
                    {{
                      carte.attributes.adresse !== null &&
                      carte.attributes.adresse !== undefined
                        ? carte.attributes.adresse
                        : 'Adresse à venir'
                    }}
                  </div>

                  <div
                    class="font-black pr-3 pl-3 pb-1 h-24"
                    style="color: #3f2a56;"
                  >
                    🔖 {{ filterDescriptionName(carte.attributes.description) }}
                  </div>

                  <!-- AFFICHE "VERIFIER" OU "A RE-VERIFIER" SELON LE BOOLEAN OU "DATE_VERIFICATION" SEULEMENT SI UNE DONNEE EST DISPO -->
                  <div class="flex justify-between p-3">
                    <div
                      *ngIf="!carte.attributes.date_verification"
                      class="text-sm italic text-neutral-500"
                    >
                      {{
                        carte.attributes.verifier
                          ? ' ☑️ Vérifié dernièrement'
                          : '☑️ A re-vérifier'
                      }}
                    </div>
                    <div
                      *ngIf="carte.attributes.date_verification"
                      class="text-sm italic text-neutral-500"
                    >
                      ☑️ Vérifié le {{ carte.attributes.date_verification }}
                    </div>
                  </div>
                </div>
              </div>
            </ng-container>
          </div>
        </div>
      </div>
      <br />
    </ng-template>
  `,
})
export class CarteComponent implements OnInit {
  tipsData: Carte[] = [];
  searchValue: string = '';

  constructor(
    private strapiService: StrapiService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadTips(); // initialise tout les bons plans

    this.strapiService.searchValue$.subscribe((value) => {
      this.searchValue = value;
      this.filterTips();
    });
  }

  filterTips() {
    if (this.searchValue) {
      // Filtre les résultats selon la valeur de recherche
      this.tipsData = this.tipsData.filter((carte) =>
        carte.attributes.ville
          .toLowerCase()
          .includes(this.searchValue.toLowerCase())
      );
    } else {
      this.loadTips();
      // Charge tous les bons plans si la valeur de recherche est vide
    }
  }

  loadTips() {
    this.strapiService.getTips().subscribe(
      (data: any) => {
        this.tipsData = data.data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  filterDescriptionName(description: string): string {
    const filteredTerms = [
      'A re-vérifier',
      'Vérifié en 2020',
      'Vérifié en 2021',
      'Vérifié en 2022',
      'Vérifié en 2023',
    ];

    // Remplace les termes spécifiques par une chaîne vide dans la description
    const filteredDescription = description.replace(
      new RegExp(filteredTerms.join('|'), 'g'),
      ''
    );

    return filteredDescription.trim();
  }

  openModal(carteId: number): void {
    const dialogRef = this.dialog.open(ModalUpdate, {
      width: '400px',
      data: { carteId: carteId, strapiService: this.strapiService }, // Envoie l'ID de la carte et le service Strapi à la modal
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('La modal est fermée :', result);
      // Fais quelque chose avec le résultat si nécessaire
    });
  }
}
