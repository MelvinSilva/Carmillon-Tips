import { Component, HostBinding, effect, signal } from '@angular/core';
import { HeaderComponent } from './components/header.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CarteComponent } from './components/tips/card.component';
import { FooterComponent } from './components/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <app-header></app-header>
    <!-- <app-cartes></app-cartes> -->
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `,
  styles: [``],
  imports: [
    RouterOutlet,
    HeaderComponent,
    CarteComponent,
    HttpClientModule,
    RouterLink,
    FooterComponent,
  ],
})
export class AppComponent {}
