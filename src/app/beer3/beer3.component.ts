import { Component } from '@angular/core';
import { BeerService } from '../beer.service';
import { Beer, Hop, Malt } from '../models/beer.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-beer3',
  templateUrl: './beer3.component.html'
})
export class Beer3Component {
  public beer: Beer;
  public selected: Malt | Hop

  constructor(private activatedRoute: ActivatedRoute) {
    this.beer = this.activatedRoute.snapshot.data['beers'][0];
  }

  onSelected(selected) {
    this.selected = selected;
  }

  resetSelected() {
    this.selected = undefined
  }
}
