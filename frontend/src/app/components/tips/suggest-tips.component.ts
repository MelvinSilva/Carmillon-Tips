import { Component } from '@angular/core';
import { StrapiService } from '../../services/strapi.service';
import { FormControl, FormsModule, NgModel } from '@angular/forms';

interface Tips {
  nom: string;
  cp: string;
  date: Date;
  description: string;
  ville: string;
  enseigne: string;
}

@Component({
  selector: 'app-suggest-tips',
  standalone: true,
  imports: [FormsModule],
  styles: [
    `
      .bg-button {
        background-color: #ee528a;
      }
      .bg-shop {
        background-image: url('https://images.pexels.com/photos/1050244/pexels-photo-1050244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
        background-size: cover;
        height: 200px;
        opacity: 0.4;
    `,
  ],
  template: `
    <div class="">
      <div class="bg-shop"></div>
      <div class="m-4">
        <h1 class="text-center text-white text-lg p-4 mt-2">
          Proposer un nouvel avantage ici et notre équipe l'ajoutera au
          catalogue dans les plus brefs délais.
        </h1>
        <form
          (ngSubmit)="submitDeal()"
          class="lg:max-w-2xl xl:max-w-3xl mx-auto bg-white p-4 border border-gray-300 shadow-md rounded-lg mt-4"
        >
          <h1 class="text-center text-sm m-2 text-gray-400">
            INFORMATION AGENT
          </h1>
          <div class="mb-4 relative">
            <input
              type="text"
              id="nom"
              [(ngModel)]="newTips.nom"
              name="nom"
              required
              class="placeholder:text-sm border rounded-md w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <span
              class="absolute top-0 left-0 px-3 text-gray-400 text-sm"
              style="transform: translateY(0.15rem);"
            >
              Nom et prénom
            </span>
          </div>

          <div class="mb-8 relative">
            <input
              type="text"
              id="cp"
              [(ngModel)]="newTips.cp"
              name="cp"
              required
              class="placeholder:text-sm border rounded-md w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <span
              class="absolute top-0 left-0 px-3 text-gray-400 text-sm"
              style="transform: translateY(0.15rem);"
            >
              Numéro de CP
            </span>
          </div>
          <h1 class="text-center text-sm m-2 text-gray-400">
            DESCRIPTION AVANTAGE
          </h1>

          <div class="mb-4 relative">
            <input
              type="text"
              id="enseigne"
              [(ngModel)]="newTips.enseigne"
              name="enseigne"
              required
              class="placeholder:text-sm border rounded-md w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <span
              class="absolute top-0 left-0 px-3 text-gray-400 text-sm"
              style="transform: translateY(0.15rem);"
            >
              Nom de l'enseigne
            </span>
          </div>
          <div class="mb-4 relative">
            <input
              type="text"
              id="ville"
              [(ngModel)]="newTips.ville"
              name="ville"
              required
              class="placeholder:text-sm border rounded-md w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <span
              class="absolute top-0 left-0 px-3 text-gray-400 text-sm"
              style="transform: translateY(0.15rem);"
            >
              Ville et adresse
            </span>
          </div>
          <div class="mb-4 relative">
            <textarea
              [(ngModel)]="newTips.description"
              name="description"
              required
              id="description"
              class="border rounded-md w-full py-6 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              style="padding-top: 0.95rem; padding-bottom: 0.95rem;"
            ></textarea>
            <span
              class="absolute top-0 left-0 px-3 text-gray-400 text-sm"
              style="transform: translateY(0.15rem);"
            >
              Description complète (réduction etc...)
            </span>
          </div>

          <div class="flex justify-center">
            <button
              type="submit"
              class="bg-button hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Envoyer votre proposition
            </button>
          </div>
        </form>
      </div>
      <br />
      <br />
    </div>
  `,
})
export class SuggestTipsComponent {
  newTips: Tips = {
    nom: '',
    cp: '',
    date: new Date(),
    description: '',
    ville: '',
    enseigne: '',
  };

  constructor(private strapiService: StrapiService) {}

  submitDeal() {
    this.strapiService.createTips(this.newTips).subscribe(
      (response) => {
        console.log('Deal créé avec succès !', response);
        this.resetForm();
      },
      (error) => {
        console.error('Erreur lors de la création du deal :', error);
      }
    );
  }

  resetForm() {
    this.newTips = {
      nom: '',
      cp: '',
      date: new Date(),
      description: '',
      ville: '',
      enseigne: '',
    };
  }
}
