import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IListingOptions } from 'src/app/shared/utils';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private pokemons: Array<any> = [];

  // Pagination options
  private limit: number = 12;
  private offset: number = 0;

  constructor(private http: HttpClient) { }

  setPokemons(pokemons) {
    this.pokemons = pokemons;
  }

  getPokemons() {
    return this.pokemons;
  }

  getLimit() {
    return this.limit;
  }

  getOffset() {
    return this.offset;
  }

  /**
   * List all pokemons
   */
  findAll(options?: IListingOptions) {
    const limit = options.limit ? options.limit : this.getLimit();
    const offset = options.offset ? options.offset : this.getOffset();

    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
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
  findById(term: string): Observable<{}> {
    term = term.trim();
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${term}`).pipe();
  }
}
