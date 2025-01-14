// ANTIDOTE
describe("When all ingredients carry the effect “Restore”", () => {
  describe("If the ingredients contain the necessary effects to combat a specific disease, the antidote associated with the disease will be created.", () => {
    it("The name must be the corresponding one. Antidote of + “disease name”", async () => {

    });
    it("The attributes will have the value that appears in the disease but changing their sign or, failing that, the range of values shown in the potion creation table (if used).", async () => {

    });
  });
  describe("If any of the ingredients do not have the name “Restore”.", () => {
    it("We will not be able to create an antidote. The name of the potion created will not have the word “Antidote”.", async () => {

    });
  });
});

// POISON

describe("When all ingredients carry the effect “Damage”", () => {
  describe("If the ingredients contain the effects necessary to combat a particular disease, the poison associated with the disease will be created.", () => {
    it("The name should be the corresponding one. Poison of + “disease name”", async () => {

    });
    it("The attributes will have the value that appears in the disease or, failing that, the range of values shown in the potion creation table (if used).", async () => {

    });
  });
  describe("If any of the ingredients do not have the name “Damage”.", () => {
    it("We will not be able to create a poison. The name of the potion created will not have the word “Poison”", async () => {

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
      it("We will not be able to create the elixir. The name of the created potion will not carry the word “Elixir”.", async () => {

      });

    });

  });
  describe("When the effects of associated ingredients bear the name: “Calm”", () => {
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
        it("The name of the potion will be: Modifier + Attribute + Elixir The modifier of the name will be the one that corresponds to the corresponding value according to the table.", async () => {

        });
      });

    });
    describe("When not all ingredients have the same attribute (insanity).", () => {
      it("We will not be able to create the elixir. The name of the created potion will not carry the word Calm.", async () => {

      });

    });

  });
  describe("When any of the ingredient effects do not carry the name “Calm” or “Boost”", () => {
    it("We will not be able to create the elixir (Check name).", async () => {

    });


  });
});
describe("If the number of ingredients is less than 2 and greater than 4", () => {
  it("We will not be able to create the elixir (Check name)", async () => {

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

      });

    });

  });
  describe("When any of the ingredient effects do not carry the name “Frenzy” or “Setback”", () => {
    it("We will not be able to create the Venom (Check name).", async () => {

    });


  });
});
describe("If the number of ingredients is less than 2 and greater than 4", () => {
  it("We will not be able to create the Venom (Check name)", async () => {

  });
});

// ESSENCE

describe("When the associated ingredient effects will bear the names: “Increase” ", () => {
  describe("When all the ingredients have the same Hit Points attribute", () => {
    describe("When the number of ingredients is 2", () => {
      it("The resulting value of the attribute will be the sum of the values of the ingredients plus 20%", async () => {

      });
    });
    describe("When the number of ingredients is 3", () => {
      it("The resulting value of the attribute will be the sum of the values of the ingredients plus 40%.", async () => {

      });
    });
    describe("When the number of ingredients is 4", () => {
      it("The resultant value of the attribute will be the sum of values of the ingredients plus 80%.", async () => {

      });
    });
    describe("If the number of ingredients is less than 2 and greater than 4", () => {
      it("We will not be able to create the elixir. (The name of the created potion will not carry the word “Essence”.)", async () => {

      });
    });
    it("The name of the resulting potion should be: Essence of + modifier + heal. Ex: Essence of lesser heal. The modifier to be applied being the name of the lesser effect potency.", async () => {

    });
  });
  describe("When all the effects are of different type (lesser, greater, ...)", () => {
    it("The resultant value of the attribute will be the sum of values of the ingredients.)", async () => {

    });
  });
  describe("When all the effects are of different type (lesser, greater, ...)", () => {
    it("The resultant value of the attribute will be the sum of values of the ingredients.)", async () => {

    });
  });
  describe("When not all ingredients have the same attribute (Hit Points)", () => {
    it("We will not be able to create the elixir. The name of the created potion will not carry the word “Essence”.", async () => {

    });
  });
});
describe("When some of the ingredient effects do not carry the name “Increase”.", () => {
  it("We will not be able to create the elixir. The name of the created potion will not carry the word “Essence”.", async () => {

  });
});

//STENCH

describe("When the associated ingredient effects will bear the names: “Decrease” ", () => {
  describe("When all the ingredients have the same Hit Points attribute", () => {
    describe("When the number of ingredients is 2", () => {
      it("The resulting value of the attribute will be the sum of the values of the ingredients plus 20%", async () => {

      });
    });
    describe("When the number of ingredients is 3", () => {
      it("The resulting value of the attribute will be the sum of the values of the ingredients plus 40%.", async () => {

      });
    });
    describe("When the number of ingredients is 4", () => {
      it("The resultant value of the attribute will be the sum of values of the ingredients plus 80%.", async () => {

      });
    });
    describe("If the number of ingredients is less than 2 and greater than 4", () => {
      it("We will not be able to create the elixir. (The name of the created potion will not carry the word “Stench”.)", async () => {

      });
    });
    it("The name of the resulting potion should be: Stench of + modifier + heal. Ex: Stench of lesser heal. The modifier to be applied being the name of the lesser effect potency.", async () => {

    });
  });
  describe("When all the effects are of different type (lesser, greater, ...)", () => {
    it("The resultant value of the attribute will be the sum of values of the ingredients.)", async () => {

    });
  });
  describe("When all the effects are of different type (lesser, greater, ...)", () => {
    it("The resultant value of the attribute will be the sum of values of the ingredients.)", async () => {

    });
  });
  describe("When not all ingredients have the same attribute (Hit Points)", () => {
    it("We will not be able to create the elixir. The name of the created potion will not carry the word “Stench”.", async () => {

    });
  });
});
describe("When some of the ingredient effects do not carry the name “Decrease”.", () => {
  it("We will not be able to create the elixir. The name of the created potion will not carry the word “Stench”.", async () => {

  });
});

// FAILED POTION 

it("If none of the conditions above are met, the created potion will have the name “Tonic of DownFall”.", async () => {

});