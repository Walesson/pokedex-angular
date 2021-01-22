import { Component, Input, OnInit } from '@angular/core';
import { Type } from '../../../models/Type';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  @Input() name: string = '';
  @Input() types: Type[] = [];
  @Input() image: string = '';
  @Input() order: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
