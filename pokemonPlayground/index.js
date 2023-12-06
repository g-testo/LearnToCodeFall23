
window.onload= async()=>{
    let pokemonContainer = document.getElementById("pokemon-container");

    fetch("https://pokemon-backend-dfea.onrender.com/api/pokemon?limit=20")
        .then((res)=>res.json())
        .then((data)=>{
            data.forEach((pokemon)=>{
                let pokemonCard = document.createElement("div");
                pokemonCard.innerHTML = `<img src=${pokemon.official_artwork_default} alt=${pokemon.name} />`;
                pokemonContainer.appendChild(pokemonCard);
            })
        }).catch((err)=>{
            console.log(err);
        })

}
