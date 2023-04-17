import {Component, Input, OnInit} from "@angular/core";
import {Pokemon, PokemonDetails} from "../../helper/types";


@Component({
  selector: 'pokemon-single',
  templateUrl: './pokemon-single.component.html',
  styleUrls: ['./pokemon-single.component.css'],
})
export class PokemonSignle implements OnInit {
  @Input() pokemons: Pokemon[] = [];
  @Input() selectedPokemonArtwork: string = ''
  @Input() showPokemonDetail!: any;
  constructor() {
  }

  ngOnInit() {
    setTimeout(() => {
    console.log(this.showPokemonDetail)

    },5000)
  }
  getButtonTypeClass(typeName: string): string {
    switch(typeName) {
      case 'grass':
        return 'grass-button';
      case 'fire':
        return 'fire-button';
      case 'bug':
        return 'bug-button';
      case 'flying':
        return 'flying-button';
      case 'water':
        return 'water-button';
      case 'electric':
        return 'electric-button';
      case 'poison':
        return 'poison-button';
      default:
        return '';
    }
  }
}
