import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-map-area',
  standalone: true,
  imports: [],
  styles: [
    `
      .container {
        margin: 0 auto;
        padding: 0 20px;
      }
      .svg-container {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      svg {
        stroke: #3f2a56;
        stroke-width: 2.5px;
      }

      @media (min-width: 1000px) {
        svg {
          width: 500px;
        }
      }

      svg path:hover {
        fill: #ee528a;
        scale: 1.015;
        transition: all 0.2s ease-in-out;
        cursor: pointer;
      }
    `,
  ],
  template: `
    <div class="container">
      <div class="svg-container">
        <img class="svg" src="../../../assets/map.svg" alt="map-french" />
      </div>
    </div>
  `,
})
export class MapAreaComponent {
  @ViewChild('maCarte') maCarte!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    // Ajoutez des écouteurs d'événements aux régions
    const regions = this.maCarte.nativeElement.querySelectorAll('path');
    regions.forEach((region: { getAttribute: (arg0: string) => any }) => {
      this.renderer.listen(region, 'click', () => {
        // Gérez l'événement de clic ici
        const regionId = region.getAttribute('id');
        console.log('Region sélectionnée :', regionId);
        // Effectuez des actions en fonction de la région sélectionnée
      });
    });
  }
}
