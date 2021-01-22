import { Component, Input, OnInit } from '@angular/core';
import { Sprite } from '../../../models/Sprite'
import { Stat } from '../../../models/Stat'

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  @Input() name:string = '';
  @Input() order: string = '';
  @Input() weight:string = '';
  @Input() height:string = '';
  @Input() stats: Stat[] = [];
  @Input() sprites:Sprite = new Sprite;

  constructor() { }

  ngOnInit(): void {

  }

  NumberConvert(number:any) {
    return Number(number)
  }

}
