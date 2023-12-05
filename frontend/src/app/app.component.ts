import { Component, HostBinding, effect, signal } from '@angular/core';
import { HeaderComponent } from './components/header.component';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <app-header></app-header>
    <app-home></app-home>
    <router-outlet></router-outlet>
  `,
  styles: [``],
  imports: [HomeComponent, RouterOutlet, HeaderComponent],
})
export class AppComponent {}
