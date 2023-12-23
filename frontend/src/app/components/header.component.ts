import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StrapiService } from '../services/strapi.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgClass, NgIf],
  template: `<header class="bg-white dark:bg-gray-900">
    <div
      class="mx-auto flex h-16 max-w-screen-xl items-center lg:justify-center gap-4 px-4 sm:px-6 lg:px-8"
    >
      <!-- logo -->
      <a class="block text-red-600 dark:text-teal-300" href="/">
        <span class="sr-only">Home</span>
        <img src="../../assets/logo-carmisphere.webp" class="h-10 w-10" />
      </a>

      <!-- Menu classique pour les écrans larges -->
      <nav class="hidden lg:flex items-center gap-6 text-sm">
        <a
          class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
          routerLink="/accueil"
        >
          Accueil
        </a>
        <a
          class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
          routerLink="/offres-nationales"
        >
          Offres nationales
        </a>
        <a
          class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
          routerLink="/transports-idf"
        >
          Transports IDF
        </a>
        <a
          class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
          routerLink="/proposer-un-bon-plan"
        >
          Proposer un bon plan
        </a>
        <a
          class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
          routerLink="/contact"
        >
          Contact
        </a>
        <div class="relative">
          <button
            class="button-header-search text-gray-700 block rounded-3xl py-2 text-md p-3 focus:outline-none placeholder:text-gray-400 placeholder:text-sm"
            routerLink="les-bons-plans"
          >
            🔎 Recherche avancée de Bons Plans
          </button>
        </div>
      </nav>

      <!-- Bouton du menu burger pour les écrans mobiles -->
      <button
        class="block lg:hidden rounded bg-gray-100 p-2.5 absolute right-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
        (click)="toggleMenu()"
      >
        <span class="sr-only">Toggle menu</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            [ngClass]="{ block: !isMenuOpen, hidden: isMenuOpen }"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
          <path
            [ngClass]="{ block: isMenuOpen, hidden: !isMenuOpen }"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div class="relative lg:hidden">
        <button
          class="button-header-search block rounded-3xl py-2 text-xs p-3 focus:outline-none"
          routerLink="les-bons-plans"
        >
          🔎 Recherche avancée
        </button>
      </div>

      <!-- Menu déroulant pour les écrans mobiles -->
      <div
        *ngIf="isMenuOpen"
        class="lg:hidden absolute top-16 right-0 bg-white dark:bg-gray-900 shadow-md p-4 z-10 rounded-bl-lg"
      >
        <nav aria-label="Global">
          <ul class="flex flex-col items-center gap-6 text-sm">
            <li>
              <a
                class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                routerLink="/accueil"
              >
                Accueil
              </a>
            </li>
            <li>
              <a
                class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                routerLink="/offres-nationales"
              >
                Offres nationales
              </a>
            </li>
            <li>
              <a
                class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                routerLink="/transports-idf"
              >
                Transports en IDF
              </a>
            </li>
            <li>
              <a
                class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                routerLink="/proposer-un-bon-plan"
              >
                💡 Proposer un bon plan
              </a>
            </li>
            <li>
              <a
                class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                routerLink="/contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header> `,
})
export class HeaderComponent {
  isMenuOpen = false; // etat du menu sur false par defaut

  constructor(private strapiService: StrapiService) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; // bascule l'état du menu
  }

  search(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.strapiService.setSearchValue(value);
    // recupere ce qui est tapé dans la barre de recherche
  }
}
