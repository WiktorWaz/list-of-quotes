import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { QuotataionInputComponent } from './quotataion-input/quotataion-input.component';
import { ListItemsComponent } from './list-items/list-items.component';



@NgModule({
  declarations: [
    AppComponent,
    QuotataionInputComponent,
    ListItemsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
