import { Component, LOCALE_ID, OnInit } from '@angular/core';
import { StrapiService } from '../../services/strapi.service';
import { CommonModule, DatePipe, NgFor, NgIf } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { MatDialog } from '@angular/material/dialog';
import { ModalUpdate } from '../tips/modal-update.component';
import { ActivatedRoute } from '@angular/router';

registerLocaleData(localeFr);

type RegionData = {
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
  selector: 'app-tips-region-result',
  standalone: true,
  imports: [NgFor, NgIf, DatePipe, CommonModule],
  styles: [
    `
      .bg-card {
        background-color: #f4f5f6;
        box-shadow: rgba(240, 46, 170, 0.3) 4px 4px,
          rgba(240, 46, 170, 0.2) 8px 8px, rgba(240, 46, 170, 0.1) 12px 12px;
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
      <p class="text-gray-200 text-center m-6 text-sm">
        Vous êtes en région : <br />
        {{ regionId | uppercase }}
      </p>
      <p class="p-2 h-96 text-center text-white text-3xl">
        Aucune donnée disponible.
      </p>
    </div>

    <ng-template #content>
      <div class="m-1 mt-6">
        <p class="text-gray-200 text-center mb-6 text-sm">
          Vous êtes en région : <br />
          {{ regionId | uppercase }}
        </p>
        <div class="w-full max-w-screen-2xl">
          <div class="flex flex-wrap justify-center gap-4">
            <ng-container *ngFor="let data of tipsData">
              <div
                *ngIf="data.attributes.disponible"
                class="w-80 max-h-max bg-card rounded-xl flex flex-col gap-4 relative shadow-inner"
              >
                <span
                  *ngIf="data.attributes.reduction !== null"
                  class="absolute top-0 right-0 bg-reduction p-2 rounded-tr-lg text-white text-sm flex items-center justify-center"
                  style="border-bottom-left-radius: 10px; height: 36px;"
                  >{{ data.attributes.reduction }}
                </span>
                <span
                  *ngIf="
                    data.attributes.reduction === null ||
                    data.attributes.reduction === ''
                  "
                  class="absolute top-0 right-0 bg-reduction p-2 rounded-tr-lg text-white text-xs flex items-center justify-center"
                  style="border-bottom-left-radius: 10px; height: 36px;"
                >
                  Offre spéciale
                </span>

                <button
                  (click)="openModal(data.id)"
                  class="absolute bottom-0 right-0 bg-gray-200 p-2 rounded-br-lg color-edit text-md flex items-center justify-center"
                  style="border-top-left-radius: 10px; height: 36px;"
                >
                  ✎
                </button>

                <div class="h-32 flex items-center justify-center">
                  <img
                    class="w-full h-full object-contain rounded-lg p-2"
                    [src]="
                      data.attributes.image?.data?.attributes?.formats?.small
                        ?.url
                        ? 'https://meaningful-horses-3ddd745858.strapiapp.com' +
                          data.attributes.image?.data?.attributes?.formats
                            ?.small?.url
                        : '../../../assets/shop.png'
                    "
                  />
                </div>
                <div class="flex flex-col text-md">
                  <div
                    class="text-white font-extrabold bg-enseigne text-center p-2"
                  >
                    {{ data.attributes.enseigne.split('-')[0].trim() }}
                    <div class="text-sm font-bold">
                      {{ data.attributes.ville }}
                    </div>
                  </div>
                  <div class="text-neutral-600 pl-3 pb-1 pt-3">
                    📮
                    {{
                      data.attributes.adresse !== null &&
                      data.attributes.adresse !== undefined
                        ? data.attributes.adresse
                        : 'Adresse à venir'
                    }}
                  </div>

                  <div
                    class="font-black pr-3 pl-3 pb-1 h-24"
                    style="color: #3f2a56;"
                  >
                    🔖 {{ filterDescriptionName(data.attributes.description) }}
                  </div>

                  <!-- AFFICHE "VERIFIER" OU "A RE-VERIFIER" SELON LE BOOLEAN OU "DATE_VERIFICATION" SEULEMENT SI UNE DONNEE EST DISPO -->
                  <div class="flex justify-between p-3">
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
    </ng-template>
  `,
})
export class TipsRegionResult implements OnInit {
  tipsData: RegionData[] = [];
  regionId: string = '';

  constructor(
    private strapiService: StrapiService,
    private dialog: MatDialog,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Récupérez l'ID de la région depuis la route
    const regionId = history.state.regionId;
    if (regionId) {
      this.loadTipsForRegion(regionId);
      this.regionId = regionId;
    } else {
      // Gérer le cas si une région n'est pas disponible
    }
  }

  loadTipsForRegion(region: string) {
    this.strapiService.getTipsByRegion(region).subscribe(
      (response: any) => {
        this.tipsData = response.data; // mettre les données de la propriété 'data'
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
    });
  }
}
