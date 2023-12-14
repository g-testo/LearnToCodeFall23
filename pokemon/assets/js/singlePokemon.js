import { capitalize, convertDeciToFeet, convertHectoToLbs } from "./utils.js";


window.onload = () => {
    // Grab pokemon
    //      Part 1
    //          URLSearchParams: to get the name of pokemon from URL
    let urlParams = new URLSearchParams(location.search);
    let pokemonName = urlParams.get("name"); // "pikachu"

    if (!pokemonName) {
        console.error("No pokemon name provided");
        location.href = "index.html";
    }

    //      Part 2
    //          Fetch using the name of the pokemon from part 1 (console.log to confirm this works)
    fetch(`https://pokemon-backend-dfea.onrender.com/api/pokemon/${pokemonName}`)
        .then((res) => res.json())
        .then((singlePokemon) => {
            //      Adding pokemon to the page
            //          Create placement for pokemon in singlePokemon.html (HTML)
            //          Get the placement El using getElementById
            let singlePokemonEl = document.getElementById("single-pokemon");
            //      Create a pokemon El using data from above (Jonathan Style)
            let pokemonMovesElArr = singlePokemon.moves.map((move)=>{
                return `<li>${move}</li>`;
            });

            
            singlePokemonEl.innerHTML = `<div class="single-pokemon-details">
                <img width=300 src=${singlePokemon.official_artwork_default} alt=${singlePokemon.name}/>
                <p>Name: ${capitalize(singlePokemon.name)}</p>
                <p>Height: ${convertDeciToFeet(singlePokemon.height)} ${singlePokemon.height === 1 ? "Foot" : "Feet"}</p>
                <p>Weight: ${convertHectoToLbs(singlePokemon.weight)} lb(s)</p>
                <ul class="moves">
                    ${pokemonMovesElArr.join("")}
                </ul>

            </div>`;
            //      pokemonEl.innerHTML = `<div>${pokemon.name}</div>`

            //      Replacement placement el
        });

    // Add Delete button
    //      Add fetch that deletes pokemon
    //      Redirect to index.html

    // Work on update pokemon page using LearnToCode/Workbook8/codealongs/coursesTwoExercise
};
