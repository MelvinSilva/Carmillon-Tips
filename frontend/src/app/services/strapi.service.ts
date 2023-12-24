import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { DatePipe } from '@angular/common';
import { departementsParRegion } from '../components/tips-region/departement';

@Injectable({
  providedIn: 'root',
})
export class StrapiService {
  constructor(private http: HttpClient, private datePipe: DatePipe) {}

  private apiUrl = 'http://localhost:1337/api';
  private searchValueSubject = new BehaviorSubject<string>(''); // suivi de la valeur de recherche (initialement vide)

  searchValue$ = this.searchValueSubject.asObservable(); // Observable pour etre ecouté par d'autres parties de l'app

  setSearchValue(value: string) {
    this.searchValueSubject.next(value); // met à jour la valeur de recherche en envoyant une nouvelle valeur via le BehaviorSubject
  }

  getTips(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/tips?populate=*`); // effectue la recherche de tout les tips
  }

  // méthode pour récupérer les départements par région afin dafficher les tips par region seulement
  getTipsByRegion(region: string): Observable<any[]> {
    const departements = departementsParRegion[region];
    const query = departements
      .map((dep) => `filters[departement][$in]=${encodeURIComponent(dep)}`)
      .join('&');

    return this.http.get<any[]>(`${this.apiUrl}/tips?${query}&populate=*`);
  }

  searchTips(query: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/tips?q=${query}`); // effectue la recherche selon la query envoyé
  }

  createTips(dealData: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    const payload = {
      data: {
        ...dealData, // Les données du deal vont ici
      },
    };
    return this.http.post<any>(
      `${this.apiUrl}/propositions`,
      payload,
      httpOptions
    );
  }

  updateTips(carteId: number, commentaire: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    const currentDate = new Date();
    const formattedDate = this.datePipe.transform(currentDate, 'dd MMMM yyyy');
    const payload = {
      data: {
        demande_modification: `${formattedDate} - ${commentaire}`,
      },
    };

    const url = `${this.apiUrl}/tips/${carteId}`;

    return this.http.put<any>(url, payload, httpOptions);
  }
}
