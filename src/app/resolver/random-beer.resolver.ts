import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { BeerService } from '../beer.service';
import { Beer } from '../models/beer.model';

@Injectable({
  providedIn: 'root'
})
export class RandomBeerResolver implements Resolve<Beer[]> {
  constructor(private beerService: BeerService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Beer[]> {
    return this.beerService.getRandomBeer();
  }
}
