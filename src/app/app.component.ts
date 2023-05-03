import {Component, OnInit} from '@angular/core';
import { DataService } from './data.service';
import {delay, take} from 'rxjs/operators';
import {Pokemon} from "./helper/types";
import {PageEvent} from "@angular/material/paginator";



@Component({
 selector: 'root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  limit = 14;
  offset = 0;
  pokemons!: Pokemon[];
  currentPage: number = 0
  chosenPokemonMoves: any
  totalItems!: number;
  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.totalItems = 1000;
    this.loadPokemons();
  }

  loadPokemons() {
    this.dataService
      .getPokemons(this.limit, this.offset)
      .pipe(take(1))
      .subscribe((result) => {
        this.pokemons = result.pokemons.results;
      });
  }

  onPageChange(event: PageEvent) {
    this.offset = event.pageIndex * event.pageSize;
    this.limit = event.pageSize;
    this.loadPokemons();
    this.chosenPokemonMoves = '';
    this.currentPage = event.pageIndex + 1;
  }

}
