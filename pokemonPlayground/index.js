window.onload = async () => {
    let pokemonContainer = document.getElementById("pokemon-container");
    let searchEl = document.getElementById("search");
    let sortEl = document.getElementById("sort");
    let isDefault = document.getElementById("isDefault");

    isDefault.onchange = ()=> {
        let filterPokemonFromSession = JSON.parse(sessionStorage.filteredPokemonArray);
        pokemonContainer.innerHTML = "";
        
        if(isDefault.checked){
            let isDefaultPokemon = filterPokemonFromSession.filter((pokemon)=>{
                return pokemon.isDefault;
            })
            console.log(isDefaultPokemon.length, filterPokemonFromSession.length)
            loadPokemonCards(isDefaultPokemon);
        } else {
            loadPokemonCards(filterPokemonFromSession);
        }
    }

    sortEl.onchange = ()=>{
        // Have to convert to Object from JSON because of storing in session storage
        let filterPokemonFromSession = JSON.parse(sessionStorage.filteredPokemonArray);
        console.log(sortEl.value);
        // Sort pokemon array
        filterPokemonFromSession.sort((a,b)=>{
            let type = sortEl.value.toLowerCase();
            if(a[type] > b[type]){
                return 1;
            } else {
                return -1;
            }
        });
        // Reassign pokemon in storage 
        sessionStorage.filteredPokemonArray = JSON.stringify(filterPokemonFromSession);
        // Remove all pokemon from page
        pokemonContainer.innerHTML = "";
        // Load all pokemon to page
        loadPokemonCards(filterPokemonFromSession);
    }

    searchEl.oninput = () => {
        let searchInputValue = searchEl.value;

        pokemonContainer.innerHTML = "";
        sortEl.value = "Id";
        let convertedPokemonList = JSON.parse(sessionStorage.pokemonList);

        let filteredPokemonList = convertedPokemonList.filter((pokemon)=>{
            return pokemon.name.startsWith(searchInputValue);
        })

        sessionStorage.filteredPokemonArray = JSON.stringify(filteredPokemonList);

        loadPokemonCards(filteredPokemonList);
    };

    fetch("https://pokemon-backend-dfea.onrender.com/api/pokemon?limit=1200")
        .then((res) => res.json())
        .then((allPokemon) => {
            sessionStorage.pokemonList = JSON.stringify(allPokemon);
            sessionStorage.filteredPokemonArray = JSON.stringify(allPokemon);

            loadPokemonCards(allPokemon);
        })
        .catch((err) => {
            console.log(err);
        });

    let loadPokemonCards = (arrayOfPokemon) => {
        arrayOfPokemon.forEach((pokemon) => {
            // If it does not have an image, do not load the card
            if(!pokemon.official_artwork_default) return;

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
