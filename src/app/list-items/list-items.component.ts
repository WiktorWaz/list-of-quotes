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
  


  addVote(quotation: Quotations, vote: number) {
    this.newVote.emit({ quotation, vote });
  }

  removeItem(quotation: Quotations)  {
    console.log(quotation);  
    this.quotesAll = this.quotesAll.filter((e: Quotations)=> {
       return e !== quotation;
    });    
    console.log(this.quotesAll);
  }
}

export interface Votes {
  quotation: Quotations;
  vote: number;
}
