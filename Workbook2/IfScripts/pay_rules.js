var payRate = 17.3;
var hoursWorked = 45;

var grossPay;

if (hoursWorked > 40) {
    var overtimeHours = hoursWorked - 40;
    var overtimeRate = payRate * 1.5;
    grossPay = payRate * 40 + overtimeHours * overtimeRate;

    // grossPay = payRate * 40 + (hoursWorked - 40) * (payRate * 1.5);
} else {
    grossPay = payRate*hoursWorked;
}

console.log(grossPay);