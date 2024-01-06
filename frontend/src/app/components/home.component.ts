import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TipsResultComponent } from './tips/result.component';
import { TipsSuggestComponent } from './tips/suggest.component';
import { MapFrenchComponent } from './tips-region/map-french.component';
import { FooterComponent } from './footer.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  styles: [``],
  template: `
    <section class="home">
      <!--  <div
        class="mx-auto max-w-screen-2xl px-4 py-4 sm:px-6 lg:flex lg:items-center"
      >
        <div
          class="message mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right"
        >
          <h1 class="text-4xl font-black sm:text-5xl text-white">
            CARMISPHERE
          </h1>
          <div>
            <p class="mt-2 text-md sm:text-xl text-gray-200">
              Contribuons ensemble à trouver et partager les bons plans
              cheminots !
            </p>
          </div>
          <br />
          <br />

        </div>
      </div> -->
      <h1 class="text-center text-white font-normal text-2xl mt-12 m-4">
        Merci à tous nos incroyables testeurs pour leur soutien ! <br /><br />
        💫 Nous avons été ravis de partager ces 5 jours avec vous. <br />
        <br />Notre application sera de retour avec encore plus de magie courant
        <span class="font-semibold text-3xl">FÉVRIER</span> ✨
      </h1>
      <br />

      <p class="text-xl text-white mt-3 no-underline hover:underline">
        <a
          href="https://www.facebook.com/groups/Bons.plans.carmillon/?locale=fr_FR"
          target="_blank"
          class="flex items-center justify-center"
          ><mat-icon>facebook</mat-icon>&nbsp;Rejoignez le groupe Carmisphère
        </a>
      </p>

      <!--  <app-map-french></app-map-french> -->
    </section>
  `,
  imports: [
    FormsModule,
    TipsResultComponent,
    TipsSuggestComponent,
    MapFrenchComponent,
    FooterComponent,
    MatIconModule,
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
