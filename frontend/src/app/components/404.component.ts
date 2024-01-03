import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  standalone: true,
  template: `
    <div
      class="text-center mt-10 flex flex-col justify-center text-white text-3xl"
    >
      <h1>En cours de construction</h1>
      <p class="text-lg">Page non disponible pour le moment.</p>
      <!-- Vous pouvez ajouter ici des liens ou des boutons pour naviguer vers d'autres pages -->
    </div>
  `,
})
export class NotFoundComponent {}
