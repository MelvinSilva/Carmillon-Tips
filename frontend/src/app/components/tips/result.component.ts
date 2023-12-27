import {
  Component,
  Directive,
  LOCALE_ID,
  NgModule,
  OnInit,
} from '@angular/core';
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
    reduction: string;
    ville: string;
    enseigne: string;
    adresse: string;
    date_verification: string;
    description: string;
    departement: string;
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
  selector: 'app-tips-result',
  standalone: true,
  imports: [NgFor, NgIf, DatePipe],
  styles: [
    `
      .bg-card {
        background-color: #f4f5f6;
        box-shadow: rgba(240, 46, 170, 0.3) 4px 4px,
          rgba(240, 46, 170, 0.2) 8px 8px, rgba(240, 46, 170, 0.1) 12px 12px;
      }
      .bg-enseigne {
        white-space: nowrap; /* Empêche le passage à la ligne */
        overflow: hidden; /* Cache le contenu débordant */
        text-overflow: ellipsis;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        color: #3f2a56;
        height: 80px;
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
  template: `<div class="mt-4 relative justify-center flex">
      <input
        placeholder="Saisir ville, enseigne ou catégorie"
        type="text"
        class="button-search-city text-gray-700 block rounded-md py-2 w-80 pl-2 mb-4 focus:outline-none placeholder:text-gray-400"
        (keyup)="(0)"
        #searchCollectorInput
        (input)="search($event)"
      />
      <span
        *ngIf="searchCollectorInput.value.length > 0"
        (click)="searchCollectorInput.value = ''"
        class="fa fa-close"
      ></span>
    </div>
    <div *ngIf="!tipsData || tipsData.length === 0; else content">
      <p class="p-2 h-96 text-center text-white text-3xl">
        Aucunes données disponibles.
      </p>
    </div>

    <ng-template #content>
      <div class="m-1 flex justify-center">
        <div class="w-full max-w-screen-2xl">
          <div class="flex flex-wrap justify-center gap-4">
            <ng-container *ngFor="let data of tipsData">
              <div
                *ngIf="data.attributes.disponible"
                class="w-full h-56 bg-card rounded-xl flex flex-col relative shadow-inner m-1"
                style="max-width: 370px;"
              >
                <!-- Encart de réduction -->
                <span
                  *ngIf="data.attributes.reduction !== null"
                  class="absolute top-0 right-0 bg-reduction p-2 rounded-tr-lg text-white text-sm flex items-center justify-center"
                  style="border-bottom-left-radius: 10px; height: 36px;"
                  >{{ data.attributes.reduction }}
                </span>
                <span
                  *ngIf="
                    data.attributes.reduction === null ||
                    data.attributes.reduction === ' ' ||
                    data.attributes.reduction === ''
                  "
                  class="absolute top-0 right-0 bg-reduction p-2 rounded-tr-lg text-white text-sm flex items-center justify-center"
                  style="border-bottom-left-radius: 10px; height: 36px;"
                  >🔖
                </span>

                <!-- Division horizontale -->
                <div
                  class="flex bg-enseigne bg-gray-200 justify-start items-center"
                >
                  <!-- Section de l'image -->
                  <div class="">
                    <img
                      class="w-24 h-24 p-2 object-contain rounded-lg"
                      [src]="
                        data.attributes.image?.data?.attributes?.formats?.small
                          ?.url
                          ? data.attributes.image?.data?.attributes?.formats
                              ?.small?.url
                          : '../../../assets/downtown.gif'
                      "
                    />
                  </div>

                  <!-- Section enseigne, ville -->
                  <div class="h-full flex flex-col text-start">
                    <!-- Enseigne et Ville -->
                    <div class="font-extrabold text-md pt-3 pl-2">
                      {{ data.attributes.enseigne.split('-')[0].trim() }}
                      <div class="text-sm text-gray-600">
                        {{ data.attributes.ville }}
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Division pour la description -->
                <div class="flex flex-col mt-3 text-sm">
                  <div class="text-neutral-600 pl-3 pb-1 ">
                    📮
                    {{
                      data.attributes.adresse !== null &&
                      data.attributes.adresse !== undefined
                        ? data.attributes.adresse
                        : 'Adresse à venir prochainement'
                    }}
                  </div>
                  <!-- Description -->
                  <div
                    class="font-black pr-3 pl-3 pb-1"
                    style="color: #3f2a56;"
                  >
                    🔖 {{ filterDescriptionName(data.attributes.description) }}
                  </div>

                  <!-- Statut de vérification -->
                  <div class="flex justify-between p-3 absolute bottom-0">
                    <div
                      *ngIf="!data.attributes.date_verification"
                      class="text-sm italic text-neutral-500"
                    >
                      {{
                        data.attributes.verifier
                          ? ' ☑️ Vérifié dernièrement'
                          : '☑️ A re-vérifier'
                      }}
                    </div>
                    <div
                      *ngIf="data.attributes.date_verification"
                      class="text-sm italic text-neutral-500"
                    >
                      ☑️ Vérifié le {{ data.attributes.date_verification }}
                    </div>
                  </div>
                </div>

                <!-- Bouton pour éditer -->
                <button
                  (click)="openModal(data.id)"
                  class="absolute bottom-0 right-0 bg-gray-200 p-3 rounded-br-lg color-edit text-md flex items-center justify-center"
                  style="border-top-left-radius: 10px; height: 36px;"
                >
                  ✎
                </button>
              </div>
            </ng-container>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </ng-template> `,
})
export class TipsResultComponent implements OnInit {
  tipsData: Carte[] = [];
  searchValue: string = '';
  selectedRegion: string | null = null;

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

  search(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.strapiService.setSearchValue(value);
    // recupere ce qui est tapé dans la barre de recherche
  }

  filterTips() {
    if (this.searchValue) {
      // Filtre les résultats selon la valeur de recherche ville, enseigne ou catégorie
      this.tipsData = this.tipsData.filter(
        (carte) =>
          carte.attributes.ville
            .toLowerCase()
            .includes(this.searchValue.toLowerCase()) ||
          carte.attributes.enseigne
            .toLowerCase()
            .includes(this.searchValue.toLowerCase()) ||
          carte.attributes.departement
            .toLowerCase()
            .includes(this.searchValue.toLowerCase())
      );

      if (this.tipsData.length === 0) {
        setTimeout(() => {
          this.strapiService.setSearchValue('');
          this.searchValue = '';
        }, 1000);
      }
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

  loadTipsForRegion(region: string) {
    this.strapiService.getTipsByRegion(region).subscribe(
      (data: any) => {
        this.tipsData = data; // Assurez-vous que les données reçues correspondent à la structure Carte
        this.filterTips(); // Appliquez éventuellement d'autres filtres ici si nécessaire
      },
      (error) => {
        console.error(error);
      }
    );
  }

  filterDescriptionName(description: string): string {
    const filteredTerms = [
      '.A re-vérifier',
      '.Vérifié en 2020',
      '.Vérifié en 2021',
      '.Vérifié en 2022',
      '.Vérifié en 2023',
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
