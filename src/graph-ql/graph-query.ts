export const url = 'https://graphql-pokeapi.graphcdn.app/';

export const GET_POKEMONS_DETAILS = `query pokemon($name: String!) {
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
// accuracy
// power
// pp

export const GET_POKEMONS = `
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
export const GET_POKEMONS_ARTWORK = `
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      results {
        artwork
      }
    }
  }
`;
