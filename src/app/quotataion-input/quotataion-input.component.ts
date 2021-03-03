import { Quotations } from './../data/quotes-interface';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-quotataion-input',
  templateUrl: './quotataion-input.component.html',
  styleUrls: ['./quotataion-input.component.sass']
})
export class QuotataionInputComponent  {

  inputBoolean = true;

  @Output() newQuotation = new EventEmitter<Quotations>();

  quotationValue: Quotations = {quotation: '', author: '', vote: 0};

  addQoutatoin()  {
    this.newQuotation.emit(this.quotationValue);
    this.quotationValue = {quotation: '', author: '', vote: 0};
  }

  buttonDisabled()  {
    this.quotationValue.author.length !== 0 && this.quotationValue.quotation.length !== 0 ? this.inputBoolean = false :  this.inputBoolean;
  }

  buttonRestart() {
    this.inputBoolean = true;
  }

}
