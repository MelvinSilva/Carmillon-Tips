import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StrapiService {
  private apiUrl = 'http://localhost:1337'; // Mettez ici l'URL de votre API Strapi

  constructor(private http: HttpClient) {}

  getTips(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/tips`);
  }
}
