import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonDetailComponent } from './modules/pokemon-detail/pokemon-detail.component';
import { PokemonHomeComponent } from './modules/pokemon-home/pokemon-home.component';
import { PokemonComponent } from './modules/pokemon/pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonDetailComponent,
    PokemonHomeComponent,
    PokemonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
