
function getSocSecTax(grossPay){
    return grossPay * .062;
}

let socialSecurityTax = getSocSecTax(100_000);
// console.log(socialSecurityTax);

////

function getMedicareTax(grossPay){
    return grossPay * .0145;
}

let medicareTax = getMedicareTax(100_000);
// console.log(medicareTax);

////

function getFederalTax(grossPay, withholdingCode){
    let taxRate;
    
    if(withholdingCode === 0){
        taxRate = .23;
    } else if(withholdingCode === 1){
        taxRate = .21;
    } else if(withholdingCode === 2){
        taxRate = .195;
    } else if(withholdingCode === 3){
        taxRate = .185;
    } else {
        taxRate = .18 - .005 * (withholdingCode - 4);
    }

    return grossPay * taxRate;
}

const federalTax1 = getFederalTax(750, 0);
console.log(federalTax1);

const federalTax2 = getFederalTax(1550, 2);
console.log(federalTax2);

const federalTax3 = getFederalTax(1100, 6);
console.log(federalTax3);
