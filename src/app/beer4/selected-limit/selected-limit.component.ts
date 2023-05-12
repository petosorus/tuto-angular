import { Component } from '@angular/core';
import { Subscription, map, take } from 'rxjs';
import { Malt, Hop } from 'src/app/models/beer.model';
import { SelectionStore } from 'src/app/selection.store';

@Component({
  selector: 'selected-limit',
  templateUrl: './selected-limit.component.html'
})
export class SelectedLimitComponent {
  public selected: Malt | Hop;
  private subs = new Subscription();

  constructor(private selectionStore: SelectionStore) {
    
  }

  ngOnInit() {
    this.subs.add(
      this.selectionStore.selection.pipe(
        take(3)
      )
      .subscribe(value => this.selected = value)
    );
  }
}
