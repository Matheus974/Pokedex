
const pokeApi = {};


function convertPokeApiToPokemon(pokeDetail) {

    const pokemon = new Pokemon()
    pokemon.numero = pokeDetail.id
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.tipos = types
    pokemon.tipo = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default
    pokemon.url = `https://pokeapi.co/api/v2/pokemon/${pokeDetail.id}`

    return pokemon
}

pokeApi.getUrlPokemon = (pokemons) => {

    return fetch(pokemons.url)
        .then((response) => response.json())
        .then((pokemon) => convertPokeApiToPokemon(pokemon))

}


pokeApi.getPokemons = (offset = 0, limit = 5) => {

    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    return fetch(url)
    .then ((response) => response.json())
    .then ((jsonBody) => jsonBody.results)
    .then ((pokemons) => pokemons.map(pokeApi.getUrlPokemon))
    .then((listaUrl) => Promise.all(listaUrl))
    .then((listaPokemons) => listaPokemons)
            

}




