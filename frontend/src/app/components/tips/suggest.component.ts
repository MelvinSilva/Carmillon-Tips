import { Component } from '@angular/core';
import { StrapiService } from '../../services/strapi.service';
import { FormsModule, NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

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
  imports: [FormsModule, NgIf],
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
      }
    `,
  ],
  template: `
    <div class="">
      <div class="m-4">
        <h1 class="text-center text-white text-sm p-2 mt-2">
          Proposer un nouvel avantage ici et notre équipe l'ajoutera au
          catalogue dans les plus brefs délais.
        </h1>
        <form
          #form="ngForm"
          (ngSubmit)="submitDeal(form)"
          class="lg:max-w-2xl xl:max-w-3xl mx-auto bg-white p-4 border border-gray-300 shadow-md rounded-lg mt-4"
        >
          <h1 class="text-center text-sm m-2 text-gray-400">
            INFORMATION AGENT
          </h1>

          <div class="relative z-0 mb-4">
            <input
              type="text"
              id="nom"
              name="nom"
              required
              [(ngModel)]="newTips.nom"
              class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
              placeholder=" "
            />
            <label
              class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
            >
              Nom et prénom*
            </label>
          </div>

          <div class="relative z-0 mb-4">
            <input
              type="text"
              id="cp"
              name="cp"
              required
              [(ngModel)]="newTips.cp"
              class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
              placeholder=" "
            />
            <label
              class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
            >
              Numéro de CP*
            </label>
          </div>

          <h1 class="text-center text-sm m-2 text-gray-400">
            DESCRIPTION AVANTAGE
          </h1>

          <div class="relative z-0 mb-4">
            <input
              type="text"
              id="enseigne"
              name="enseigne"
              required
              [(ngModel)]="newTips.enseigne"
              class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
              placeholder=" "
            />
            <label
              class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
              >Nom de l'enseigne*
            </label>
          </div>

          <div class="relative z-0 mb-4">
            <input
              type="text"
              id="ville"
              name="ville"
              required
              [(ngModel)]="newTips.ville"
              class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
              placeholder=" "
            />
            <label
              class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
            >
              Ville et adresse*
            </label>
          </div>

          <div class="relative z-0 col-span-2 mt-4 mb-4">
            <textarea
              id="description"
              name="description"
              required
              [(ngModel)]="newTips.description"
              rows="5"
              class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
              placeholder=" "
            ></textarea>
            <label
              class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
              >Description complète (réduction etc...)*
            </label>
          </div>

          <div class="flex justify-center">
            <button
              type="submit"
              [disabled]="!form.valid"
              class="bg-button hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-30"
            >
              Envoyer votre proposition
            </button>
          </div>
        </form>
      </div>
      <div
        *ngIf="submittedSuccessfully"
        class="bg-teal-100 w-full h-auto absolute bottom border-t-4 border-teal-500 text-teal-900 px-4 py-3 shadow-md z-20"
        role="alert"
      >
        <div class="flex">
          <div class="py-1">
            <svg
              class="fill-current h-6 w-6 text-teal-500 mr-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"
              />
            </svg>
          </div>
          <div>Votre proposition a bien été prise en compte.</div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  `,
})
export class TipsSuggestComponent {
  newTips: Tips = {
    nom: '',
    cp: '',
    date: new Date(),
    description: '',
    ville: '',
    enseigne: '',
  };

  submittedSuccessfully: boolean = false;

  constructor(private strapiService: StrapiService, private router: Router) {}

  submitDeal(form: NgForm) {
    if (form.valid) {
      // envoyer les données si le formulaire est valide
      this.strapiService.createTips(this.newTips).subscribe(
        (response) => {
          console.log('Deal créé avec succès !', response);
          this.submittedSuccessfully = true;
          this.resetForm();
        },
        (error) => {
          console.error('Erreur lors de la création du deal :', error);
          // gérer l'affichage d'une erreur ici
        }
      );
    } else {
      alert('Le formulaire est invalide. Veuillez vérifier les champs.');
      // afficher un message d'erreur pour indiquer à l'utilisateur
      // de remplir correctement les champs du formulaire.
    }
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
    setTimeout(() => {
      this.submittedSuccessfully = false; // Réinitialise le message apres 3s
      this.router.navigateByUrl('/'); // Redirection vers la page d'accueil
    }, 3000);
  }
}
