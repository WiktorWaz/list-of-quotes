import { Quotations } from './data/quotes-interface';
import { QUOTES } from './data/quotes-data';
import { Component } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {


  quotesAll: Quotations[] = QUOTES;

  onNewQuotation(quotation: Quotations) {
       this.quotesAll.unshift(quotation); 
  }

  addVote(quotation: Quotations, vote: number) {
    quotation.vote += vote;
  }

  sortList()  {
    this.quotesAll.sort( (a, b)=> {
      return  b.vote - a.vote;
    }); 
  }

  ngOnInit()  {
    this.sortList();
  }
}
