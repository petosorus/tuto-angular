import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hop, Malt } from 'src/app/models/beer.model';
import { SelectionStore } from 'src/app/selection.store';

@Component({
  selector: 'ingredients4',
  templateUrl: './ingredients4.component.html'
})
export class Ingredients4Component {
  @Input() public malts: Array<Malt>;
  @Input() public hops: Array<Hop>;

  constructor(private selectionStore: SelectionStore) {
    
  }

  onClick(line) {
    this.selectionStore.updateSelection(line);
  }
}
