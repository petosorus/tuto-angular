import { Component, OnDestroy, OnInit } from '@angular/core';
import { BeerService } from '../beer.service';
import { Beer, Hop, Malt } from '../models/beer.model';
import { ActivatedRoute } from '@angular/router';
import { SelectionStore } from '../selection.store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-beer4',
  templateUrl: './beer4.component.html'
})
export class Beer4Component implements OnInit, OnDestroy {
  public beer: Beer;
  public selected: Malt | Hop;

  private subs = new Subscription();

  constructor(private activatedRoute: ActivatedRoute, private selectionStore: SelectionStore) {
    
  }
  
  ngOnInit(): void {
    this.beer = this.activatedRoute.snapshot.data['beers'][0];
    this.subs.add(this.selectionStore.selection.subscribe(value => this.selected = value));
  }

  resetSelected() {
    this.selectionStore.updateSelection(undefined);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
