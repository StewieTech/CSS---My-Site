const test = require('ava');
const pokemonPlus = require('.');

test('default', t => {
  t.true(pokemonPlus.all().length > 0);
  t.truthy(pokemonPlus.random());
  t.not(pokemonPlus.random(), pokemonPlus.random());
});

test('regional', t => {
  t.true(pokemonPlus.all('alola').length === 18);
  t.true(pokemonPlus.all('galar').length === 13);
  t.not(pokemonPlus.random('alola'), pokemonPlus.random('alola'));
});

test('types', t => {
  t.true(pokemonPlus.all('silvally').length === 18);
  t.true(pokemonPlus.all('arceus').length === 18);
  t.not(pokemonPlus.random('silvally'), pokemonPlus.random('silvally'));
});