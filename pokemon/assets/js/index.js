// https://pokeapi.co/api/v2/type/grass

import { capitalize } from "./utils.js";

let decimalPlace = 2;

let convertDeciToFeet = (decimeters) => {
    let meters = decimeters / 10;
    return (meters * 3.28084).toFixed(decimalPlace);
};

let convertHectoToLbs = (hectograms) => {
    return (hectograms / 4.5359237).toFixed(decimalPlace);
};

window.onload = () => {
    addTypeFilterIcons();
    getAllPokemonList();
};

const addTypeFilterIcons = () => {
    let typesContainer = document.getElementById("search-sort-filter-container");
    let listEl = document.getElementById("list");

    let types = [
        {
            name: "all",
            hoverBackgroundColor: "lightGray",
            iconPath: "assets/images/icons/fire.png",
        },
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
            name: "electric",
            hoverBackgroundColor: "yellow",
            iconPath: "assets/images/icons/electric.png",
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

    for (let type of types) {
        let iconContainerEl = document.createElement("div");
        iconContainerEl.className = "icon-container " + type.name;

        iconContainerEl.onmouseover = () => {
            iconContainerEl.style.backgroundColor = type.hoverBackgroundColor;
        };

        iconContainerEl.onmouseleave = () => {
            iconContainerEl.style.backgroundColor = "white";
        };

        iconContainerEl.onclick = () => {
            let currentActiveEl = document.querySelector(".active");
            if (currentActiveEl) {
                currentActiveEl.classList.remove("active");
            }
            iconContainerEl.classList.add("active");

            // Erase all pokemon
            listEl.innerHTML = "";
            // Add pokemon that match currently selected type
            getPokemonListByType(type.name);
        };

        iconContainerEl.innerHTML = `
            <img src=${type.iconPath} alt="fire type" />
            <div>${capitalize(type.name)}</div>
        `;

        typesContainer.appendChild(iconContainerEl);
    }
};

let getPokemonListByType = (type) => {
    if (type === "all") {
        getAllPokemonList();
    } else {
        // Get pokemon by type
        fetch(`https://pokeapi.co/api/v2/type/${type}`)
            .then((res) => res.json())
            .then((typeDetails) => {
                let pokeList = typeDetails.pokemon;
                for (let item of pokeList) {
                    // Get details about each pokemon
                    getPokemonDetails(item.pokemon);
                }
            });
    }
};

let getAllPokemonList = () => {
    // Get all pokemon
    fetch("https://pokeapi.co/api/v2/pokemon?limit=3")
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
            let typeStrArr = pokeDetails.types.map((item) => capitalize(item.type.name));
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
                                <div>Name: ${capitalize(pokeDetails.name)}</div>
                                <div>Type: ${typeStrArr.join(", ")}</div>
                                <div>Height: ${convertDeciToFeet(pokeDetails.height)} feet</div>
                                <div>Weight: ${convertHectoToLbs(pokeDetails.weight)} lb(s)</div>
                            </div>`;
            listEl.appendChild(cardDiv);
        });
};
