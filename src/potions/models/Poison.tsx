import { Potion } from './Potion';
import PoisonInterface from '../interfaces/potions/Poison';

export class Poison extends Potion implements PoisonInterface {
  constructor(name: string, type: string, modifiers: object) {
    super(name, type, modifiers);
  }

  static create(ingredients: object, diseases: object): Poison | null {
    const diseasesArray = Object.values(diseases);
    const ingredientsArray = Object.values(ingredients);
    const totalEffectsLength = ingredientsArray.reduce((effectsLength, ingredient) => {
      return effectsLength + ingredient.effects.length;
    }, 0);

    let areEqual = false;
    let effectType = '';
    let effect = [];

    for (let i = 0; i < diseasesArray.length; i++) {
      for (let j = 0; j < ingredientsArray.length; j++) {
        if (diseasesArray[i].poison_effects.length !== totalEffectsLength) {
          break;
        }

        for (let k = 0; k < ingredientsArray[j].effects.length; k++) {
          const areEffectTypeEqual = ingredientsArray.some((ingredient) => {
            return ingredient.effects.some((effect: string) => {
              effectType = effect.split('_').find((type: string) => type === 'restore') ? 'Antidote' : 'Poison';
              return true;
            });
          });

          if (!areEffectTypeEqual) {
            return null;
          }

          effect = diseasesArray[i].poison_effects;
          areEqual = Object.values(effect).includes(ingredientsArray[j].effects[k]);
        }

        if (!areEqual) {
          break;
        } else if (areEqual && j === ingredientsArray.length - 1) {
          const potionName = `Poison of ${diseasesArray[i].name}`;
          const potionType = effectType;
          const potionModifiers = diseasesArray[i].modifiers;

          return new Poison(potionName, potionType, potionModifiers);
        }
      }
    }

    return null;
  }
}
