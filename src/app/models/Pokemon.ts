import { Ability } from './Ability';
import { Species } from './Species';
import { Type } from './Type';
import { Stat } from './Stat';
import { Sprite } from './Sprite';

export class Pokemon {
  id: number = 0;
  order: number = 0;
  name: string = '';
  height: number = 0;
  types: Type[];
  abilities: Ability[];
  spices: Species[];
  weight: number = 0;
  sprites: Sprite;
  stats: Stat[];

  constructor() {
    this.types = [];
    this.abilities = [];
    this.spices = [];
    this.stats = [];
    this.sprites = new Sprite();
  }
}

