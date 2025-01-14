const express = require("express");

const {
getIngredients,
getDiseases,
createPotion
} = require("../controllers/PotionController");

const router = express.Router();

router.get("/ingredients", getIngredients);

router.get("/diseases", getDiseases);

router.post("/potions", createPotion);

module.exports = router;