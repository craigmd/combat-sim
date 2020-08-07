export default class Card {
  constructor(
    id,
    name,
    cost,
    imageSrc,
    text = '',
    type = 'ability',
    attack = null,
    health = null
  ) {
    this.id = id;
    this.name = name;
    this.cost = cost;
    this.imageSrc = imageSrc;
    this.text = text;
    this.type = type;
    this.attack = attack;
    this.health = health;
  }
}
