import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonComponent } from './modules/pokemon/pokemon.component';
import { PokemonHomeComponent } from './modules/pokemon-home/pokemon-home.component';
import { PokemonDetailComponent } from './modules/pokemon-detail/pokemon-detail.component';


const routes: Routes = [
  {
    path: "pokemon",
    component: PokemonComponent,
    children:[
      {
        path: "",
        component: PokemonHomeComponent
      },
      {
        path: ":id",
        component: PokemonDetailComponent
      }
    ]
  },
  { path: '', redirectTo: '/pokemon', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    useHash: true,
    enableTracing: false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
