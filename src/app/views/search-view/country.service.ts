import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(
      private http: HttpClient
  ) { }

  getCountries(name) {
      return this.http.get<any[]>('https://restcountries.com/v3.1/name/'+name);
  }
}
