import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { WhatsappButtonComponent } from './whatsapp-button';
import { CommonModule, NgIf } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

interface Form {
  fullName: string;
  email: string;
  message: string;
  date: Date;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, WhatsappButtonComponent, NgIf],
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
      input,
      textarea {
        border-radius: 8px;
      }
    `,
  ],
  template: `
    <div class="flex flex-col items-center justify-center min-h-screen">
      <h1 class="text-center text-white text-2xl p-2 ">
        Exprimez-vous ! Des demandes spéciales ? Des idées folles ? On est tout
        ouïe ! 💡
      </h1>
      <form
        #form="ngForm"
        (ngSubmit)="onSubmit(form)"
        class="bg-white shadow-md rounded px-4 pt-6 pb-8 mb-4 mx-auto w-full max-w-2xl  mt-8"
      >
        <h1 class="text-center m-2 text-gray-400 mb-4">
          REMPLISSEZ AVEC SOIN, ON REPONDS VITE ! 🚀
        </h1>

        <div class="relative mt-4">
          <input
            type="text"
            name="fullName"
            id="fullName"
            required
            [(ngModel)]="newForm.fullName"
            class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            for="fullName"
            class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >Nom*</label
          >
        </div>
        <div class="relative mt-4">
          <input
            type="email"
            name="email"
            id="email"
            required
            [(ngModel)]="newForm.email"
            class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            for="email"
            class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >E-mail*</label
          >
        </div>
        <div class="relative mt-4 ">
          <textarea
            id="message"
            name="message"
            required
            [(ngModel)]="newForm.message"
            rows="5"
            class="block w-full rounded-t-lg px-2.5 pb-2.5 pt-5 text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          ></textarea>
          <label
            for="message"
            class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >Votre message</label
          >
        </div>

        <div class="flex items-center justify-end mt-5">
          <button
            type="submit"
            [disabled]="!form.valid"
            class="bg-button hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Envoyer
          </button>
        </div>
      </form>
      <div
        *ngIf="onSubmitSuccess"
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
    <app-whatsapp-button></app-whatsapp-button>
  `,
})
export class ContactComponent {
  newForm: Form = {
    fullName: '',
    email: '',
    message: '',
    date: new Date(),
  };

  onSubmitSuccess: boolean = false;

  onSubmit(form: NgForm) {
    console.log(
      'Message envoyé : ',
      (this.newForm = {
        fullName: `${this.newForm.fullName}`,
        email: `${this.newForm.email}`,
        message: `${this.newForm.message}`,
        date: new Date(),
      })
    );

    this.onSubmitSuccess = true;

    setTimeout(() => {
      this.onSubmitSuccess = false;
      this.resetForm();
    }, 3000);
  }

  resetForm() {
    this.newForm = {
      fullName: '',
      email: '',
      message: '',
      date: new Date(),
    };
  }
}
