import { Routes } from '@angular/router';
import { ContactComponent } from './components/contact.component';
import { HomeComponent } from './components/home.component';
import { TipsResultComponent } from './components/tips/result.component';
import { TipsRegionResult } from './components/tips-region/region.component';
import { TipsSuggestComponent } from './components/tips/suggest.component';
import { FaqComponent } from './components/faq.component';
import { NotFoundComponent } from './components/404.component';

export const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'accueil', component: HomeComponent },
  { path: 'les-bons-plans', component: TipsResultComponent },
  {
    path: 'region/:region',
    component: TipsRegionResult,
  },
  { path: 'proposer-un-bon-plan', component: TipsSuggestComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'non-disponible', component: NotFoundComponent },
];
