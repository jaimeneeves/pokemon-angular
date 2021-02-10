import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private limit: 10;

  constructor(private http: HttpClient) { }

  /**
   * List all pokemons
   */
  findAll() {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=${this.limit}`);
  }

  /**
   * Find pokemon by id
   * @param {Number} id
   */
  findById(id) {
    const pokemonId = id;
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
  }
}
