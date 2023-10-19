// Don't Repeat Yourself
// DRY

// Write Everything Twice
// WET

var amount = 12.50;
var taxExempt = false;

var totalDue;
var tax;

if (taxExempt) {
    tax = 0; 
} else {
    tax = amount * 0.08;
}

totalDue = amount + tax;
console.log(totalDue);
