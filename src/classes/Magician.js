import Character from './Character.js';

export default class Magician extends Character {
  constructor(name, type) {
    if (type !== 'Magician') {
      throw new Error('Создать этого персонажа можно только с типом Magician!');
    }
    super(name);
    this.type = type;
    this.attack = 10;
    this.defence = 40;
  }
}
