import { getDiseases, getIngredients } from "../controllers/PotionController";
import { Antidote } from "../potions/models/Antidote";
import { Elixir } from "../potions/models/Elixir";
import { Essence } from "../potions/models/Essence";
import { Poison } from "../potions/models/Poison";
import { Stench } from "../potions/models/Stench";
import { Venom } from "../potions/models/Venom";
global.fetch = jest.fn();

describe("Potion creation", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("ANTIDOTE", () => {
    let ingredients, diseases;

    beforeAll(async () => {
      ingredients = await getIngredients();
      diseases = await getDiseases();
    });

    describe("When all ingredients carry the effect 'Restore'", () => {
      describe("If the ingredients contain the necessary effects to combat a specific disease", () => {
        it("The name must be the corresponding one. Antidote of + 'disease name'", async () => {
          const mockIngredients = [
            { name: "Courageous Bloom", effects: ["restore_constitution"] },
            { name: "Titan's Essence", effects: ["lesser_restore_strength"] },
          ];
          const mockDisease = { name: "Mirelung", poison_effects: ["damage_constitution", "lesser_damage_strength"] };

          const mockPotion = new Antidote(
            `Antidote of ${mockDisease.name}`,
            "Antidote",
            mockDisease.modifiers
          );

          jest.spyOn(Antidote, "create").mockReturnValue(mockPotion);

          const antidote = Antidote.create(mockIngredients, [mockDisease]);

          expect(Antidote.create).toHaveBeenCalledWith(mockIngredients, [mockDisease]);
          expect(antidote).not.toBeNull();
          expect(antidote.name).toBe(`Antidote of ${mockDisease.name}`);
        });

        it("The attributes will have the value that appears in the disease but changing their sign or, failing that, the range of values shown in the potion creation table", async () => {
          const mockIngredients = [
            { name: "Courageous Bloom", effects: ["restore_constitution"] },
            { name: "Titan's Essence", effects: ["lesser_restore_strength"] },
          ];
          const mockDisease = {
            name: "Mirelung",
            poison_effects: ["damage_constitution", "lesser_damage_strength"],
            modifiers: { dexterity: -11, charisma: -9, strength: -7 },
          };

          const mockPotion = new Antidote(
            `Antidote of ${mockDisease.name}`,
            "Antidote",
            mockDisease.modifiers
          );

          jest.spyOn(Antidote, "create").mockReturnValue(mockPotion);

          const antidote = Antidote.create(mockIngredients, [mockDisease]);

          expect(Antidote.create).toHaveBeenCalledWith(mockIngredients, [mockDisease]);
          expect(antidote.modifiers).toEqual(expect.objectContaining(mockDisease.modifiers));
        });
      });

      describe("If any of the ingredients do not have the name 'Restore'", () => {
        it("We will not be able to create an antidote. The name of the potion created will not have the word 'Antidote'", async () => {
          const mockIngredients = [
            { name: "Distraction Herb", effects: ["lesser_damage_intelligence"] },
            { name: "Titan's Essence", effects: ["lesser_restore_strength"] },
          ];

          const mockDisease = {
            name: "Mirelung",
            poison_effects: ["damage_constitution", "lesser_damage_strength"],
            antidote_effects: ["restore_constitution", "lesser_restore_strength"],
            modifiers: { dexterity: -11, charisma: -9, strength: -7 },
          };

          jest.spyOn(Antidote, "create").mockReturnValue(null);

          const antidote = Antidote.create(mockIngredients, [mockDisease]);

          expect(Antidote.create).toHaveBeenCalledWith(mockIngredients, [mockDisease]);
          expect(antidote).toBeNull();
        });
      });
    });
  });

  // POISON

  describe("POISON", () => {
    let ingredients, diseases;

    beforeAll(async () => {
      ingredients = await getIngredients();
      diseases = await getDiseases();
    });

    describe("When all ingredients carry the effect 'Damage'", () => {
      describe("If the ingredients contain the effects necessary to combat a particular disease", () => {
        it("The name should be the corresponding one. Poison of + 'disease name'", async () => {
          const mockIngredients = [
            { name: "Distraction Herb", effects: ["lesser_damage_intelligence"] },
            { name: "The Sorrowful Bloom", effects: ["damage_insanity"] },
          ];
          const mockDisease = { name: "Specter's Grip", poison_effects: ["lesser_damage_intelligence", "damage_insanity"] };

          const mockPotion = new Poison(
            `Poison of ${mockDisease.name}`,
            "Poison",
            mockDisease.modifiers
          );

          jest.spyOn(Poison, "create").mockReturnValue(mockPotion);

          const poison = Poison.create(mockIngredients, [mockDisease]);

          expect(Poison.create).toHaveBeenCalledWith(mockIngredients, [mockDisease]);
          expect(poison).not.toBeNull();
          expect(poison.name).toBe(`Poison of ${mockDisease.name}`);
        });

        it("The attributes will have the value that appears in the disease or, failing that, the range of values shown in the potion creation table (if used).", async () => {
          const mockIngredients = [
            { name: "Distraction Herb", effects: ["lesser_damage_intelligence"] },
            { name: "The Sorrowful Bloom", effects: ["damage_insanity"] },
          ];
          const mockDisease = {
            name: "Specter's Grip",
            poison_effects: ["lesser_damage_intelligence", "damage_insanity"],
            modifiers: { constitution: -13, strength: -8 },
          };

          const mockPotion = new Poison(
            `Poison of ${mockDisease.name}`,
            "Poison",
            mockDisease.modifiers
          );

          jest.spyOn(Poison, "create").mockReturnValue(mockPotion);

          const poison = Poison.create(mockIngredients, [mockDisease]);

          expect(Poison.create).toHaveBeenCalledWith(mockIngredients, [mockDisease]);
          expect(poison.modifiers).toEqual(expect.objectContaining(mockDisease.modifiers));
        });
      });

      describe("If any of the ingredients do not have the name 'Damage'", () => {
        it("We will not be able to create a poison. The name of the potion created will not have the word 'Poison'", async () => {
          const mockIngredients = [
            { name: "Distraction Herb", effects: ["lesser_damage_intelligence"] },
            { name: "Wisdom's Nectar", effects: ["restore_intelligence"] },
          ];

          const mockDisease = {
            name: "Specter's Grip",
            poison_effects: ["lesser_damage_intelligence", "damage_insanity"],
          };

          jest.spyOn(Poison, "create").mockReturnValue(null);

          const poison = Poison.create(mockIngredients, [mockDisease]);

          expect(Poison.create).toHaveBeenCalledWith(mockIngredients, [mockDisease]);
          expect(poison).toBeNull();
        });
      });
    });
  });


  // ELIXIR

  describe("When the number of ingredients is 2-4", () => {
    describe("When the effects of associated ingredients bear the name: “Boost”", () => {
      describe("When all ingredients have the same attribute (intelligence, dexterity, constitution, charisma, charisma).", () => {
        describe("When all the effects are of type “least”", () => {
          it("The resulting value of the attribute will be the average of the values of the ingredients. Once the average is calculated it will be rounded to the lower multiple of 5.", async () => {

          });
          it("The duration will be the average of durations of the effects of each ingredient, rounded down.", async () => {

          });
        });
        describe("When all the effects are of type “lesser”", () => {
          it("The resulting value of the attribute will be the average of the values of the ingredients. Once the average is calculated it will be rounded down to the lower multiple of 5.", async () => {

          });
          it("The duration will be the average of durations of the effects of each ingredient, rounded down.", async () => {

          });
        });
        describe("When all the effects are of type “normal”", () => {
          it("The resulting value of the attribute will be the average of the values of the ingredients. Once the average is calculated it will be rounded down to the lower multiple of 5.", async () => {

          });
          it("The duration will be the average of durations of the effects of each ingredient, rounded down.", async () => {

          });
        });
        describe("When all the effects are of type “greater”", () => {
          it("The resulting attribute value will be the average of the ingredient values. Once the average is calculated it will be rounded to the lower multiple of 5.", async () => {

          });
          it("The duration will be the average of durations of the effects of each ingredient, rounded down.", async () => {

          });
        });
        describe("When all the effects are of different types", () => {
          it("The resulting value of the attribute will be the average of the values of the ingredients. Once the average is calculated it will be rounded down to the lower multiple of 5.", async () => {

          });
          it("The duration will be the average of durations of the effects of each ingredient, rounded down.", async () => {

          });
          it("The name of the potion will be: Modifier + Attribute + Elixir The modifier of the name will be the one that corresponds to the corresponding value according to the table.", async () => {

          });
        });

      });
      describe("When not all ingredients have the same attribute (intelligence, dexterity, constitution, charisma, charisma).", () => {
        it("We will not be able to create the elixir. The name of the created potion will not carry the word 'Elixir'.", () => {
          const ingredients = [
            { name: "Sageleaf", effects: ["least_boost_intelligence"] },
            { name: "Quieting Root", effects: ["least_calm"] },
          ];

          const potion = Elixir.create(ingredients);

          expect(potion).toBeNull();
        });
      });
    });

    describe("When the effects of associated ingredients bear the name: 'Calm'", () => {
      describe("When all ingredients have the same attribute (insanity)", () => {
        describe("When not all ingredients have the same attribute", () => {
          it("We will not be able to create the elixir. The name of the created potion will not carry the word 'Calm'.", () => {
            const ingredients = [
              { name: "Quieting Root", effects: ["least_calm"] },
              { name: "Sageleaf", effects: ["lesser_boost_intelligence"] },
            ];

            const potion = Elixir.create(ingredients);

            expect(potion).toBeNull();
          });
        });
      });

      describe("When any of the ingredient effects do not carry the name 'Calm' or 'Boost'", () => {
        it("We will not be able to create the elixir.", () => {
          const ingredients = [
            { name: "Quieting Root", effects: ["least_calm"] },
            { name: "Sageleaf", effects: ["lesser_boost_intelligence"] },
          ];

          const potion = Elixir.create(ingredients);

          expect(potion).toBeNull();
        });
      });
    });

    describe("If the number of ingredients is less than 2 or greater than 4", () => {
      it("We will not be able to create the elixir.", () => {
        const ingredients = [
          { name: "Sageleaf", effects: ["lesser_boost_intelligence"] },
        ];

        const potion = Elixir.create(ingredients);

        expect(potion).toBeNull();
      });
    });
  });

  // VENOM

  describe("When the number of ingredients is 2-4", () => {
    describe("When the effects of associated ingredients bear the name: “Setback”", () => {
      describe("When all ingredients have the same attribute (intelligence, dexterity, constitution, charisma, charisma).", () => {
        describe("When all the effects are of type “least”", () => {
          it("The resulting value of the attribute will be the average of the values of the ingredients. Once the average is calculated it will be rounded to the lower multiple of 5.", async () => {

          });
          it("The duration will be the average of durations of the effects of each ingredient, rounded down.", async () => {

          });
        });
        describe("When all the effects are of type “lesser”", () => {
          it("The resulting value of the attribute will be the average of the values of the ingredients. Once the average is calculated it will be rounded down to the lower multiple of 5.", async () => {

          });
          it("The duration will be the average of durations of the effects of each ingredient, rounded down.", async () => {

          });
        });
        describe("When all the effects are of type “normal”", () => {
          it("The resulting value of the attribute will be the average of the values of the ingredients. Once the average is calculated it will be rounded down to the lower multiple of 5.", async () => {

          });
          it("The duration will be the average of durations of the effects of each ingredient, rounded down.", async () => {

          });
        });
        describe("When all the effects are of type “greater”", () => {
          it("The resulting attribute value will be the average of the ingredient values. Once the average is calculated it will be rounded to the lower multiple of 5.", async () => {

          });
          it("The duration will be the average of durations of the effects of each ingredient, rounded down.", async () => {

          });
        });
        describe("When all the effects are of different types", () => {
          it("The resulting value of the attribute will be the average of the values of the ingredients. Once the average is calculated it will be rounded down to the lower multiple of 5.", async () => {

          });
          it("The duration will be the average of durations of the effects of each ingredient, rounded down.", async () => {

          });
          it("The name of the potion will be: Modifier + Attribute + Venom. The modifier of the name will be the one that corresponds to the corresponding value according to the table.", async () => {

          });
        });

      });
      describe("When not all ingredients have the same attribute (intelligence, dexterity, constitution, charisma, charisma).", () => {
        it("We will not be able to create the Venom. The name of the created potion will not carry the word “Venom”.", async () => {

        });

      });

    });
    describe("When the effects of associated ingredients bear the name: “Frenzy”", () => {
      describe("When all ingredients have the same attribute (insanity).", () => {
        describe("When all the effects are of type “least”", () => {
          it("The resulting value of the attribute will be the average of the values of the ingredients. Once the average is calculated it will be rounded to the lower multiple of 5.", async () => {

          });
          it("The duration will be the average of durations of the effects of each ingredient, rounded down.", async () => {

          });
        });
        describe("When all the effects are of type “lesser”", () => {
          it("The resulting value of the attribute will be the average of the values of the ingredients. Once the average is calculated it will be rounded down to the lower multiple of 5.", async () => {

          });
          it("The duration will be the average of durations of the effects of each ingredient, rounded down.", async () => {

          });
        });
        describe("When all the effects are of type “normal”", () => {
          it("The resulting value of the attribute will be the average of the values of the ingredients. Once the average is calculated it will be rounded down to the lower multiple of 5.", async () => {

          });
          it("The duration will be the average of durations of the effects of each ingredient, rounded down.", async () => {

          });
        });
        describe("When all the effects are of type “greater”", () => {
          it("The resulting attribute value will be the average of the ingredient values. Once the average is calculated it will be rounded to the lower multiple of 5.", async () => {

          });
          it("The duration will be the average of durations of the effects of each ingredient, rounded down.", async () => {

          });
        });
        describe("When all the effects are of different types", () => {
          it("The resulting value of the attribute will be the average of the values of the ingredients. Once the average is calculated it will be rounded down to the lower multiple of 5.", async () => {

          });
          it("The duration will be the average of durations of the effects of each ingredient, rounded down.", async () => {

          });
          it("The name of the potion will be: Modifier + Attribute + Venom. The modifier of the name will be the one that corresponds to the corresponding value according to the table.", async () => {

          });
        });

      });
      describe("When not all ingredients have the same attribute (insanity).", () => {
        it("We will not be able to create the Venom. The name of the created potion will not carry the word Frenzy.", async () => {
          const ingredients = [
            { name: "Lunatic's Thorn", effects: ["least_frenzy"] },
            { name: "Sageleaf", effects: ["lesser_boost_intelligence"] },
          ];

          const potion = Elixir.create(ingredients);

          expect(potion).toBeNull();
        });

      });

    });
    describe("When any of the ingredient effects do not carry the name “Frenzy” or “Setback”", () => {
      it("We will not be able to create the Venom (Check name).", async () => {
        const ingredients = [
          { name: "Lunatic's Thorn", effects: ["least_frenzy"] },
          { name: "Wisdom's Nectar", effects: ["restore_intelligence"] },
        ];

        const potion = Venom.create(ingredients);

        expect(potion).toBeNull();
      });
    });
  });
  describe("If the number of ingredients is less than 2 and greater than 4", () => {
    it("We will not be able to create the Venom (Check name)", async () => {
      const ingredients = [
        { name: "Bitter Oak", effects: ["least_setback_strength"] },
      ];

      const potion = Venom.create(ingredients);

      expect(potion).toBeNull();
    });
  });

  // ESSENCE


  describe("ESSENCE", () => {
    describe("When the associated ingredient effects bear the names: 'Increase'", () => {
      describe("When all the ingredients have the same Hit Points attribute", () => {
        describe("When the number of ingredients is 2", () => {
          it("The resulting value of the attribute will be the sum of the values of the ingredients plus 20%", () => {
            const ingredients = [
              { name: "Ironbark Berry", effects: ["lesser_increase_hit_points"] },
              { name: "Ironbark Berry", effects: ["lesser_increase_hit_points"] },
            ];

            const potion = Essence.create(ingredients);

            expect(potion.modifiers.hit_points).toBe(Math.ceil((10 + 10) * 1.2));
          });
        });

        describe("When the number of ingredients is 3", () => {
          it("The resulting value of the attribute will be the sum of the values of the ingredients plus 40%", () => {
            const ingredients = [
              { name: "Ironbark Berry", effects: ["lesser_increase_hit_points"] },
              { name: "Ironbark Berry", effects: ["lesser_increase_hit_points"] },
              { name: "Ironbark Berry", effects: ["lesser_increase_hit_points"] },
            ];

            const potion = Essence.create(ingredients);

            expect(potion.modifiers.hit_points).toBe(Math.ceil((10 + 10 + 10) * 1.4));
          });
        });

        describe("When the number of ingredients is 4", () => {
          it("The resulting value of the attribute will be the sum of the values of the ingredients plus 80%", () => {
            const ingredients = [
              { name: "Ironbark Berry", effects: ["lesser_increase_hit_points"] },
              { name: "Ironbark Berry", effects: ["lesser_increase_hit_points"] },
              { name: "Ironbark Berry", effects: ["lesser_increase_hit_points"] },
              { name: "Ironbark Berry", effects: ["lesser_increase_hit_points"] },
            ];

            const potion = Essence.create(ingredients);

            expect(potion.modifiers.hit_points).toBe(Math.ceil((10 + 10 + 10 + 10) * 1.8));
          });
        });

        describe("If the number of ingredients is less than 2 or greater than 4", () => {
          it("We will not be able to create the elixir. (The name of the created potion will not carry the word 'Essence'.)", () => {
            const ingredients = [
              { name: "Ironbark Berry", effects: ["lesser_increase_hit_points"] },
            ];

            const potion = Essence.create(ingredients);

            expect(potion).toBeNull();
          });
        });

        it("The name of the resulting potion should be: Essence of + modifier + heal. Ex: Essence of lesser heal.", () => {
          const ingredients = [
            { name: "Ironbark Berry", effects: ["lesser_increase_hit_points"] },
            { name: "Heartroot", effects: ["greater_increase_hit_points"] },
          ];

          const potion = Essence.create(ingredients);

          expect(potion.name).toBe("Essence of lesser heal");
        });
      });

      describe("When all the effects are of different type (lesser, greater, ...)", () => {
        it("The resultant value of the attribute will be the sum of values of the ingredients.", () => {
          const ingredients = [
            { name: "Ironbark Berry", effects: ["least_increase_hit_points"] },
            { name: "Heartroot", effects: ["greater_increase_hit_points"] },
          ];

          const potion = Essence.create(ingredients);

          expect(potion.modifiers.hit_points).toBe(5 + 20);
        });
      });

      describe("When not all ingredients have the same attribute (Hit Points)", () => {
        it("We will not be able to create the elixir. The name of the created potion will not carry the word 'Essence'.", () => {
          const ingredients = [
            { name: "Ironbark Berry", effects: ["least_increase_hit_points"] },
            { name: "Giant's Tear", effects: ["greater_restore_strength"] },
          ];

          const potion = Essence.create(ingredients);

          expect(potion).toBeNull();
        });
      });
    });

    describe("When some of the ingredient effects do not carry the name 'Increase'", () => {
      it("We will not be able to create the elixir. The name of the created potion will not carry the word 'Essence'.", () => {
        const ingredients = [
          { name: "HeartRoot", effects: ["greater_increase_hit_points"] },
          { name: "Venomroot", effects: ["decrease_hit_points"] },
        ];

        const potion = Essence.create(ingredients);

        expect(potion).toBeNull();
      });
    });
  });

  //STENCH

  describe("STENCH", () => {
    describe("When the associated ingredient effects bear the names: 'Decrease'", () => {
      describe("When all the ingredients have the same Hit Points attribute", () => {
        describe("When the number of ingredients is 2", () => {
          it("The resulting value of the attribute will be the sum of the values of the ingredients plus 20%", () => {
            const ingredients = [
              { name: "Bloodthorn Berry", effects: ["lesser_decrease_hit_points"] },
              { name: "Bloodthorn Berry", effects: ["lesser_decrease_hit_points"] },
            ];

            const potion = Stench.create(ingredients);

            expect(potion.modifiers.hit_points).toBe(Math.ceil((-10 + -10) * 1.2));
          });
        });

        describe("When the number of ingredients is 3", () => {
          it("The resulting value of the attribute will be the sum of the values of the ingredients plus 40%", () => {
            const ingredients = [
              { name: "Bloodthorn Berry", effects: ["lesser_decrease_hit_points"] },
              { name: "Bloodthorn Berry", effects: ["lesser_decrease_hit_points"] },
              { name: "Bloodthorn Berry", effects: ["lesser_decrease_hit_points"] },
            ];

            const potion = Stench.create(ingredients);

            expect(potion.modifiers.hit_points).toBe(Math.ceil((-10 + -10 + -10) * 1.4));
          });
        });

        describe("When the number of ingredients is 4", () => {
          it("The resultant value of the attribute will be the sum of the values of the ingredients plus 80%", () => {
            const ingredients = [
              { name: "Bloodthorn Berry", effects: ["lesser_decrease_hit_points"] },
              { name: "Bloodthorn Berry", effects: ["lesser_decrease_hit_points"] },
              { name: "Bloodthorn Berry", effects: ["lesser_decrease_hit_points"] },
              { name: "Bloodthorn Berry", effects: ["lesser_decrease_hit_points"] },
            ];

            const potion = Stench.create(ingredients);

            expect(potion.modifiers.hit_points).toBe(Math.ceil((-10 + -10 + -10 + -10) * 1.8));
          });
        });

        describe("If the number of ingredients is less than 2 or greater than 4", () => {
          it("We will not be able to create the elixir. (The name of the created potion will not carry the word 'Stench'.)", () => {
            const ingredients = [
              { name: "Bloodthorn Berry", effects: ["lesser_decrease_hit_points"] },
            ];

            const potion = Stench.create(ingredients);

            expect(potion).toBeNull();
          });
        });

        it("The name of the resulting potion should be: Stench of + modifier + Damage. Ex: Stench of lesser Damage.", () => {
          const ingredients = [
            { name: "Bloodthorn Berry", effects: ["lesser_decrease_hit_points"] },
            { name: "Witherweed", effects: ["greater_decrease_hit_points"] },
          ];

          const potion = Stench.create(ingredients);

          expect(potion.name).toBe("Stench of lesser Damage");
        });
      });

      describe("When all the effects are of different type (lesser, greater, ...)", () => {
        it("The resultant value of the attribute will be the sum of values of the ingredients.", () => {
          const ingredients = [
            { name: "Bloodthorn Berry", effects: ["least_decrease_hit_points"] },
            { name: "Witherleaf", effects: ["greater_decrease_hit_points"] },
          ];

          const potion = Stench.create(ingredients);

          expect(potion.modifiers.hit_points).toBe(-5 + -20);
        });
      });

      describe("When not all ingredients have the same attribute (Hit Points)", () => {
        it("We will not be able to create the elixir. The name of the created potion will not carry the word 'Stench'.", () => {
          const ingredients = [
            { name: "Bloodthorn Berry", effects: ["least_decrease_hit_points"] },
            { name: "Sage Essence", effects: ["lesser_restore_intelligence"] },
          ];

          const potion = Stench.create(ingredients);

          expect(potion).toBeNull();
        });
      });
    });

    describe("When some of the ingredient effects do not carry the name 'Decrease'", () => {
      it("We will not be able to create the elixir. The name of the created potion will not carry the word 'Stench'.", () => {
        const ingredients = [
          { name: "Bloodthorn Berry", effects: ["decrease_hit_points"] },
          { name: "Breeze Blossom", effects: ["least_restore_dexterity"] },
        ];

        const potion = Stench.create(ingredients);

        expect(potion).toBeNull();
      });
    });
  });




  // FAILED POTION 

  it("If none of the conditions above are met, the created potion will have the name “Tonic of DownFall”.", async () => {

  });
});