import PotionInterface from '../interfaces/potions/Potions';
import Modifiers from '../interfaces/Modifiers';

export class Potion implements PotionInterface {
    name: string;
    type: string;
    modifiers: Modifiers;
  
    constructor(name = '', type = '', modifiers: Modifiers = { 
        intelligence: 0, 
        dexterity: 0, 
        constitution: 0, 
        insanity: 0, 
        charisma: 0, 
        strength: 0 
      }) {
      this.modifiers = modifiers;
      this.name = name;
      this.type = type;
    }
  }
