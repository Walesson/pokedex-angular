import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Pokemon } from '../../models/Pokemon';
import { PokemonsService } from '../../services/api/pokemons.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public pokemons: Pokemon[] = []
  public total: number = 0;
  public previus: string = '';
  public next: string = '';

  constructor(
    private pokemonService: PokemonsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  private fillPokemons(response:any) {
    this.total = response.count;
    this.previus = response.previous;
    this.next = response.next;
    response.results.map((pokemon:any) => {
      this.getPokemonDetails(pokemon.name)
    })
  }

  getPokemons() {
    this.pokemonService.listPokemons().subscribe((response:any) => {
      this.fillPokemons(response)
    }, (errorResponse) => {
      console.info('falied: ', errorResponse)
    })
  }

  getPokemonDetails(name:string) {
    this.pokemonService.pokemonDetail(name).subscribe((response:any) => {
      let pokemon = new Pokemon();
      pokemon = {...response};
      this.pokemons.push(pokemon)
    }, (errorResponse:any) => {
      console.info('falied: ', errorResponse)
    }).add((response:any) => {
      this.pokemons.sort((pokemon:any, next:any) => {
        if(pokemon.order > next.order) return 1
        if(pokemon.order < next.order) return -1
        return 0;
      })
    })
  }

  selectPokemon(pokemon:Pokemon) {
    this.pokemonService.pokemon = pokemon;
    this.router.navigate(['/pokemon/detalhe']);
  }

  nextPage() {
    this.pokemons = [];
    this.pokemonService.pagination(this.next).subscribe((response:any) => {
      console.log('response: ', response)
      this.fillPokemons(response)
    }, (errorResponse:any) => {
      console.info('falied: ', errorResponse)
    });
  }

  previusPage() {
    this.pokemons = [];
    this.pokemonService.pagination(this.previus).subscribe((response:any) => {
      console.log('response: ', response)
      this.fillPokemons(response)
    }, (errorResponse:any) => {
      console.info('falied: ', errorResponse)
    });
  }

}
