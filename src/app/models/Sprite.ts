export class Sprite {
  front_default: string = '';
  other: {
    dream_world: {
      front_default: string
    }
  }

  constructor() {
    this.other = { dream_world: { front_default: '' } }
  }
}
