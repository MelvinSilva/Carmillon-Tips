import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForm, FormsModule } from '@angular/forms';

type MyForm = {
  fullName: string;
  email: string;
  message: string;
};

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: ` <div class="flex items-center justify-center min-h-screen">
    <form
      #myform="ngForm"
      (ngSubmit)="onSubmit(myform)"
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <h1 class="text-2xl font-bold mb-4">FORMULAIRE CONTACT</h1>

      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2"
          >Your full name</label
        >
        <input
          type="text"
          name="fullName"
          placeholder="Your full name"
          [(ngModel)]="myForm.fullName"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2"
          >Your email</label
        >
        <input
          type="email"
          name="email"
          placeholder="Your email"
          [(ngModel)]="myForm.email"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2"
          >Your message</label
        >
        <textarea
          name="message"
          placeholder="Your message"
          [(ngModel)]="myForm.message"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        ></textarea>
      </div>

      <div class="flex items-center justify-between">
        <button
          type="submit"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Send
        </button>
      </div>
    </form>
  </div>`,
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
