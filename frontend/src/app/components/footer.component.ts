import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `<div class="footer bg-gray-900">
      <div class="max-w-2xl mx-auto text-white py-10">
        <div class="text-center flex justify-center">
          <a class="block text-red-600 dark:text-teal-300" href="/">
            <img src="../../assets/logo-carmisphere.webp" class="h-10 w-10" />
          </a>
          <h3 class="text-3xl mb-2 ml-1">CARMISPHÈRE</h3>
        </div>
        <div class="text-center">
          <p class="text-xs">
            Application non officiel - Réservé aux cheminots SNCF
          </p>
          <p class="text-xs">Rejoignez le groupe facebook « Carmisphère »</p>
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
    <br class="lg:hidden" />`,
})
export class FooterComponent {}
