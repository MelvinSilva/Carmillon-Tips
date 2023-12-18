import { Component, HostBinding, effect, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  template: `<header class="bg-white dark:bg-gray-900">
    <div
      class="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8"
    >
      <a class="block text-red-600 dark:text-teal-300" href="/">
        <span class="sr-only">Home</span>
        <img src="../../assets/KR9J_fb_petit.jpg" class="h-12" />
      </a>

      <div class="flex flex-1 items-center justify-end md:justify-between">
        <nav aria-label="Global" class="hidden md:block">
          <ul class="flex items-center gap-6 text-sm">
            <li>
              <a
                class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                href="/"
              >
                Les bons plans
              </a>
            </li>
            <li>
              <a
                class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                href="/"
              >
                Offres nationales
              </a>
            </li>

            <li>
              <a
                class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                href="/"
              >
                Transports en IDF
              </a>
            </li>
            <li>
              <a
                routerLink="/proposer-un-bon-plan"
                class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
              >
                💡 Proposer un bon plan
              </a>
            </li>

            <li>
              <a
                routerLink="/contact"
                class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div class="flex items-center gap-4">
          <!-- <div class="sm:flex sm:gap-4">
            <a
              class="block rounded-md bg-gray-500 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-gray-700 dark:hover:bg-gray-500 hidden md:block"
              href="/"
            >
              Espace contributeur
            </a>
          </div> -->

          <button
            class="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75 md:hidden"
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
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <div
          class="flex justify-between items-center bg-teal-600 text-white dark:bg-slate-900 p-5 font-semibold text-lg shadow-lg"
        >
          <button
            class="flex transition-transform hover:scale-125 align-middle"
            (click)="darkMode.set(!darkMode())"
          >
            @if (!darkMode) {
            <span class="material-icons">dark_mode</span>
            } @else {<span class="material-icons">light_mode</span>}
          </button>
        </div>
      </div>
    </div>
  </header>`,
})
export class HeaderComponent {
  darkMode = signal<boolean>(
    JSON.parse(window.localStorage.getItem('darkMode') ?? 'false')
  );

  @HostBinding('class.dark') get mode() {
    return this.darkMode();
  }

  constructor() {
    effect(() => {
      window.localStorage.setItem('darkMode', JSON.stringify(this.darkMode()));
    });
  }
}
