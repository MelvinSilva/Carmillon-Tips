import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForm, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `<h1>Angular 17 template-based contact form by example</h1>

    <form #myform="ngForm" (ngSubmit)="onSubmit(myform)">
      <input
        type="text"
        name="fullName"
        placeholder="Your full name"
        [(ngModel)]="myForm.fullName"
      />
      <br />

      <input
        type="email"
        name="email"
        placeholder="Your email"
        [(ngModel)]="myForm.email"
      />
      <br />

      <textarea
        name="message"
        placeholder="Your message"
        [(ngModel)]="myForm.message"
      ></textarea>
      <br />
      <input type="submit" value="Send" />
    </form>`,
})
export class ContactComponent {
  myForm: any = {}; // Déclare un objet pour stocker les valeurs du formulaire

  onSubmit(form: NgForm) {
    console.log('Your form data : ', (this.myForm = {}));
  }
}
