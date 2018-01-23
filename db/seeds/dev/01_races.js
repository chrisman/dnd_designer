exports.seed = function(knex, Promise) {
  return knex.raw("TRUNCATE races RESTART IDENTITY").then(function() {
    return Promise.all([
      knex.raw(
        "INSERT INTO races (name, image, ability_score_increase, max_age, size, height, avg_weight, speed, alignment, dark_vision, language, description, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
          "Dwarf",
          "http://media.wizards.com/images/dnd/newtodnd/NEW_TO_DD_Races_Dwarf.png",
          "CON+2",
          350,
          "Medium",
          "4 - 5",
          150,
          25,
          "Lawful",
          true,
          "Common, Dwarvish",
          "Dwarven Resilience, Dwarven Combat Training, Tool Proficiency, Stone Cutting, Subrace",
          new Date()
        ]
      ),
      knex.raw(
        "INSERT INTO races (name, image, ability_score_increase, max_age, size, height, avg_weight, speed, alignment, dark_vision, language, description, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
          "Elf",
          "https://vignette.wikia.nocookie.net/dmc-dd/images/d/de/Sun_elf.jpg/revision/latest/scale-to-width-down/252?cb=20160110165058",
          "DEX+2",
          750,
          "Medium",
          "5 - 6",
          150,
          30,
          "Good",
          true,
          "Common, Elvish",
          "Keen Senses, Fey Ancestry, Trance, Subrace",
          new Date()
        ]
      ),
      knex.raw(
        "INSERT INTO races (name, image, ability_score_increase, max_age, size, height, avg_weight, speed, alignment, dark_vision, language, description, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
          "Halfling",
          "https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/256/420/618/636271789409776659.png",
          "DEX+2",
          250,
          "Small",
          "3",
          40,
          25,
          "Lawful Good",
          false,
          "Common, Halfling",
          "Lucky, Halfling Nimbleness, Subrace",
          new Date()
        ]
      )
    ]);
  });
};
