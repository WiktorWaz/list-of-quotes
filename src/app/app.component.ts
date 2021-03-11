import { Quotations } from './data/quotes-interface';
import { QUOTES } from './data/quotes-data';
import { Component } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  emptyQuotes = "Nie dodano jeszcze żadnego cytatu";
  newDate = new Date();
  quotesAll: Quotations[] = QUOTES;
  

  onNewQuotation(quotation: Quotations) {
       this.quotesAll.unshift(quotation); 
       console.log(this.quotesAll);
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

  deleteItem(quotation: Quotations)  {
    console.log(quotation);  
    this.quotesAll = this.quotesAll.filter((e: Quotations)=> {
       return e !== quotation;
    });    
  }

}
