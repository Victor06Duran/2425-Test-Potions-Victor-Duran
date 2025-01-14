import { Antidote } from "./models/Antidote";
import { Elixir } from "./models/Elixir";
import { Essence } from "./models/Essence";
import { Poison } from "./models/Poison";
import { Stench } from "./models/Stench";
import { DespairTonic } from "./models/TonicOfDownfall";
import { Venom } from "./models/Venom";
import { Potion } from "./models/Potion";


export class PotionFactory {
  static createPotion(ingredients: object[], diseases: object[]): Potion | null {

    const effects = [['restore', 'positive'],
                     ['damage', 'negative'],
                     ['increase', 'positive'],
                     ['decrease', 'negative'],
                     ['boost', 'positive'],
                     ['setback', 'negative'],
                     ['calm', 'positive'],
                     ['frenzy', 'negative']];
    const attributes = ['calm', 'frenzy', 'charisma', 'dexterity', 'intelligence', 'hit_points', 'constitution', 'strength'];
    const type = 0;
    const isPositive = 1;

    let effectTypes: string[] = [];
    let effectPositives: string[] = [];
    let attributeTypes: string[] = [];
    let potion = null;

    for (let ingredient of ingredients){
      
      console.log(ingredient);
      let ingredientEffectType = '';
      let ingredientIsPositive = '';
      let ingredientAttributeType = '';

      for (let effect of ingredient.effects){

        ingredientAttributeType = attributes.find(attribute => effect.includes(attribute)) || '';
        attributeTypes.push(ingredientAttributeType);

        for (let i = 0; i < effects.length; i++){

          if (effect.includes(effects[i][type])){

            ingredientEffectType = effects[i][type];
            ingredientIsPositive = effects[i][isPositive];
            break;
          }
        }

        effectTypes.push(ingredientEffectType);
        effectPositives.push(ingredientIsPositive);
      }
    }

    const areAttributesTypeEqual = attributeTypes.every(attr => attr === attributeTypes[0]);
    const areEffectsTypeEqual = effectTypes.every(effect => effect === effectTypes[0]);
    const areEffectsPositive = effectPositives.every(pos => pos === effectPositives[0]);

    console.log(attributeTypes, areAttributesTypeEqual);
    console.log(effectTypes, areEffectsTypeEqual);
    console.log(effectPositives, areEffectsPositive);

    if (areAttributesTypeEqual && areEffectsTypeEqual && areEffectsPositive){

      switch (attributeTypes[0]){
        
        case 'hit_points':
          potion = effectPositives[0] === 'positive' ?
            Essence.create(Object.values(ingredients)) :
            Stench.create(Object.values(ingredients));
          break;
        case 'charisma':
        case 'dexterity':
        case 'intelligence':
        case 'constitution':
        case 'strength':
        case 'calm':
        case 'frenzy':
          potion = effectPositives[0] === 'positive' ?
            Elixir.create(Object.values(ingredients)) :
            Venom.create(Object.values(ingredients)); 
          break;  
      }
    } 
    
    else if (areEffectsTypeEqual && areEffectsPositive){

      switch (effectTypes[0]){

        case 'restore':
          potion = Antidote.create(ingredients, diseases);
          break;

        case 'damage':
          potion = Poison.create(ingredients, diseases);
          break;
      }
    }

    if (potion === null){

      potion = DespairTonic.create(Object.values(ingredients)); 
    }    
    return potion;
  }
}