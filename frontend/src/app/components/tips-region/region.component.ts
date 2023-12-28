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
  template: `
    <div *ngIf="!tipsData || tipsData.length === 0; else content">
      <p class="p-2 h-96 text-center text-white text-3xl">
        Aucune donnée disponible.
      </p>
    </div>

    <ng-template #content>
      <div class="m-1 flex justify-center">
        <div class="w-full max-w-screen-2xl">
          <p class="text-gray-200 text-center m-6 text-sm">
            Vous êtes en région : <br />
            {{ regionId | uppercase }}
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <ng-container *ngFor="let data of tipsData">
              <div
                *ngIf="data.attributes.disponible"
                class="w-full h-56 bg-card rounded-xl flex flex-col relative shadow-inner m-1"
                style="max-width: 370px;"
              >
                <!-- Encart de réduction -->
                <span
                  *ngIf="data.attributes.reduction"
                  class="absolute top-12 right-0 bg-reduction p-2 rounded-tl-lg text-white text-xl flex items-center justify-center font-semibold"
                  style="border-bottom-left-radius: 10px; height: 48px; width: 60px"
                  >{{ data.attributes.reduction }}</span
                >

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
                    <div class="font-bold text-lg pt-4">
                      {{ data.attributes.enseigne.split('-')[0].trim() }}
                      <div class="text-sm font-normal">
                        {{ data.attributes.ville }}
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Division pour la description -->
                <div class="flex flex-col mt-3 text-md">
                  <div class="text-gray-600 pl-3 pb-1 ">
                    📮
                    {{
                      data.attributes.adresse !== null &&
                      data.attributes.adresse !== undefined
                        ? data.attributes.adresse
                        : 'Adresse à venir prochainement'
                    }}
                  </div>
                  <!-- Description -->
                  <div class="font-semibold pr-3 pl-3 pb-1 pt-1 text-gray-600">
                    🔖
                    <span class="text-description">{{
                      filterDescriptionName(data.attributes.description)
                    }}</span>
                  </div>

                  <!-- Statut de vérification -->
                  <div class="flex justify-between pl-3 pb-1 absolute bottom-0">
                    <div
                      *ngIf="!data.attributes.date_verification"
                      class="text-sm text-gray-600"
                    >
                      {{
                        data.attributes.verifier
                          ? ' ☑️ Vérifié dernièrement'
                          : '☑️ A re-vérifier'
                      }}
                    </div>
                    <div
                      *ngIf="data.attributes.date_verification"
                      class="text-sm text-gray-600"
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
