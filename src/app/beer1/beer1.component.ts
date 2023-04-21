import { Component, OnInit } from '@angular/core';
import { BeerService } from '../beer.service';
import { Beer } from '../models/beer.model';

@Component({
  selector: 'app-beer1',
  templateUrl: './beer1.component.html' 
})
export class Beer1Component implements OnInit {

  public beer: Beer;

  constructor(private beerService: BeerService) {}
  
  ngOnInit(): void {
    this.beerService.getRandomBeer().subscribe((beers: Array<Beer>) => {
      this.beer = beers[0];
    });
  }

}
