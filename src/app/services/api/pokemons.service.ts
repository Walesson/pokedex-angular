import { Injectable } from '@angular/core';
import { ConfigService } from './config.service'
import { Pokemon } from '../../models/Pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  public pokemon: Pokemon = new Pokemon;

  constructor(private service: ConfigService) { }

  listPokemons(limit:number = 20, offset:number = 0) {
    return this.service.get(`pokemon?limit=${limit}&offset=${offset}`)
  }

  pokemonDetail(name:string) {
    return this.service.get(`pokemon/${name}`)
  }

  pagination(url:string) {
    return this.service.getWithoutBase(url)
  }

}
