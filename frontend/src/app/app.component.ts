import { Component, HostBinding, effect, signal } from '@angular/core';
import { HeaderComponent } from './components/header.component';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { CarteComponent } from './components/tips/card.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <app-header></app-header>
    <app-home></app-home>
    <app-cartes></app-cartes>
    <router-outlet></router-outlet>
  `,
  styles: [``],
  imports: [
    HomeComponent,
    RouterOutlet,
    HeaderComponent,
    CarteComponent,
    HttpClientModule,
  ],
})
export class AppComponent {}
