window.onload = async () => {
    let pokemonContainer = document.getElementById("pokemon-container");
    let searchEl = document.getElementById("search");

    searchEl.oninput = () => {
        pokemonContainer.innerHTML = "";
        let convertedPokemonList = JSON.parse(sessionStorage.pokemonList);

        loadPokemonCards(convertedPokemonList);
    };

    fetch("https://pokemon-backend-dfea.onrender.com/api/pokemon?limit=10")
        .then((res) => res.json())
        .then((allPokemon) => {
            sessionStorage.pokemonList = JSON.stringify(allPokemon);

            loadPokemonCards(allPokemon);
        })
        .catch((err) => {
            console.log(err);
        });

    let loadPokemonCards = (arrayOfPokemon) => {
        arrayOfPokemon.forEach((pokemon) => {
            let pokemonCard = document.createElement("div");
            pokemonCard.classList.add("card");

            pokemonCard.innerHTML = `
                    <img src=${pokemon.official_artwork_default} alt=${pokemon.name} />
                    <p>${pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</p>
                `;

            pokemonContainer.appendChild(pokemonCard);
        });
    };
};
