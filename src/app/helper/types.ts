export interface Pokemon {
  artwork: string,
  id: number,
  image: string,
  selected: boolean,
  name: string,
  url: string
}

export interface PokemonDetails {
  id?: number,
  moves: [],
  name: string,
  sprites?: string,
  types: [],
}
