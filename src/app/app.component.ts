import {Component, ElementRef, OnInit} from '@angular/core';
import { DataService } from './data.service';
import { take } from 'rxjs/operators';

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
  selectedPokemon: any;

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
  showMoves(pokemonName: string) {
//     this.selectedPokemon = pokemonName;
// this.selectedPokemon.classList = 'active'
    this.dataService.readDetails(pokemonName).subscribe((res) =>
        // console.log(res.pokemon.types)
        this.chosenPokemonMoves = res
      )
  }
}
