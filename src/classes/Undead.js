import Character from './Character.js';

export default class Undead extends Character {
  constructor(name, type) {
    if (type !== 'Undead') {
      throw new Error('Создать этого персонажа можно только с типом Undead!');
    }
    super(name);
    this.type = type;
    this.attack = 25;
    this.defence = 25;
  }
}
