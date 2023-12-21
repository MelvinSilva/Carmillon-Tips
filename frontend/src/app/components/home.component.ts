import { Component } from '@angular/core';
import { StrapiService } from '../services/strapi.service';
import { FormsModule } from '@angular/forms';
import { CarteComponent } from './tips/card.component';
import { SuggestTipsComponent } from './tips/suggest-tips.component';
import { MapAreaComponent } from './map-card/map-area.component';

@Component({
  selector: 'app-home',
  standalone: true,
  styles: [``],
  template: ` <section class="home bg-cover bg-center bg-no-repeat">
    <div
      class="mx-auto max-w-screen-2xl px-4 py-10 sm:px-6 lg:flex lg:items-center"
    >
      <div
        class="message mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right"
      >
        <h1 class="text-2xl font-black sm:text-5xl text-white">
          CARMISPHERE

          <strong class="text-sm block font-black sm:text-2xl text-white">
            LES BONS PLANS CARMILLON.
          </strong>
        </h1>

        <p class="mt-4 text-md sm:text-xl text-gray-200">
          Contribuons ensemble à trouver et partager les bons plans cheminots !
        </p>
        <br />
        <hr />
        <div class="mt-3 flex justify-center">
          <!-- label class="text-gray-200 mx-auto block py-3 text-xs italic">
            Recherche par ville, enseigne, département ou catégorie -->
          <input
            placeholder="🔍 Recherche"
            type="text"
            class="text-white button-search-city mt-1 block rounded py-3 text-md w-80 pl-3 focus:outline-none placeholder:text-gray-200"
            (input)="search($event)"
          />
          <!-- </label> -->
        </div>
      </div>
    </div>
    <app-map-area></app-map-area>
    <app-cartes></app-cartes>
  </section>`,
  imports: [
    FormsModule,
    CarteComponent,
    SuggestTipsComponent,
    MapAreaComponent,
  ],
})
export class HomeComponent {
  constructor(private strapiService: StrapiService) {}

  search(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.strapiService.setSearchValue(value);
    // recupere ce qui est tapé dans la barre de recherche
  }
}
