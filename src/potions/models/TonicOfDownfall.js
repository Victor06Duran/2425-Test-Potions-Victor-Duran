import { Potion } from "./Potion"

export class DespairTonic extends Potion {
  constructor(name = "", type = "", modifiers) {
    super(name, type, modifiers)
  }

  static create(ingredients) {
    const totalModifier =
      Math.floor(
        ingredients.reduce(
          (counter, ingredient) => counter + ingredient.value,
          0
        ) /
          ingredients.length /
          5
      ) * 5

    const modifier = DespairTonic.getModifier(totalModifier)
    const potionName = "Tonic of DownFall"

    return new DespairTonic(potionName, "despair", { modifier })
  }

  static getModifier(totalModifier) {
    if (totalModifier >= 20) return "Greater"
    if (totalModifier >= 15) return ""
    if (totalModifier >= 10) return "Lesser"
    return "Least"
  }
}
