import {Component, Input, OnInit} from "@angular/core";
import {DataService} from "../data.service";
import {Pokemon, PokemonDetails} from "../helper/types";

@Component({
  selector: 'pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonList implements OnInit {
  @Input() pokemons: Pokemon[] = [];
  pokemonDetails!: PokemonDetails;
  pokemonArtowrk!: string;
  constructor(private dataService: DataService) {
  }

  ngOnInit() {
  }

  showPokemonDetails(pokemonName: Pokemon) {
    const { name, artwork } = pokemonName
    return this.dataService.readDetails(name).subscribe((pokemonDetails: PokemonDetails) => {
      this.pokemonDetails = pokemonDetails
      this.pokemonArtowrk = artwork
    })
  }
}
