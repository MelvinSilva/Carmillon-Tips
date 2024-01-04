import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForm, FormsModule } from '@angular/forms';
import { WhatsappButtonComponent } from './whatsapp-button';

type MyForm = {
  fullName: string;
  email: string;
  message: string;
};

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, WhatsappButtonComponent],
  template: `
    <div class="flex items-center justify-center min-h-screen">
      <form
        #myform="ngForm"
        (ngSubmit)="onSubmit(myform)"
        class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-auto w-full max-w-lg"
      >
        <h1 class="text-2xl font-bold mb-4">UNE QUESTION ? LÂCHEZ-VOUS !</h1>

        <div class="grid gap-6 sm:grid-cols-2">
          <div class="relative z-0">
            <input
              type="text"
              name="fullName"
              required
              [(ngModel)]="myForm.fullName"
              class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
              placeholder=" "
            />
            <label
              class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
              >Votre nom</label
            >
          </div>

          <div class="relative z-0">
            <input
              type="email"
              name="email"
              [(ngModel)]="myForm.email"
              class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
              placeholder=" "
            />
            <label
              class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
              >Votre email</label
            >
          </div>

          <div class="relative z-0 col-span-2">
            <textarea
              name="message"
              [(ngModel)]="myForm.message"
              rows="5"
              class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
              placeholder=" "
            ></textarea>
            <label
              class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
              >Votre message</label
            >
          </div>
        </div>

        <div class="flex items-center justify-end mt-5">
          <!-- Ajout des classes pour le positionnement -->
          <button
            type="submit"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Envoyer
          </button>
        </div>
      </form>
      <app-whatsapp-button></app-whatsapp-button>
    </div>
  `,
})
export class ContactComponent {
  myForm: MyForm = {
    fullName: '',
    email: '',
    message: '',
  };

  onSubmit(form: NgForm) {
    console.log(
      'Message envoyé : ',
      (this.myForm = {
        fullName: `${this.myForm.fullName}`,
        email: `${this.myForm.email}`,
        message: `${this.myForm.message}`,
      })
    );
  }
}
