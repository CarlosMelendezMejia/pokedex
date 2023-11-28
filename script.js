const pokemonList = document.querySelector("#PokemonList");
let url = "https://pokeapi.co/api/v2/pokemon/";

for (let i = 1; i <= 151; i++ ){
    fetch(url + i)
        .then((response) => response.json())
        .then(data => showPokemon(data))
}

function showPokemon(poke) {

    let types = poke.types.map(type => `<p class="${type.type.name} type">${type.type.name}</p>`);
    types = types.join('');

    let pokeId = poke.id.toString();
    if (pokeId.length === 1){
        pokeId = '00' + pokeId;
    } else if (pokeId.length === 2){
        pokeId = '0' + pokeId;
    }

    const div = document.createElement("div");
    div.classList.add("pokemon");
    div.innerHTML = `<p class="pokemon-id-back">#${pokeId}</p>
    <div class="pokemon-image">
        <img src="${poke.sprites.other["official-artwork"].front_default}" alt="${poke.name}">
    </div>
    <div class="pokemon-info">
        <div class="container-name">
            <p class="pokemon-id">#${pokeId}</p>
            <h2 class="pokemon-name">${poke.name}</h2>
        </div>
        <div class="pokemon-type">
            ${types}
        </div>
        <div class="pokemon-stats">
            <p class="height stat">${poke.height}FT</p>
            <P class="weight stat">${poke.weight}G</P>
        </div>
    </div>`;
    pokemonList.append(div);
}
