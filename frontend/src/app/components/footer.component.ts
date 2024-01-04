import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, MatIconModule],
  template: `<div class="footer">
      <div class="max-w-2xl mx-auto text-white py-8">
        <div class="text-center flex justify-center items-center">
          <a class="block text-red-600 dark:text-teal-300" href="/">
            <img src="../../assets/logo-carmisphere.webp" class="h-10 w-10" />
          </a>
          <h3 class="text-xl ml-2">CARMISPHÈRE</h3>
        </div>
        <div class="text-center flex flex-col text-gray-200 p-2">
          <p class="text-sm">
            Application non officielle - Réservée aux cheminots
          </p>
          <p class="text-sm mt-3 no-underline hover:underline">
            <a
              href="https://www.facebook.com/groups/Bons.plans.carmillon/?locale=fr_FR"
              target="_blank"
              class="flex items-center justify-center"
              ><mat-icon>facebook</mat-icon>&nbsp;Rejoignez le groupe
              Carmisphère
            </a>
          </p>
          <p class="text-sm mt-3">
            Développé par Josselin Baptiste &
            <a
              href="https://melvinsilva.vercel.app/"
              target="_blank"
              class="no-underline hover:underline"
              >Melvin Silva</a
            >
          </p>
          <!-- <div class="flex justify-center my-10">
          <div
            class="flex items-center border w-auto rounded-lg px-4 py-2 w-52 mx-2"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
              class="w-7 md:w-8"
            />
            <div class="text-left ml-3">
              <p class="text-xs text-gray-200">Download on</p>
              <p class="text-sm md:text-base">Google Play Store</p>
            </div>
          </div>
          <div
            class="flex items-center border w-auto rounded-lg px-4 py-2 w-44 mx-2"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
              class="w-7 md:w-8"
            />
            <div class="text-left ml-3">
              <p class="text-xs text-gray-200">Download on</p>
              <p class="text-sm md:text-base">Apple Store</p>
            </div>
          </div>
        </div> -->
        </div>
      </div>
    </div>

    <br class="lg:hidden" />
    <br class="lg:hidden" /> `,
})
export class FooterComponent {}
