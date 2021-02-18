import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';
import { IResPokemon, initResponse } from 'src/app/modules/pokemon-home/models/home';
import { IListingOptions } from 'src/app/shared/utils';

@Component({
  selector: 'app-pokemon-home',
  templateUrl: './pokemon-home.component.html',
  styleUrls: ['./pokemon-home.component.scss']
})
export class PokemonHomeComponent implements OnInit {

  pokemons: IResPokemon = initResponse;
  searchName: string;
  searchNotFound: boolean = false;

  // Pagination
  next: string;
  prev: string;
  page: number = 1;
  listOpt: IListingOptions = { offset: 0 };

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.list();
  }

  /**
   * List all pokemon
   */
  list(): void {

    this.listOpt.offset = ((this.page - 1) * this.pokemonService.getLimit());

    this.pokemonService.findAll(this.listOpt).subscribe({
      next: async (data: any) => {

        this.next = data.next ? data.next : "";
        this.prev = data.previous ? data.previous: "";

        if(data.results.length > 0) {
          const results = data.results.map(async item => {
            const obj = {};

            obj["name"]   = item.name;
            obj["detail"] = await this.pokemonService.findByURL(item.url);
            return obj;
          });

          this.pokemons.results = await Promise.all(results);
          this.pokemonService.setPokemons(this.pokemons.results);
        }
      },
      error: (e) => {},
      complete: () => {}
    });
  }

  /**
   * Search
   */
  searchPokemon() {
    const name = this.searchName;
    this.searchNotFound = false;
    if(name) {
      this.pokemonService.findById(name).subscribe({
        next: (data: any) => {
          if(data) {
            this.pokemons.results = [];
            this.pokemons.results.push({
              name: data.name,
              detail: data
            });
          }
        },
        error: (err) => {
          if(err.status == 404) {
            this.searchNotFound = true;
          }
        }
      });
    }
  }

  /**
   * Next page
   * @param page
   */
  paginationNext(page:number) {
    const nextPage = page + 1;
    this.page = nextPage;
    this.list();
  }

  /**
   * Prev page
   * @param page
   */
  paginationPrev(page:number) {
    if(page > 0) {
      const nextPage = page - 1;
      this.page = nextPage;
      this.list();
    }
  }

}
