window.onload = async () => {
    let pokemonContainer = document.getElementById("pokemon-container");

    fetch("https://pokemon-backend-dfea.onrender.com/api/pokemon?limit=600")
        .then((res) => res.json())
        .then((data) => {
            data.forEach((pokemon) => {
                let pokemonCard = document.createElement("div");
                pokemonCard.classList.add("card");

                pokemonCard.innerHTML = `
                    <img src=${pokemon.official_artwork_default} alt=${pokemon.name} />
                    <p>${pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</p>
                `;

                pokemonContainer.appendChild(pokemonCard);
            });
        })
        .catch((err) => {
            console.log(err);
        });
};
