import {Component, ElementRef, OnInit} from '@angular/core';
import { DataService } from './data.service';
import {take, tap} from 'rxjs/operators';

export interface Pokemon {
  artwork: string,
  id: number,
  image: string,
  selected: boolean,
  name: string,
  url: string
}

@Component({
  selector: 'my-app',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  limit = 14;
  offset = 0;
  pokemons: any[] = [];
  data: any
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
  showMoves(pokemonName: Pokemon) {
    this.dataService.readDetails(pokemonName.name).subscribe((res) => this.chosenPokemonMoves = res)
  }
}
