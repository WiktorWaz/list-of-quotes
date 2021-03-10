import { Quotations } from './../data/quotes-interface';
import { Component, EventEmitter, Input, Output } from '@angular/core';



@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent {



  @Input()
  quotesAll: Quotations[];

  @Output() newVote = new EventEmitter<Votes>();



  addVote(quotation: Quotations, vote: number) {
    this.newVote.emit({ quotation, vote });
  }

}

export interface Votes {
  quotation: Quotations;
  vote: number;
}
