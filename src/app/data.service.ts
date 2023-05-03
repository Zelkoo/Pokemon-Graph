import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { GET_POKEMONS, GET_POKEMONS_ARTWORK, GET_POKEMONS_DETAILS } from '../graph-ql/graph-query';
import {execute, executeMoves} from "../graph-ql/graph-helper";

@Injectable()
export class DataService {
  constructor() {}

  public getPokemons(limit: number, offset: number): Observable<any> {
    const options = { limit, offset };
    return execute('query', GET_POKEMONS, options);
  }

  public getPokemonsArtwork(limit: number, offset: number): Observable<any> {
    const options = { limit, offset };
    return execute('query', GET_POKEMONS_ARTWORK, options).pipe(
      map(({ pokemons: { results: artworks } }) => artworks.map((data: { artwork: string }) => data.artwork))
    );
  }

  public readDetails(pokemonName: string): Observable<any> {
    return executeMoves('query', GET_POKEMONS_DETAILS, {name: pokemonName});
  }

}
