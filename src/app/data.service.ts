import { Injectable } from '@angular/core';
import { Observable, from, throwError } from 'rxjs';

const url = 'https://graphql-pokeapi.graphcdn.app/';

const GET_POKEMONS_DETAILS = `query pokemon($name: String!) {
  pokemon(name: $name) {
    id
    name
    sprites {
      front_default
    }
    moves {
      move {
        name
      }
    }
    types {
      type {
        name
      }
    }
  }
}`
const GET_POKEMONS = `
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      status
      message
      results {
        url
        name
        image
        id
        artwork
      }
    }
  }
`;
const variables2 = {
  "name": "rattata"
}
const execute = (
  type: 'query',
  query: string,
  vars: any = {}
): Observable<any> => {
  return from(
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ [type]: query, variables: vars }),
    })
      .then((data) => data.json())
      .then((data) => data['data'])
      .catch(throwError)
  );
};
const executeMoves = (
  type: 'query',
  query: string,
  vars: any = {}
): Observable<any> => {
  return from(
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ [type]: query, variables: vars }),
    })
      .then((data) => data.json())
      .then((data) => data['data'])
      .catch(throwError)
  );
};
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
