var payRate = 12.5;
var hoursWorked = 55;

var grossPay;

if (hoursWorked > 40) {
    var overtimeHours = hoursWorked - 40;
    var overTimeRate = payRate * 1.5;
    grossPay = payRate * 40 + overtimeHours * overTimeRate;

    // grossPay = payRate * 40 + (hoursWorked - 40) * (payRate * 1.5);
} else {
    grossPay = payRate*hoursWorked;
}

console.log(grossPay);