"use strict";

function showMessage(){
    const firstName = "Gregorio";
    const messageEl = document.getElementById("message");
    // Hello __, it's nice to meet you!
    // messageEl.innerHTML = "Hello " + firstName + ", it's nice to meet you!"; // Concatenation
    messageEl.innerHTML = `Hello ${firstName}, it's nice to meet you!`; // Interpolation
}

showMessage();