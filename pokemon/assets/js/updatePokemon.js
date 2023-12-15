// In HTML
//      Create a form: weight, height, official_artwork_default, isDefault

// In JS: onload
//      Get the name of the pokemon from the URL: See singlePokemon.js for details
// Prepopulate the form:
//      Fetch getting the initial details about the pokemon: See singlePokemon.js for details
//      Grab each field and set them to their initial values: See courses example: https://github.com/g-testo/LearnToCodeFall23/tree/main/Workbook8/CodeAlongs/coursesTwoExercise/frontend

// Event handler: onsubmit
// Get all of the current values from each field
// Create a object with all of these fields
// Fetch, PUT request "/pokemon/${nameOfPokemon}" *include the current data
// Redirect visitor to singlePokemon.html page

window.onload = () => {
    let urlParams = new URLSearchParams(location.search);
    let pokemonName = urlParams.get("name");
    fetch(`https://pokemon-backend-dfea.onrender.com/api/pokemon/${pokemonName}`)
        .then((res) => res.json())
        .then((singlePokemon) => {
            let imageEl = document.getElementById("image");
            let heightEl = document.getElementById("height");
            let weightEl = document.getElementById("weight");
            let isDefaultEl = document.getElementById("isDefault");

            imageEl.value = singlePokemon.official_artwork_default;
            heightEl.value = singlePokemon.height;
            weightEl.value = singlePokemon.weight;
            isDefaultEl.checked = singlePokemon.isDefault;

            let updateFormEl = document.getElementById("update-form");
            updateFormEl.onsubmit = (e) => {
                e.preventDefault();
                singlePokemon.official_artwork_default = imageEl.value;
                singlePokemon.height = heightEl.value;
                singlePokemon.weight = weightEl.value;
                singlePokemon.isDefault = isDefaultEl.checked;

                fetch(`https://pokemon-backend-dfea.onrender.com/api/pokemon/${pokemonName}`, {
                    method: "PUT",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(singlePokemon),
                })
                    .then(() => {
                        location.href = `singlePokemon.html?name=${pokemonName}`;
                    })
                    .catch((err) => {
                        console.err(err);
                    });
            };
        })
        .catch((err) => {
            console.error(err);
        });
};
