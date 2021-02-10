import { Component } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pokemon-angular';

  constructor(private pokemonService: PokemonService) {

    pokemonService.findAll().subscribe({
      next: (data: any) => {
        console.log(data);
      },
      error: (e) => {

      },
      complete: () => {
        console.info("Complete OK")
      }
    });
  }

}
