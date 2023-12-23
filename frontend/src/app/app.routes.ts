import { Routes } from '@angular/router';
import { ContactComponent } from './components/contact.component';
import { HomeComponent } from './components/home.component';
import { SuggestTipsComponent } from './components/tips/suggest-tips.component';
import { CarteComponent } from './components/tips/card.component';

export const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'accueil', component: HomeComponent },
  { path: 'les-bons-plans', component: CarteComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'proposer-un-bon-plan', component: SuggestTipsComponent },
];
