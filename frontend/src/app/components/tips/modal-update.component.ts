import { Component, Inject } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogModule,
} from '@angular/material/dialog';
import { StrapiService } from '../../services/strapi.service';

@Component({
  selector: 'app-modal-update',
  standalone: true,
  imports: [MatDialogModule, FormsModule],
  styles: [
    `
      .bg-send {
        background-color: #ee528a;
      }
      .bg-text {
        background-color: #d7d7d7;
        color: #3f2a56;
      }
    `,
  ],
  template: `
    <div
      class="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 p-6"
    >
      <div class="fixed inset-0 bg-black opacity-90"></div>
      <div
        class="bg-white rounded-lg shadow-lg z-10 relative max-w-md w-full p-6"
      >
        <div class="bg-text rounded-lg p-2">
          <h2 class="text-lg font-bold text-center">
            ⓘ Dites nous si l'avantage est toujours valable le
            {{ currentDate }} ou s'il est expiré afin de mettre à jour les
            informations.
          </h2>
        </div>

        <!-- Cases à cocher -->
        <div class="mb-4 mt-4 flex flex-col">
          <!-- <p class="text-xs text-gray-500">
            Cochez la case correspondante
            <span class="text-xs text-red-500 italic">(requis)</span>
          </p> -->
          <label class="items-center">
            <input
              type="checkbox"
              class="form-checkbox"
              name="toujoursValable"
              [(ngModel)]="toujoursValable"
            />
            <span class="ml-2 text-gray-600 text-md">TOUJOURS VALABLE</span>
          </label>
          <label class="items-center">
            <input
              type="checkbox"
              class="form-checkbox"
              name="expire"
              [(ngModel)]="expire"
            />
            <span class="ml-2 text-gray-600 text-md">EXPIRÉ</span>
          </label>
        </div>

        <textarea
          class="w-full h-20 border border-gray-300 rounded p-2 focus:outline-none placeholder:text-xs"
          placeholder="Si expiré, renseigner un maximum d'info ainsi que votre nom et CP"
          [(ngModel)]="commentaire"
        ></textarea>

        <!-- Actions de la modal -->
        <div class="mt-4 flex justify-end">
          <button
            class="mr-2 px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 focus:outline-none"
            (click)="closeModal()"
          >
            Annuler
          </button>
          <button
            class="bg-send px-4 py-2 text-white rounded focus:outline-none"
            (click)="sendCommentaire()"
          >
            Envoyer
          </button>
        </div>
      </div>
    </div>
  `,
})
export class ModalUpdate {
  commentaire: string = '';
  carteId: any;
  toujoursValable: boolean = false;
  expire: boolean = false;
  currentDate: any;

  constructor(
    public dialogRef: MatDialogRef<ModalUpdate>,
    @Inject(MAT_DIALOG_DATA)
    public data: { carteId: number; strapiService: StrapiService }
  ) {
    this.currentDate = this.formatDate(new Date());
  }

  ///////////////////////////////////////////////// DATE FORMAT ////////////////////////////////////////////////////////
  formatDate(date: Date): string {
    const months = [
      'janvier',
      'février',
      'mars',
      'avril',
      'mai',
      'juin',
      'juillet',
      'août',
      'septembre',
      'octobre',
      'novembre',
      'décembre',
    ];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
  }

  closeModal(): void {
    this.dialogRef.close();
  }

  //////////////////////////////////////////////// ENVOYER LA MODIFICATION ////////////////////////////////////////////////////////
  sendCommentaire(): void {
    if (!this.toujoursValable && !this.expire) {
      console.log('Veuillez sélectionner au moins une option.');
      return; // Rien envoyer si aucune case n'est cochée
    }
    let updatedCommentaire = this.commentaire; // Initialisez le commentaire avec le contenu du textarea

    // Si la case "Toujours valable" est cochée, ajoutez cette information au commentaire
    if (this.toujoursValable) {
      updatedCommentaire = updatedCommentaire
        ? `Toujours valable -  Commentaire : ${updatedCommentaire}`
        : 'Toujours valable';
    }

    // Si la case "Expiré" est cochée, ajoutez cette information au commentaire
    if (this.expire) {
      updatedCommentaire = updatedCommentaire
        ? `Expiré - Commentaire : ${updatedCommentaire}`
        : 'Expiré';
    }

    // Envoi des données au service
    if (!this.data.carteId || !this.data.strapiService) {
      return;
    }
    this.data.strapiService
      .updateTips(this.data.carteId, updatedCommentaire)
      .subscribe(
        (data: any) => {
          console.log('Commentaire envoyé avec succès :', data);
          this.closeModal();
        },
        (error) => {
          console.error("Erreur lors de l'envoi du commentaire :", error);
        }
      );
  }
}
