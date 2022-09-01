'use strict'
const uniqueRandomArray = require('unique-random-array')
const pokemon = require('pokemon')

const alolanForms = [
  'Diglett-alola',
  'Dugtrio-alola',
  'Grimer-alola',
  'Muk-alola',
  'Geodude-alola',
  'Graveler-alola',
  'Golem-alola',
  'Rattata-alola',
  'Raticate-alola',
  'Raichu-alola',
  'Marowak-alola',
  'Meowth-alola',
  'Persian-alola',
  'Exeggutor-alola',
  'Vulpix-alola',
  'Ninetales-alola',
  'Sandshrew-alola',
  'Sandslash-alola',
]

const galarianForms = [
  'Zigzagoon-galar',
  'Linone-galar',
  'Meowth-galar',
  "Farfetch'd-galar",
  'Stunfisk-galar',
  'Corsola-galar',
  'Weezing-galar',
  'Yamask-galar',
  'Ponyta-galar',
  'Rapidash-galar',
  'Mr. Mime-galar',
  'Darumaka-galar',
  'Darmanitan-galar',
]

const silvallyForms = [
  'Silvally-normal',
  'Silvally-fire',
  'Silvally-water',
  'Silvally-grass',
  'Silvally-electric',
  'Silvally-ice',
  'Silvally-fighting',
  'Silvally-poison',
  'Silvally-ground',
  'Silvally-flying',
  'Silvally-psychic',
  'Silvally-bug',
  'Silvally-rock',
  'Silvally-ghost',
  'Silvally-dark',
  'Silvally-dragon',
  'Silvally-steel',
  'Silvally-fairy',
]

const arceusForms = [
  'Arceus-normal',
  'Arceus-fire',
  'Arceus-water',
  'Arceus-grass',
  'Arceus-electric',
  'Arceus-ice',
  'Arceus-fighting',
  'Arceus-poison',
  'Arceus-ground',
  'Arceus-flying',
  'Arceus-psychic',
  'Arceus-bug',
  'Arceus-rock',
  'Arceus-ghost',
  'Arceus-dark',
  'Arceus-dragon',
  'Arceus-steel',
  'Arceus-fairy',
]

const pokemonPlus = [
  ...pokemon.all(),
  ...alolanForms,
  ...galarianForms,
  ...silvallyForms,
  ...arceusForms,
]

const getList = (type) => {
  const typeList = {
    all: pokemonPlus,
    alola: alolanForms,
    galar: galarianForms,
    silvally: silvallyForms,
    arceus: arceusForms,
  }

  return typeList[type]
}

exports.all = (sublist = 'all') => {
  return getList(sublist)
}

exports.random = (sublist = 'all') => {
  const list = getList(sublist)
  const random = uniqueRandomArray(list)

  return random()
}
