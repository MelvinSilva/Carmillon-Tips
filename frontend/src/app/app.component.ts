import { Component } from '@angular/core';
import { HeaderComponent } from './components/header.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <app-header></app-header>
    <!-- <app-cartes></app-cartes> -->
    <router-outlet></router-outlet>
  `,
  styles: [``],
  imports: [
    RouterOutlet,
    HeaderComponent,
    HttpClientModule,
    RouterLink,
    FooterComponent,
  ],
})
export class AppComponent {}
