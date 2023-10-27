"use strict";

window.onload = function(){
    // let flavorSubmitBtnEl = document.getElementById("flavor-submit-btn");
    // flavorSubmitBtnEl.onclick = function(){
    //     let flavorNameEl = document.getElementById("flavor-name");
    //     console.log(flavorNameEl.value);
    // }

    let flavorForm = document.getElementById("flavor-form");
    flavorForm.onsubmit = function(e){
        e.preventDefault();
        console.log("Trigger");
    }

}