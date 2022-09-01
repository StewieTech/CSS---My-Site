# Pokemon Plus
Get Pokémon names, including Alolan and Galarian variants, and the various forms of Silvally and Arceus.

## Install
```
npm install pokemon-plus
```

## Usage
```js
const pokemonPlus = require('pokemon-plus');

pokemonPlus.all();
// ['Bulbasaur', …]

pokemonPlus.random();
// 'Ninetales'
```

## API
### .all(sublist?)
Get all Pokémon names as a `string[]`

#### sublist
Type: `string`  
Default: `all`  
Options: `alola`, `galar`, `silvally`, `arceus`

```js
pokemonPlus.all();
// ['Bulbasaur', …]
pokemonPlus.all('alola');
// ['Diglett-alola', …]
```

### .random(sublist?)
Get random Pokémon name

#### sublist
Type: `string`  
Default: `all`  
Options: `alola`, `galar`, `silvally`, `arceus`

```js
pokemonPlus.random();
// 'Lycanroc'
pokemonPlus.random('silvally');
// 'Silvally-ice'
```

## Credit
This module was built as an extension of the ['pokemon' package by Sindre Sorhus](https://github.com/sindresorhus/pokemon).