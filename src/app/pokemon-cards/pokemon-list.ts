import {Component, Input, OnInit} from "@angular/core";
import {Pokemon} from "../app.component";
import {DataService} from "../data.service";

@Component({
  selector: 'pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonList implements OnInit {
  @Input() pokemons: any;
  @Input() showPokemonDetail: any;
  selectedPokemonArtwork: string = '';
  constructor(private dataService: DataService) {
  }

  ngOnInit() {
  }

  showPokemonDetails(pokemonName: Pokemon) {
    console.log(pokemonName)
    return this.dataService.readDetails(pokemonName.name).subscribe((res) => {
      this.showPokemonDetail = res
      this.selectedPokemonArtwork = pokemonName.artwork
    })
  }
}
