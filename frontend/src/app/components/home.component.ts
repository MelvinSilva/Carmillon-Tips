import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TipsResultComponent } from './tips/result.component';
import { TipsSuggestComponent } from './tips/suggest.component';
import { MapFrenchComponent } from './tips-region/map-french.component';

@Component({
  selector: 'app-home',
  standalone: true,
  styles: [``],
  template: ` <section class="home bg-cover bg-center bg-no-repeat">
    <div
      class="mx-auto max-w-screen-2xl px-4 py-4 sm:px-6 lg:flex lg:items-center"
    >
      <div
        class="message mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right"
      >
        <h1 class="text-4xl font-black sm:text-5xl text-white">CARMISPHERE</h1>
        <div>
          <p class="mt-2 text-md sm:text-xl text-gray-200">
            Contribuons ensemble à trouver et partager les bons plans cheminots
            !
          </p>
        </div>

        <!--  <div class="mt-3 flex justify-center">
         
          <input
            placeholder="🔍 Recherche par ville, enseigne, catégorie"
            type="text"
            class="text-white button-search-city mt-1 block rounded py-3 text-md w-80 pl-3 focus:outline-none placeholder:text-gray-200 placeholder:text-sm"
            (input)="search($event)"
          />
    
        </div> -->
      </div>
    </div>
    <app-map-french></app-map-french>
  </section>`,
  imports: [
    FormsModule,
    TipsResultComponent,
    TipsSuggestComponent,
    MapFrenchComponent,
  ],
})
export class HomeComponent {
  // constructor(private strapiService: StrapiService) {}
  // search(event: Event) {
  //   const value = (event.target as HTMLInputElement).value;
  //   this.strapiService.setSearchValue(value);
  //   // recupere ce qui est tapé dans la barre de recherche
  // }
}
