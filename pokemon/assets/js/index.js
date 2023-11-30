window.onload = () => {
    let listEl = document.getElementById("list");
    // Get all pokemon
    fetch("https://pokeapi.co/api/v2/pokemon?limit=6")
        .then((res) => res.json())
        .then((data) => {
            let pokeList = data.results;
            for (let pokemon of pokeList) {
                // Get details about each pokemon
                fetch(pokemon.url)
                    .then((res) => res.json())
                    .then((pokeDetails) => {
                        let typeStrArr = pokeDetails.types.map(item=>item.type.name);
                        let cardDiv = document.createElement("div");
                        cardDiv.className = "card";

                        cardDiv.innerHTML = `<div
                                class="thumbnail"
                                style="
                                    background-image: url(${pokeDetails.sprites.other["official-artwork"].front_default});
                                "
                            ></div>
                            <div class="details">
                                <div>Name: ${pokeDetails.name}</div>
                                <div>Type: ${typeStrArr.join(", ")}</div>
                                <div>Height: ${pokeDetails.height} meter(s)</div>
                                <div>Weight: ${pokeDetails.weight} lb(s)</div>
                            </div>`;
                            listEl.appendChild(cardDiv);
                    });
            }
        });
};
