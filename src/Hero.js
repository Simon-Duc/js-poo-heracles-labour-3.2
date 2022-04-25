class Hero extends Fighter {
  constructor(name, strength, dexterity, image, x, y, range) {
    super(name, strength, dexterity, image, x, y, range);
  }

  getDamage() {
    return this.weapon ? this.strength + this.weapon.damage : this.strength;
  };

  getDefense() {
    return this.shield ? this.dexterity + this.shield.protection : this.dexterity;
  };

  getRange() {
    return this.weapon ? this.range + this.weapon.range : this.range;
  }

}