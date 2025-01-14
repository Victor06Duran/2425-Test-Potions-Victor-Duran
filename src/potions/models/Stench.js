import { Potion } from "./Potion"

export class Stench extends Potion {
  constructor(name, modifiers) {
    super(name, "stench", modifiers)
  }

  static create(ingredients) {
    let effect = []
    let totalValue = 0
    const modifiers = {
      hit_points: 0,
      intelligence: 0,
      dexterity: 0,
      insanity: 0,
      charisma: 0,
      constitution: 0,
      strength: 0
    }

    const prefixValues = ingredients.map(ingredient => {
      const effectWords = ingredient.effects[0].split("_")
      if (effectWords.length < 3) effectWords.unshift("")

      let prefixValue = 0

      switch (effectWords[0]) {
        case "least":
          prefixValue = -5
          break
        case "lesser":
          prefixValue = -10
          break
        case "":
          prefixValue = -15
          break
        case "greater":
          prefixValue = -20
          break
      }

      if (effectWords[1] === "decrease" && effectWords.length > 1) {
        effect = effectWords
      }

      return prefixValue
    })

    const isSameEffect = prefixValues.every(
      (value, x, selectedIngredientArray) =>
        value === selectedIngredientArray[0]
    )
    const numberOfIngredients = ingredients.length

    if (isSameEffect) {
      totalValue = prefixValues.reduce((sum, value) => sum + value, 0)
      if (numberOfIngredients === 2) {
        totalValue = Math.ceil(totalValue * 1.2) // 20%
      } else if (numberOfIngredients === 3) {
        totalValue = Math.ceil(totalValue * 1.4) // 40%
      } else if (numberOfIngredients === 4) {
        totalValue = Math.ceil(totalValue * 1.8) // 80%
      }
    } else {
      totalValue = prefixValues.reduce((sum, value) => sum + value, 0)
    }

    modifiers.hit_points = totalValue

    let weakestPrefix = "greater"

    const effectPrefixes = ingredients.map(ingredient => {
      const effectWords = ingredient.effects[0].split("_")
      return effectWords[0]
    })

    if (effectPrefixes.includes("least")) {
      weakestPrefix = "least"
    } else if (effectPrefixes.includes("lesser")) {
      weakestPrefix = "lesser"
    } else if (effectPrefixes.includes("")) {
      weakestPrefix = ""
    } else if (effectPrefixes.includes("greater")) {
      weakestPrefix = "greater"
    }

    const potionName = `Stench of ${weakestPrefix} Damage`

    console.log("Final potion name:", potionName)

    return new Stench(potionName, modifiers)
  }
}
