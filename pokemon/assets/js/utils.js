let capitalize=(str)=>{
    if(!str) return;
    return str[0].toUpperCase() + str.slice(1);
}

let decimalPlace = 2;

let convertDeciToFeet = (decimeters) => {
    let meters = decimeters / 10;
    return (meters * 3.28084).toFixed(decimalPlace);
};

let convertHectoToLbs = (hectograms) => {
    return (hectograms / 4.5359237).toFixed(decimalPlace);
};

let addGoogleFontToBody = () => {
    // Create and render the google fonts API
    let headEl = document.querySelector("head");
    let googleFontEl = document.createElement("link");
    googleFontEl.href = "https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap";
    googleFontEl.rel = "stylesheet";
    headEl.appendChild(googleFontEl);

    let bodyEl = document.querySelector("body");
    bodyEl.style["font-family"] = "'Press Start 2P', cursive";
};

export {
    capitalize,
    convertDeciToFeet,
    convertHectoToLbs,
    addGoogleFontToBody
}