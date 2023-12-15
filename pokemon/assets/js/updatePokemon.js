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
    
window.onload = ()=>{
    let urlParams = new URLSearchParams(location.search);
    let pokemonName = urlParams.get("name");
    fetch(`https://pokemon-backend-dfea.onrender.com/api/pokemon/${pokemonName}`)
        .then(res=>res.json())
        .then((singlePokemon)=>{
            document.getElementById("image").value = singlePokemon.official_artwork_default;
            document.getElementById("height").value = singlePokemon.height;
            document.getElementById("weight").value = singlePokemon.weight;
            console.log(singlePokemon.isDefault);
            document.getElementById("isDefault").checked = true;
        }).catch((err)=>{
            console.error(err);
        })
}