import { Potion } from "./Potion"

export class Antidote extends Potion {
  constructor(name, type, modifiers) {
    super(name, type, modifiers)
  }

  static create(ingredients, diseases) {
    const diseasesArray = Object.values(diseases)
    const ingredientsArray = Object.values(ingredients)

    let effectType = ""

    for (let i = 0; i < diseasesArray.length; i++) {
      const disease = diseasesArray[i]
      const antidoteEffects = disease.antidote_effects
      let match = true
      const diseaseModifiers = { ...disease.modifiers }

      for (let j = 0; j < ingredientsArray.length; j++) {
        const ingredient = ingredientsArray[j]

        for (let k = 0; k < ingredient.effects.length; k++) {
          const effectWords = ingredient.effects[k].split("_")
          const prefix = effectWords[0]
          const attribute = effectWords.slice(2).join("_")
          const isAntidoteEffect = effectWords.includes("restore")

          if (
            !isAntidoteEffect ||
            !antidoteEffects.includes(ingredient.effects[k])
          ) {
            match = false
            break
          }

          effectType = "Antidote"

          const restoredValue = Antidote.getRestoredValue(prefix, attribute)

          if (attribute === "insanity") {
            diseaseModifiers[attribute] -= restoredValue
          } else {
            diseaseModifiers[attribute] += restoredValue
          }
        }

        if (!match) break
      }

      if (match) {
        const potionName = `Antidote of ${disease.name}`
        const potionType = effectType
        const potionModifiers = diseaseModifiers

        return new Antidote(potionName, potionType, potionModifiers)
      }
    }

    return null
  }

  static getRestoredValue(prefix, attribute) {
    let min
    let max

    if (attribute === "hit_points") {
      switch (prefix) {
        case "least":
          min = 20
          max = 35
          break
        case "lesser":
          min = 40
          max = 50
          break
        case "":
          min = 50
          max = 65
          break
        case "greater":
          min = 65
          max = 75
          break
        default:
          min = 0
          max = 0
      }
    } else if (attribute === "insanity") {
      switch (prefix) {
        case "least":
          min = 1
          max = 5
          break
        case "lesser":
          min = 6
          max = 12
          break
        case "":
          min = 13
          max = 20
          break
        case "greater":
          min = 21
          max = 25
          break
        default:
          min = 0
          max = 0
      }
    } else {
      switch (prefix) {
        case "least":
          min = 1
          max = 5
          break
        case "lesser":
          min = 6
          max = 9
          break
        case "":
          min = 10
          max = 13
          break
        case "greater":
          min = 20
          max = 35
          break
        default:
          min = 0
          max = 0
      }
    }

    return Math.floor(Math.random() * (max - min + 1)) + min
  }
}
