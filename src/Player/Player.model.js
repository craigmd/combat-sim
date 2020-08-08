export default class Player {
  constructor(id, name, champion, deck, turnTimer) {
    this.id = id;
    this.name = name;
    this.champion = champion;
    this.deck = deck;
    this.turnTimer = turnTimer;
  }
}
