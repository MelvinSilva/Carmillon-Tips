import { Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { TipsResultComponent } from './components/tips/result.component';
import { TipsRegionResult } from './components/tips-region/region.component';
import { TipsSuggestComponent } from './components/tips/suggest.component';
import { FaqComponent } from './components/faq.component';
import { NotFoundComponent } from './components/404.component';
import { ContactComponent } from './components/contact.component';

export const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'accueil', component: HomeComponent },
  { path: 'les-bons-plans', component: TipsResultComponent },
  {
    path: 'region/:region',
    component: TipsRegionResult,
  },
  { path: 'proposer-un-bon-plan', component: TipsSuggestComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'non-disponible', component: NotFoundComponent },
];
