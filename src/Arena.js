class Arena {
  constructor(size, monsters, hero) {
    this.monsters = monsters;
    this.hero = hero;
    this.size = size;
  }
  getDistance(fighter1, fighter2) {
    return Math.sqrt(Math.pow(fighter1.x - fighter2.x, 2) + Math.pow(fighter1.y - fighter2.y, 2)).toFixed(2);
  }

  isTouchable(fighter1, fighter2) {
    return (this.getDistance(fighter1, fighter2) <= fighter1.getRange())
  }
}