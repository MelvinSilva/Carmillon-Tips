import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [NgFor, NgIf, NgClass],
  template: `
    <div class="faq p-4 text-sm h-screen lg:w-3/4 mx-auto">
      <h1 class="text-center font-semibold text-white text-xl mt-4 mb-4 m-2">
        Foire aux questions
      </h1>
      <div *ngFor="let faq of faqs" class="faq-item bg-gray-100 m-2">
        <div class="question font-semibold" (click)="toggleAnswer(faq)">
          {{ faq.question }}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 inline-block ml-2 transform"
            [class.rotate180]="faq.showAnswer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
              *ngIf="!faq.showAnswer"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 15l7-7 7 7"
              *ngIf="faq.showAnswer"
            />
          </svg>
        </div>
        <div class="answer text-gray-700 mt-1" [class.show]="faq.showAnswer">
          {{ faq.answer }}
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  `,
  styles: [
    `
      .faq-item {
        padding: 10px;
        border-radius: 5px; /* Ajout du border-radius */
        overflow: hidden; /* Masquage du contenu débordant */
      }
      .question {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #3f2a56;
      }
      .answer {
        overflow: hidden;
        max-height: 0;
        transition: max-height 0.3s ease-out;
      }
      .answer.show {
        max-height: 1000px; /* Valeur suffisamment grande pour montrer tout le contenu */
        transition: max-height 0.5s ease-in;
      }
      .rotate180 {
        transform: rotate(180deg);
        transition: transform 0.3s ease-in-out;
      }
    `,
  ],
})
export class FaqComponent {
  faqs = [
    {
      question: 'Comment rechercher un bon plan ?',
      answer:
        "Vous avez la possibilité de rechercher un bon plan directement sur la page d'accueil en cliquant sur une région de la carte interactive. Vous obtiendrez les bons plans disponibles dans la région choisie. Vous pouvez également rechercher un bon directement en cliquant sur le bouton 'Recherche' dans le menu situé en haut ou en bas de l'application. Celui-ci vous permet de chercher un bon plan soit par ville, nom de l'enseigne ou par une catégorie.",
      showAnswer: false,
    },
    {
      question: 'Comment je peux proposer un bon plan ?',
      answer:
        "Pour proposer un bon plan que vous avez déniché chez un commerçant, il suffit de se rendre dans le menu l'application et de cliquer sur 'Proposer un bon pan'. Ensuite il faudra remplir le formulaire avec le plus de détails possible concernant le bon plan. Notre équipe validera ce bon plan après vérification.",
      showAnswer: false,
    },
    {
      question: "Le bon plan n'est plus valable, que faire ?",
      answer:
        "Vous avez la possibilité d'éditer un bon plan en cliquant sur le petit crayon en bas à droite du bon plan en question. Vous aurez une fenêtre qui s'ouvrira et vous pourrez dire si le bon plan est 'TOUJOURS VALABLE' ou s'il est 'EXPIRÉ'. Il faudra préciser des informations si le bon plan est expiré afin que notre équipe puisse le retirer après vérification.",
      showAnswer: false,
    },
    {
      question: 'Comment sont gérés les vérifications des bons plans ?',
      answer:
        "La mention VERIFIÉ DERNIÈREMENT veut dire que le bon plan a été vérifié et utilisé récemment. A RE-VERIFIER signifie que celui-ci n'a pas été vérifié depuis un certain moment. Vous avez justement la possibilité, en utilisant un bon plan, de cliquer sur le petit crayon en bas à droite de cocher la case 'TOUJOURS VALABLE' pour mettre à jour le statut et afficher une date de vérification récente au jour près.",
      showAnswer: false,
    },
    {
      question: 'Je peux modifier un bon plan existant ?',
      answer:
        "Il n'est pas possible de modifier les informations d'un bon plan existant mais n'hésitez pas à nous contacter via notre rubrique 'Contact' si besoin.",
      showAnswer: false,
    },
  ];

  toggleAnswer(faq: any) {
    faq.showAnswer = !faq.showAnswer;
  }
}
