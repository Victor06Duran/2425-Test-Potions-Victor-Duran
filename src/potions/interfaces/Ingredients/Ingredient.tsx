import EffectsInterface from "./Effects"

export default interface IngredientInterface {

    _id: string;
    name: string;
    description: string;
    value: number;
    effects: EffectsInterface[];
    image: string;
    type: string;
    qty: number;
}