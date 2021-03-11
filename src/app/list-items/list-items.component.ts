import { Quotations } from './../data/quotes-interface';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent {

  faTrash = faTrash;

  @Input()
  quotesAll: Quotations[];

  @Output() newVote = new EventEmitter<Votes>();
  
  @Output() deleteQuotes = new EventEmitter<deleteItem>();
  
  addVote(quotation: Quotations, vote: number) {
    this.newVote.emit({ quotation, vote });
  }

  removeItem(quotation: Quotations)  {
    this.deleteQuotes.emit({ quotation });
  }

}

export interface Votes {
  quotation: Quotations;
  vote: number;
}

export interface deleteItem   {
  quotation: Quotations;
}

