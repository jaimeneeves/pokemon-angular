import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';
import { ResPokemon, initResponse } from 'src/app/modules/pokemon-home/models/home';

@Component({
  selector: 'app-pokemon-home',
  templateUrl: './pokemon-home.component.html',
  styleUrls: ['./pokemon-home.component.scss']
})
export class PokemonHomeComponent implements OnInit {

  public pokemons: ResPokemon = initResponse;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.list();
  }

  /**
   * List all pokemon
   */
  list(){
    this.pokemonService.findAll().subscribe({
      next: async (data: any) => {
        if(data.results.length > 0) {
          const results = data.results.map(async item => {
            const obj = {};

            obj["name"]   = item.name;
            obj["detail"] = await this.pokemonService.findByURL(item.url);
            return obj;
          });

          this.pokemons.results = await Promise.all(results);
        }
      },
      error: (e) => {},
      complete: () => {}
    });
  }

}
