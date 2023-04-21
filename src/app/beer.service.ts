import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from 'rxjs';
import { Beer } from './models/beer.model';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor(private http: HttpClient) { }

  public getRandomBeer(): Observable<Array<Beer>> {
    return this.http.get<Array<Beer>>('https://api.punkapi.com/v2/beers/random');
  }
}
