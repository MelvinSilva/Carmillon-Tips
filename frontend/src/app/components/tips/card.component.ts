import { Component, OnInit } from '@angular/core';
import { StrapiService } from '../../services/strapi.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-cartes',
  template: `HELLLOOO
    <div *ngFor="let carte of tipsData">
      <div class="card">
        <!-- Affichez ici les données de votre carte -->
        <h2>{{ carte.ville }}</h2>
        <p>{{ carte.description }}</p>
        <!-- Ajoutez d'autres informations de la carte -->
      </div>
    </div> `,
  standalone: true,
  imports: [NgFor],
  styles: [``],
})
export class CarteComponent implements OnInit {
  tipsData: any[] = [];

  constructor(private strapiService: StrapiService) {}

  ngOnInit(): void {
    this.loadTips();
  }

  loadTips() {
    this.strapiService.getTips().subscribe(
      (data: any[]) => {
        console.log('Données reçues :', data);
        this.tipsData = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
