"use strict";

window.onload = function(){
    let autoEl = document.getElementById("auto");

    autoEl.onclick = function(){
        let additionalContainerEl = document.getElementById("additional-policy-container");
        additionalContainerEl.style.display = "block";
    }

    // let btn = document.getElementById("submit-btn");

    // btn.onclick = function(){
    //     let selectedOptionEl = document.querySelector("input[name='policy']:checked");
    //     console.log(selectedOptionEl.value);
    // }

}
