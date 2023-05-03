import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule} from "@angular/cdk/drag-drop";
import {PokemonList} from "./pokemon-cards/pokemon-list";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {PokemonSignle} from "./pokemon-cards/pokemon-single/pokemon-single.component";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatPaginatorModule} from "@angular/material/paginator";

@NgModule({
  imports: [BrowserModule, FormsModule, LazyLoadImageModule, MatSlideToggleModule, BrowserAnimationsModule, DragDropModule, MatInputModule, MatSelectModule, MatButtonModule, MatProgressSpinnerModule, MatPaginatorModule],
  declarations: [ AppComponent, PokemonList,PokemonSignle],
  bootstrap: [ AppComponent ],
  providers: [DataService]
})
export class AppModule { }
