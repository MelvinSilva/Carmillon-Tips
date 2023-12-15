import { Routes } from '@angular/router';
import { ContactComponent } from './components/contact.component';
import { HomeComponent } from './components/home.component';
import { SuggestTipsComponent } from './components/tips/suggest-tips.component';

export const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'accueil', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'proposer-un-avantage', component: SuggestTipsComponent },
];
