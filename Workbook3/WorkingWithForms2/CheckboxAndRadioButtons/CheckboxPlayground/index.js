"use strict";

window.onload = function(){
    let btn = document.getElementById("submitBtn");

    // Run when submit button is clicked
    btn.onclick = calcCarOptionsCost;

    function calcCarOptionsCost(){
        let tollTagEl = document.getElementById("tollTag");        
        let gpsEl = document.getElementById("gps");
        let roadsideEl = document.getElementById("roadside");
        
        
        let totalCost = 0;

        if(tollTagEl.checked){
            totalCost += Number(tollTagEl.value);
        }

        if(gpsEl.checked){
            totalCost += Number(gpsEl.value);
        }

        if(roadsideEl.checked){
            totalCost += Number(roadsideEl.value);
        }

        console.log(totalCost);

        let totalCostEl = document.getElementById("estTotalOptionsCost");
        totalCostEl.innerHTML = (totalCost/100).toFixed(2);
    }

    // Run on page load
    calcCarOptionsCost();
}