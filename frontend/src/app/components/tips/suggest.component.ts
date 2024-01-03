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
          <div class="mb-2 relative">
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
              Nom et prénom*
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
              Numéro de CP*
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
              Nom de l'enseigne*
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
              Ville et adresse*
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
              Description complète (réduction etc...)*
            </span>
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
