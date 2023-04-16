import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { LazyLoadImageModule } from 'ng-lazyload-image'; // <-- import it

@NgModule({
  imports:      [ BrowserModule, FormsModule, LazyLoadImageModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [DataService]
})
export class AppModule { }
