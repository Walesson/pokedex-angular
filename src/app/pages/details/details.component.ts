import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../../models/Pokemon';
import { PokemonsService } from '../../services/api/pokemons.service'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public pokemon: Pokemon = new Pokemon;

  constructor(
    private pokemonService: PokemonsService
  ) {
    this.pokemon = this.pokemonService.pokemon
  }

  ngOnInit(): void {
    console.info('current pokemon', this.pokemon)
  }

}
