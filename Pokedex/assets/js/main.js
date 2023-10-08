

const adicioneHtml = document.getElementById("pokemonList");
const adicioneHtmlDetalhe = document.getElementById("documentoDetalhe")
const butaoLoad = document.getElementById("loadMore")
const limit = 5
let offset = 0
const maximo = 101;




function loadPokemons (offset, limit) {

    pokeApi.getPokemons(offset, limit).then((pokemonLista = []) => {

        const newHmtl = pokemonLista.map((pokemon) => {
            return `
            <li id="poke" class="pokemon ${pokemon.tipo}">
                <span class="Number">#${pokemon.numero}</span>
                <span class="Name">${pokemon.name}</span>

                <div class="detail">

                    <ol class="types">

                   <li> ${pokemon.tipos.map((type) => `<li class="type ${type}">${type}</li>`).join('')}</li>



                    </ol>

                    <img src="${pokemon.photo}" alt="${pokemon.name}">

                </div>


            `

        }).join("")

        adicioneHtml.innerHTML += newHmtl

        const urlPoke = pokemon.url
     
    })

}

function loadUrlPokemons() {


}

loadPokemons()

butaoLoad.addEventListener("click", () => {

    offset += limit
    const quantidadeAtual = offset + limit


    if (quantidadeAtual >= maximo) {
        
        let newLimite = maximo - offset
        loadPokemons(offset, newLimite)

        butaoLoad.parentElement.removeChild(butaoLoad)


    } else {
        
        loadPokemons(offset, limit)

    }

    function convertPokemonDetalhe(pokemon) {

        
        
        const html = `<li id="poke" class="pokemon ${pokemon.tipo}">
                <span class="Number">#${pokemon.numero}</span>
                <span class="Name">${pokemon.name}</span>

                <div class="detail">

                    <ol class="types">

                   <li> ${pokemon.tipos.map((type) => `<li class="type ${type}">${type}</li>`).join('')}</li>



                    </ol>

                    <img src="${pokemon.photo}" alt="${pokemon.name}">

                </div>
                
                    
            </li>

        }).join("")

        `

        adicioneHtmlDetalhe.innerHTML += html;



    }


    function loadDetalhePokemon(urlPokemon) {

        const url = pokemon.url
        fetch(url)
        .then((Response) => Response.json())
        .then((pokemon) => convertPokemonDetalhe())

    }


  
    
    
}
)



