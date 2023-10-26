"use strict";

window.onload = function(){
    let btn = document.getElementById("submitBtn");
    let isGovtCheckboxEl = document.getElementById("govt");

    // Run when submit button is clicked
    btn.onclick = calcCarOptionsCost;
    isGovtCheckboxEl.onclick = function(){
        // isGovtCheckboxEl.disabled = true;
        // isGovtCheckboxEl.style.display = "none";
        let isGovtLabelEl = document.getElementById("govt-label");

        isGovtLabelEl.style.visibility = "hidden";
        isGovtCheckboxEl.style.visibility = "hidden";


        let roadSideEl = document.getElementById("roadside");
        roadSideEl.checked = true;

    }

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