import { Routes } from '@angular/router';
import { ContactComponent } from './components/contact.component';
import { HomeComponent } from './components/home.component';
import { SuggestTipsComponent } from './components/tips/suggest-tips.component';

export const routes: Routes = [
  { path: '', redirectTo: '/les-bons-plans', pathMatch: 'full' },
  { path: 'les-bons-plans', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'proposer-un-bon-plan', component: SuggestTipsComponent },
];
