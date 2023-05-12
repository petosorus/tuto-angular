import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Malt, Hop } from './models/beer.model';

@Injectable({
  providedIn: 'root'
})
export class SelectionStore {

  public selection: Subject<Malt | Hop> = new Subject<Malt | Hop>();

  public updateSelection(value: Malt | Hop) {
    this.selection.next(value);
  }
}
