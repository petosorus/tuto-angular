import { Component } from '@angular/core';
import { Subscription, map } from 'rxjs';
import { SelectionStore } from 'src/app/selection.store';

@Component({
  selector: 'selected-uppercase',
  templateUrl: './selected-uppercase.component.html'
})
export class SelectedUppercaseComponent {
  public selected: String;
  private subs = new Subscription();

  constructor(private selectionStore: SelectionStore) {
    
  }

  ngOnInit() {
    this.subs.add(
      this.selectionStore.selection.pipe(
        map(value => {
          return value.name.toUpperCase();
        })
      )
      .subscribe(value => this.selected = value)
    );
  }
}
