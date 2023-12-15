import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StrapiService {
  constructor(private http: HttpClient) {}

  private apiUrl = 'http://localhost:1337/api';
  private searchValueSubject = new BehaviorSubject<string>(''); // suivi de la valeur de recherche (initialement vide)

  searchValue$ = this.searchValueSubject.asObservable(); // Observable pour etre ecouté par d'autres parties de l'app

  setSearchValue(value: string) {
    this.searchValueSubject.next(value); // met à jour la valeur de recherche en envoyant une nouvelle valeur via le BehaviorSubject
  }

  getTips(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/tips?populate=*`); // effectue la recherche de tout les tips
  }

  searchTips(query: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/tips?q=${query}`); // effectue la recherche selon la query envoyé (ville)
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
}
