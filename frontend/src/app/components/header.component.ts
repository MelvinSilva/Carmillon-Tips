import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StrapiService } from '../services/strapi.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgClass, NgIf, MatIconModule],
  styles: [
    `
      .icon-nav {
        color: #ee528a;
      }
    `,
  ],
  template: `<header
    class="bg-white dark:bg-gray-900 rounded-b-2xl lg:rounded-none "
  >
    <div
      class="mx-auto flex h-12 lg:h-16 justify-between lg:justify-center max-w-screen-xl items-center gap-4 px-4 sm:px-6 lg:px-8"
    >
      <!-- logo -->
      <a class="block text-red-600 dark:text-teal-300" href="/">
        <img src="../../assets/logo-carmisphere.webp" class="h-10 w-10" />
      </a>
      <nav class="hidden lg:flex items-center gap-6 text-sm">
        <a
          class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
          routerLink="/accueil"
        >
          Accueil
        </a>
        <a
          class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
          routerLink="/proposer-un-bon-plan"
        >
          Proposer un bon plan
        </a>
        <a
          class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
          routerLink="/non-disponible"
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
          routerLink="/faq"
        >
          FAQ
        </a>
        <a
          class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
          routerLink="/contact"
        >
          Contact
        </a>
        <div class="relative">
          <button
            class="bg-gray-100 text-gray-500 block rounded-3xl py-2 text-md p-3 focus:outline-none  placeholder:text-sm"
            routerLink="les-bons-plans"
          >
            🔎 Recherche avancée de bons plans
          </button>
        </div>
      </nav>

      <!-- ***************** Bouton du menu burger et search mobiles header TOP ****************** -->
      <!-- ***************** Bouton du menu burger et search mobiles header TOP ****************** -->
      <!-- ***************** Bouton du menu burger et search mobiles header TOP ****************** -->
      <div class="lg:hidden flex">
        <button
          class="bg-gray-100 text-gray-600 block rounded-xl py-2 text-xs p-2 focus:outline-none"
          routerLink="les-bons-plans"
        >
          🔎 Recherche
        </button>
        <!-- <button
          class="block lg:hidden rounded-xl bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
          (click)="toggleMenuTop()"
        >
          <span class="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              [ngClass]="{ block: !isMenuTopOpen, hidden: isMenuTopOpen }"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              [ngClass]="{ block: isMenuTopOpen, hidden: !isMenuTopOpen }"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button> -->
      </div>

      <!-- ***************** Menu deroulant mobiles header TOP ****************** -->
      <!-- ***************** Menu deroulant mobiles header TOP ****************** -->
      <!-- ***************** Menu deroulant mobiles header TOP ****************** -->

      <!--       <div
        *ngIf="isMenuTopOpen"
        class="lg:hidden fixed top-0 right-0 bg-white dark:bg-gray-900 shadow-md p-4 z-10 rounded-bl-lg"
      >
        <nav aria-label="Global">
          <br />
          <ul class="flex flex-col items-center gap-6 text-sm">
            <li>
              <a
                class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                routerLink="/accueil"
                (click)="closeMenuClick()"
              >
                Accueil
              </a>
            </li>
            <li>
              <a
                class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                routerLink="/offres-nationales"
                (click)="closeMenuClick()"
              >
                Offres nationales
              </a>
            </li>
            <li>
              <a
                class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                routerLink="/proposer-un-bon-plan"
                (click)="closeMenuClick()"
              >
                💡 Proposer un bon plan
              </a>
            </li>
            <li>
              <a
                class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                routerLink="/transports-idf"
                (click)="closeMenuClick()"
              >
                Transports en IDF
              </a>
            </li>

            <li>
              <a
                class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                routerLink="/faq"
                (click)="closeMenuClick()"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                routerLink="/contact"
                (click)="closeMenuClick()"
              >
                Contact
              </a>
            </li>
          </ul>
          <br />
        </nav>
      </div> -->

      <!-- ******************************* Menu déroulant BOTTOM pour les écrans mobiles *******************************-->
      <!-- ******************************* Menu déroulant BOTTOM pour les écrans mobiles *******************************-->
      <!-- ******************************* Menu déroulant BOTTOM pour les écrans mobiles *******************************-->
      <div
        *ngIf="isMenuBottomOpen"
        class="lg:hidden fixed bottom-8 right-0 bg-white shadow-md w-full h-full mt-20 z-10 rounded-tl-lg"
      >
        <nav aria-label="Global">
          <ul class="flex flex-col items-center gap-6 text-xl">
            <br />
            <br />
            <li>
              <a
                class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                routerLink="/accueil"
                (click)="closeMenuClick()"
              >
                Accueil
              </a>
            </li>

            <li>
              <a
                class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                routerLink="/proposer-un-bon-plan"
                (click)="closeMenuClick()"
              >
                💡 Proposer un bon plan
              </a>
            </li>
            <li>
              <a
                class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                routerLink="/non-disponible"
                (click)="closeMenuClick()"
              >
                Offres nationales
              </a>
            </li>
            <li>
              <a
                class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                routerLink="/non-disponible"
                (click)="closeMenuClick()"
              >
                Transports en IDF
              </a>
            </li>

            <li>
              <a
                class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                routerLink="/faq"
                (click)="closeMenuClick()"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                routerLink="/contact"
                (click)="closeMenuClick()"
              >
                Contact
              </a>
            </li>
          </ul>
          <br />
          <br />
        </nav>
      </div>

      <!-- ******************************* Navbar mobile fixe BOTTOM *******************************-->
      <!-- ******************************* Navbar mobile fixe BOTTOM *******************************-->
      <!-- ******************************* Navbar mobile fixe BOTTOM *******************************-->
      <nav
        class="lg:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg md:text-xl text-xs z-10 rounded-t-2xl"
      >
        <ul class="flex justify-around py-2">
          <li class="text-center">
            <a
              class="block text-gray-700 block hover:text-gray-900"
              routerLink="/"
              (click)="closeMenuClick()"
            >
              <div class="flex flex-col items-center">
                <mat-icon
                  class="icon-nav"
                  aria-hidden="false"
                  aria-label="home"
                  fontIcon="map"
                ></mat-icon>
                <span>Carte</span>
              </div>
            </a>
          </li>
          <li class="text-center">
            <a
              class="block text-gray-700 block hover:text-gray-900"
              routerLink="/non-disponible"
              (click)="closeMenuClick()"
            >
              <div class="flex flex-col items-center">
                <mat-icon
                  class="icon-nav"
                  aria-hidden="false"
                  aria-label="home"
                  fontIcon="local_offer"
                ></mat-icon>
                <span>Nationales</span>
              </div>
            </a>
          </li>

          <li class="text-center">
            <a
              class="block text-gray-700 hover:text-gray-900"
              routerLink="/proposer-un-bon-plan"
              (click)="closeMenuClick()"
            >
              <div class="flex flex-col items-center">
                <mat-icon
                  class="icon-nav"
                  aria-hidden="false"
                  aria-label="home"
                  fontIcon="library_add"
                ></mat-icon>
                <span>Proposer</span>
              </div>
            </a>
          </li>
          <li class="text-center">
            <a
              class="block text-gray-700 hover:text-gray-900"
              routerLink="/les-bons-plans"
              (click)="closeMenuClick()"
            >
              <div class="flex flex-col items-center">
                <mat-icon
                  class="icon-nav"
                  aria-hidden="false"
                  aria-label="home"
                  fontIcon="find_in_page"
                ></mat-icon>
                <span>Recherche</span>
              </div>
            </a>
          </li>

          <li class="text-center">
            <button
              class="block text-gray-700 hover:text-gray-900"
              (click)="toggleMenuBottom()"
            >
              <div class="flex flex-col items-center">
                <mat-icon
                  class="icon-nav"
                  aria-hidden="false"
                  aria-label="home"
                  fontIcon="menu"
                ></mat-icon>
                <span>Menu</span>
              </div>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </header> `,
})
export class HeaderComponent {
  isMenuTopOpen = false;
  isMenuBottomOpen = false;

  constructor(private strapiService: StrapiService) {}

  /*   toggleMenuTop() {
    this.isMenuTopOpen = !this.isMenuTopOpen; // bascule l'état du menu
  } */

  toggleMenuBottom() {
    this.isMenuBottomOpen = !this.isMenuBottomOpen;
  }

  closeMenu() {
    this.isMenuTopOpen = false; // fermer le menu
    this.isMenuBottomOpen = false; // fermer le menu
  }

  search(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.strapiService.setSearchValue(value);
    // récupère ce qui est tapé dans la barre de recherche
  }

  // fermer le menu lorsqu'un lien est cliqué
  closeMenuClick() {
    this.closeMenu();
  }
}
