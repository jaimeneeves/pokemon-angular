import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private limit: Number = 12;

  constructor(private http: HttpClient) { }

  /**
   * List all pokemons
   */
  findAll() {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=${this.limit}`);
  }

  /**
   *  Pokemon detail
   * @param {String} url
   */
  findByURL(url){
    if(url) {
      return this.http.get(url).toPromise();
    }
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
