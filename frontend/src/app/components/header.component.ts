import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgClass, NgIf],
  template: `<header class="bg-white dark:bg-gray-900">
    <div
      class="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8"
    >
      <!-- Votre logo ou titre -->
      <a class="block text-red-600 dark:text-teal-300" href="/">
        <span class="sr-only">Home</span>
        <img src="../../assets/KR9J_fb_petit.jpg" class="h-12" />
      </a>

      <!-- Menu classique pour les écrans larges -->
      <nav class="hidden md:flex items-center gap-6 text-sm">
        <a
          class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
          routerLink="/les-bons-plans"
        >
          Les bons plans
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
          Transports en IDF
        </a>
        <a
          class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
          routerLink="/proposer-un-bon-plan"
        >
          💡 Proposer un bon plan
        </a>
        <a
          class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
          routerLink="/contact"
        >
          Contact
        </a>
      </nav>

      <!-- Bouton du menu burger pour les écrans mobiles -->
      <button
        class="block md:hidden rounded bg-gray-100 p-2.5 absolute right-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
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

      <!-- Menu déroulant pour les écrans mobiles -->
      <div
        *ngIf="isMenuOpen"
        class="md:hidden absolute top-16 right-0 bg-white dark:bg-gray-900 shadow-md p-4 z-10 rounded-bl-lg"
      >
        <nav aria-label="Global">
          <ul class="flex flex-col items-center gap-6 text-sm">
            <li>
              <a
                class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                routerLink="/les-bons-plans"
              >
                Les bons plans
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
  isMenuOpen = false; // Contrôle l'état du menu

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; // Bascule l'état du menu
  }
}
