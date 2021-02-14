export interface IResPokemon {
  count: Number,
  next: any,
  previous: any,
  results: Array<any>
};

export const initResponse = {
  count: 0,
  next: "",
  previous: "",
  results: []
};
