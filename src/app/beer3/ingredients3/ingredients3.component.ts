import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hop, Malt } from 'src/app/models/beer.model';

@Component({
  selector: 'ingredients3',
  templateUrl: './ingredients3.component.html',
  styleUrls: ['./ingredients3.component.scss']
})
export class Ingredients3Component {
  @Input() public malts: Array<Malt>;
  @Input() public hops: Array<Hop>;

  @Output() public selected: EventEmitter<Malt | Hop>;

  constructor() {
    this.selected = new EventEmitter<Malt | Hop>();
  }

  onClick(line) {
    this.selected.emit(line);
  }
}
