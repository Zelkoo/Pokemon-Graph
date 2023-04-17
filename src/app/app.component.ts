import {Component, OnInit} from '@angular/core';
import { DataService } from './data.service';
import {take} from 'rxjs/operators';
import {Pokemon} from "./helper/types";



@Component({
  selector: 'root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  limit = 14;
  offset = 0;
  pokemons: Pokemon[] = [];
  currentPage: number = 0
  chosenPokemonMoves: any
  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    this.loadPokemons();
  }

  loadPokemons() {
    this.dataService
      .getPokemons(this.limit, this.offset)
      .pipe(take(1))
      .subscribe((result) => {
        this.pokemons = result.pokemons.results;
        console.log(result)
      });
  }

  loadNextPage() {
    this.offset += this.limit;
    this.loadPokemons();
    this.chosenPokemonMoves = ''

    if (this.currentPage < 125) this.currentPage++

  }

  loadPreviousPage() {
    if (this.offset >= this.limit) {
      this.offset -= this.limit;
      this.loadPokemons();
      this.chosenPokemonMoves = ''

      this.currentPage--
    }
  }

}
