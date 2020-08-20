export default class Player {
  constructor(id, name, champion, deck, hand = []) {
    this.id = id;
    this.name = name;
    this.champion = champion;
    this.deck = deck;
    this.hand = hand;
  }
}
