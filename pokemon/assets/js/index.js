// https://pokeapi.co/api/v2/type/grass

window.onload = () => {
    addTypeFilterIcons();
    // getAllPokemonList();
};

const addTypeFilterIcons = () => {
    let typesContainer = document.getElementById("search-sort-filter-container");
    let types = [
        {
            name: "fire",
            hoverBackgroundColor: "red",
            iconPath: "assets/images/icons/fire.png",
        },
        {
            name: "grass",
            hoverBackgroundColor: "lightGreen",
            iconPath: "assets/images/icons/grass.png",
        },
        {
            name: "lightning",
            hoverBackgroundColor: "yellow",
            iconPath: "assets/images/icons/lightning.png",
        },
        {
            name: "water",
            hoverBackgroundColor: "blue",
            iconPath: "assets/images/icons/water.png",
        },
        {
            name: "bug",
            hoverBackgroundColor: "green",
            iconPath: "assets/images/icons/bug.png",
        },
    ];

    // displayText: "Grass",
    // hoverBackgroundColor: "lightGreen",
    // iconPath: "assets/images/icons/grass.png",

    for(let type of types){
        let iconContainerEl = document.createElement("div");
        iconContainerEl.className = "icon-container";

        iconContainerEl.onmouseover=()=>{
            iconContainerEl.style.backgroundColor = type.hoverBackgroundColor;
        }

        iconContainerEl.onmouseleave=()=>{
            iconContainerEl.style.backgroundColor = "white";
        }

        iconContainerEl.onclick=()=>{
            let allTypeIconEls = document.getElementsByClassName("icon-container");
            for(let iconEl of allTypeIconEls){
                iconEl.style.color = "black";
                // iconContainerEl.style.textDecoration = "none";
            }

            iconContainerEl.style.color = "red";
            // iconContainerEl.style.textDecoration = "underline";
        }

        iconContainerEl.innerHTML = `
            <img src=${type.iconPath} alt="fire type" />
            <div>${type.name}</div>
        `;
        
        typesContainer.appendChild(iconContainerEl);

    }
};

let getAllPokemonList = () => {
    // Get all pokemon
    fetch("https://pokeapi.co/api/v2/pokemon?limit=2")
        .then((res) => res.json())
        .then((data) => {
            let pokeList = data.results;
            for (let pokemon of pokeList) {
                // Get details about each pokemon
                getPokemonDetails(pokemon);
            }
        });
};

let getPokemonDetails = (pokemon) => {
    let listEl = document.getElementById("list");
    fetch(pokemon.url)
        .then((res) => res.json())
        .then((pokeDetails) => {
            let typeStrArr = pokeDetails.types.map((item) => item.type.name);
            let cardDiv = document.createElement("div");
            cardDiv.className = "card";

            cardDiv.innerHTML = `<div
                                class="thumbnail"
                                style="
                                    background-image: url(${
                                        pokeDetails.sprites.other["official-artwork"].front_default
                                    });
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
};
