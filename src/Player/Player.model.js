export default class Player {
  constructor(id, name, champion, deckSize, turnTimer) {
    this.id = id;
    this.name = name;
    this.champion = champion;
    this.deckSize = deckSize;
    this.turnTimer = turnTimer;
  }
}
