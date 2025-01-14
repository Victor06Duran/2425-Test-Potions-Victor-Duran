import { PotionFactory } from "../potions/PotionFactory"

export const getIngredients = async () => {
  try {
    const response = await fetch(`https://kaotika-server.fly.dev/ingredients`)
    const json = await response.json()

    return json.data
  } catch (error) {
    console.error(
      "Unexpected error while trying to retrieve the Ingredients on fetch: ",
      error
    )
  }
}

export const getDiseases = async () => {
  try {
    const response = await fetch(`https://kaotika-server.fly.dev/diseases`)
    const json = await response.json()

    return json.data
  } catch (error) {
    console.error(
      "Unexpected error while trying to retrieve the Diseases on fetch: ",
      error
    )
  }
}

export const getEncryptedIngredients = async () => {
  try {
    const response = await fetch(
      "https://kaotika-server.fly.dev/ingredients/zachariah-herbal"
    )
    const json = await response.json()

    return json.data["Zachariah's herbal"].ingredients
  } catch (error) {
    console.error(
      "Unexpected error while trying to retrieve the Encrypted Ingredients on fetch: ",
      error
    )
  }
}

// export const createPotion = async () => {
//   try {
//     const ingredients = await getIngredients()
//     const diseases = await getDiseases()

//     const ingredientsArray = [ingredients[], ingredients[]]
//     const potion = PotionFactory.createPotion(ingredientsArray, diseases)
//     console.log(potion)
//   } catch (error) {
//     res.status(500).json(error)
//   }
// }
