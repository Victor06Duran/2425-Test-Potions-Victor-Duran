import Modifiers from '../Modifiers';


//Potion Interface
export default interface PotionInterface {
  name: string;
  type: string;
  modifiers: Modifiers;
  image: string;
}
