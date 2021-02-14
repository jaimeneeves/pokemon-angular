export interface Isprites {
  other: {
    dream_world: {
      front_default: String
    }
  }
};

export interface IPokemonDetail {
  id: Number;
  height?: Number;
  weight?: Number;
  name: String;
  moves: Array<any>;
  abilities: Array<any>;
  sprites: Isprites
};

export const InitPokemonDetail = {
  id: 0,
  height: 0,
  weight: 0,
  name: "",
  moves: [],
  abilities: [],
  sprites: {
    other: {
      dream_world: {
        front_default: ""
      }
    }
  }
};
