import { capitalize, convertDeciToFeet, convertHectoToLbs, addGoogleFontToBody } from "./utils.js";

window.onload = () => {
    addGoogleFontToBody();
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
            // [
            //     {
            //         "title": "Back Default",
            //         "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png"
            //     }, {}, {}
            // ]

            let pokemonImagesArr = singlePokemon.alt_images.map((alt_image) => {
                return `<li><img src=${alt_image.url} alt=${singlePokemon.name} /></li>`;
            });

            // [
            //     `<img src=${} />`
            // ]

            let pokemonMovesElArr = singlePokemon.moves.map((move) => {
                return `<li>${capitalize(move)}</li>`;
            });
            //      Create a pokemon El using data from above (Jonathan Style)
            singlePokemonEl.innerHTML = `<div id="single-pokemon-details">
                <div id="main-image-container">
                    <img src=${singlePokemon.official_artwork_default} alt=${singlePokemon.name}/>
                </div>
                <p><b>Name: </b>${capitalize(singlePokemon.name)}</p>
                <p><b>Height: </b>${convertDeciToFeet(singlePokemon.height)} ${
                singlePokemon.height === 1 ? "Foot" : "Feet"
            }</p>
                <p><b>Weight: </b>${convertHectoToLbs(singlePokemon.weight)} lb(s)</p>
                <p>
                    <b>Admin Actions:</b>
                    <button id="update-btn">Update</button>
                    <button id="delete-btn">Release</button>
                </p>
                <p><b>Alternative Images: </b></p>
                <ul id="alt-images">
                    ${pokemonImagesArr.join("")}
                </ul>
                <p><b>Moves: </b></p>
                <ul id="moves">
                    ${pokemonMovesElArr.join("") /* .join: Remove commas from displaying an array */}
                </ul>

            </div>`;
            let updateBtn = document.getElementById("update-btn");
            let deleteBtn = document.getElementById("delete-btn");

            updateBtn.onclick = () => {
                location.href = "updatePokemon.html";
            }

            deleteBtn.onclick = () => {
                fetch(`https://pokemon-backend-dfea.onrender.com/api/pokemon/${pokemonName}`, {
                    method: "DELETE",
                }).then((res) => {
                    location.href = "index.html";
                });
            };


            //      Replacement placement el
        });

    // Add Delete button
    //      Add fetch that deletes pokemon
    //      Redirect to index.html

    // Work on update pokemon page using LearnToCode/Workbook8/codealongs/coursesTwoExercise
};
