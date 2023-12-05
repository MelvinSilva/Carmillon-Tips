import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: ` <section class="home relative bg-cover bg-center bg-no-repeat">
    <div
      class="relative mx-auto max-w-screen-2xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
    >
      <div
        class="message mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right"
      >
        <h1 class="text-4xl font-extrabold sm:text-6xl text-white">
          Les bons plans

          <strong class="block font-extrabold text-white"> Carmillon. </strong>
        </h1>

        <p class="mt-4 max-w-lg sm:text-xl/relaxed text-gray-100">
          Recherchez les bons plans disponible dans votre ville
        </p>

        <div class="mt-8 flex flex-wrap gap-4 text-center">
          <input
            placeholder="Entrez votre ville"
            href="#"
            type="text"
            class="button-search-city mx-auto block w-full rounded px-12 py-3 text-1xl sm:text-3xl font-medium text-white shadow focus:outline-none sm:w-auto placeholder:text-gray-100 placeholder:text-center"
          />
        </div>
      </div>
    </div>
  </section>`,
  styles: [``],
})
export class HomeComponent {}
