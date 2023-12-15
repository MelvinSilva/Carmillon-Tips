import { Component, LOCALE_ID, OnInit } from '@angular/core';
import { StrapiService } from '../../services/strapi.service';
import { DatePipe, NgFor, NgIf } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr);

type Carte = {
  attributes: {
    disponible: boolean;
    reduction: number;
    ville: string;
    enseigne: string;
    adresse: string;
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
        background-color: #ee528a;
        font-size: 20px;
        white-space: nowrap; /* Empêche le passage à la ligne */
        overflow: hidden; /* Cache le contenu débordant */
        text-overflow: ellipsis;
      }
      .bg-enseigne:hover {
        overflow: visible;
        white-space: normal;
        font-size: 13px;
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
          <div class="flex flex-wrap justify-center gap-4 m-4">
            <ng-container *ngFor="let carte of tipsData">
              <div
                *ngIf="carte.attributes.disponible"
                class="w-80 max-h-max bg-card rounded-xl flex flex-col gap-4 relative"
              >
                <span
                  *ngIf="carte.attributes.reduction !== null"
                  class="absolute top-2 right-2 bg-red-500 p-1 rounded-lg text-white text-xl"
                >
                  -{{ carte.attributes.reduction }}
                </span>

                <div class="h-28 flex items-center justify-center">
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
                <div class="flex flex-col text-sm">
                  <div
                    class="text-white font-extrabold bg-enseigne text-center p-2"
                  >
                    {{ carte.attributes.enseigne.split('-')[0].trim() }}
                  </div>

                  <br />

                  <div class="text-neutral-600 font-extrabold p-2">
                    🏠 {{ carte.attributes.ville }}
                  </div>
                  <div
                    *ngIf="carte.attributes.adresse !== null"
                    class="text-neutral-600 font-extrabold p-2"
                  >
                    📮 {{ carte.attributes.adresse }}
                  </div>

                  <div class="text-neutral-600 p-2">
                    🔖 {{ carte.attributes.description }}
                  </div>
                  <div class="flex justify-between">
                    <div class="text-neutral-600 p-2">
                      {{
                        carte.attributes.verifier
                          ? ' ✅ Vérifier'
                          : '☑️ A re-vérifier'
                      }}
                    </div>
                    <div
                      *ngIf="carte.attributes.date !== null"
                      class="text-sky-600 text-base font-medium text-xs p-2"
                    >
                      Publié le
                      {{ carte.attributes.date | date : 'd MMMM yyyy' }}
                    </div>
                  </div>
                </div>
              </div>

              <div
                *ngIf="!carte.attributes.disponible"
                class="card-not-disponible w-80 max-h-max bg-card rounded-xl gap-4 flex flex-col relative"
              >
                <span
                  *ngIf="carte.attributes.reduction !== null"
                  class="absolute top-2 right-2 bg-red-500 p-1 rounded-lg text-white text-xl"
                >
                  -{{ carte.attributes.reduction }}
                </span>

                <span
                  class="absolute rounded w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45 bg-red-500 text-white text-center text-3xl font-bold"
                >
                  NON DISPONIBLE
                </span>
                <div
                  class="h-28 flex items-center justify-center opacity-30 p-2"
                >
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

                <div class="flex flex-col opacity-30 text-sm">
                  <div
                    class="text-white font-bold bg-enseigne text-center w-full p-2"
                  >
                    {{ carte.attributes.enseigne }}
                  </div>
                  <br />
                  <div class="text-neutral-600 font-extrabold p-2">
                    🏠 {{ carte.attributes.ville }}
                  </div>
                  <div class="text-neutral-600 font-extrabold p-2">
                    📮 {{ carte.attributes.adresse }}
                  </div>
                  <div class="text-neutral-600 p-2">
                    🔖 {{ carte.attributes.description }}
                  </div>
                  <div class="flex justify-between">
                    <div class="text-neutral-600 p-2">
                      {{
                        carte.attributes.verifier
                          ? ' ✅ Vérifier'
                          : '☑️ A re-vérifier'
                      }}
                    </div>
                    <div
                      *ngIf="carte.attributes.date !== null"
                      class="text-sky-600 text-base font-medium text-xs p-2"
                    >
                      Publié le
                      {{ carte.attributes.date | date : 'd MMMM yyyy' }}
                    </div>
                  </div>
                </div>
              </div>
            </ng-container>
          </div>
        </div>
      </div>
    </ng-template>
  `,
})
export class CarteComponent implements OnInit {
  tipsData: Carte[] = [];
  searchValue: string = '';

  constructor(private strapiService: StrapiService) {}

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
}
