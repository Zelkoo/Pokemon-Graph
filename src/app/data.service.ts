import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {GET_POKEMONS, GET_POKEMONS_DETAILS} from "../graph-ql/graph-query";
import {execute, executeMoves} from "../graph-ql/graph-helper";
import {Pokemon} from "./app.component";




@Injectable()
export class DataService {
  constructor() {}

  public getPokemons(limit: number, offset: number): Observable<any> {
    const variables = { limit, offset };
    return execute('query', GET_POKEMONS, variables);
  }

  public readDetails(pokemonName: string): Observable<any> {
    return executeMoves('query', GET_POKEMONS_DETAILS, {name: pokemonName});
  }
}
