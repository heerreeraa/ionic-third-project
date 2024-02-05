import { Component, OnInit } from '@angular/core';
import { PokemonService } from './services/cities-service.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
})
export class PokemonPage implements OnInit {
  data: any;

  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit() {
    this.pokemonService.getPokemons().subscribe(
      (response) => {
        this.data = response;
        console.log(this.data);
        
      });
  }

}
