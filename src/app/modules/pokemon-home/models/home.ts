export interface ResPokemon {
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
