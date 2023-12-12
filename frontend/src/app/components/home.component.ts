import { Component } from '@angular/core';
import { StrapiService } from '../services/strapi.service';
import { FormsModule } from '@angular/forms';
import { CarteComponent } from './tips/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CarteComponent],
  styles: [``],
  template: ` <section class="home bg-cover bg-center bg-no-repeat">
    <div
      class="mx-auto max-w-screen-2xl px-4 py-10 sm:px-6 lg:flex lg:items-center"
    >
      <div
        class="message mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right"
      >
        <h1 class="text-4xl font-black sm:text-6xl text-white">
          Les bons plans

          <strong class="block font-blacktext-white"> Carmillon. </strong>
        </h1>

        <p class="mt-4 max-w-lg sm:text-xl/relaxed text-thin text-gray-400">
          Recherchez les bons plans disponible dans votre ville
        </p>

        <div class="mt-8 flex flex-wrap gap-4 text-center">
          <input
            placeholder="Entrez votre ville"
            type="text"
            class="text-white button-search-city mx-auto block rounded px-12 py-3 text-1xl font-medium shadow focus:outline-none sm:w-auto placeholder:text-white placeholder:text-center"
            (input)="search($event)"
          />
        </div>
      </div>
    </div>
    <app-cartes></app-cartes>
  </section>`,
})
export class HomeComponent {
  constructor(private strapiService: StrapiService) {}

  search(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.strapiService.setSearchValue(value);
    // recupere ce qui est tapé dans la barre de recherche
  }
}
