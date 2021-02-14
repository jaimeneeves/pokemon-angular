import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';
import { IPokemonDetail, InitPokemonDetail } from 'src/app/modules/pokemon-detail/models/pokemon-detail';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  public pokemonDetail: IPokemonDetail = InitPokemonDetail;
  public pokemons: [];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    this.getPokemon();
  }

  /**
   * Get pokemon information
   */
  getPokemon(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    const pokemonDetailSize = this.pokemonService.getPokemons().length;

    if(pokemonDetailSize > 0) {
      this.pokemonDetail = this.pokemonService.getPokemons().map(item => {
        return item.detail;
      }).filter(detail => {
        return detail.id == id;
      })[0];
    } else {
      this.pokemonService.findById(id).subscribe({
        next: (data:any) => {
          this.pokemonDetail = data;
        }
      });
    }
  }
}
