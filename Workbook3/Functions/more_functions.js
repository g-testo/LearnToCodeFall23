// 1
function displayMailingLabel(name, address, city, state, zip) {
    //     console.log(`${name}
    // ${address}
    // ${city}, ${state} ${zip}`);
    console.log(name);
    console.log(address);
    console.log(city + ", " + state + " " + zip);
}
displayMailingLabel("Gregory Testo", "123 Center St.", "Queens", "NY", 11101);

// 2
function addNumbers(num1, num2) {
    let sum = num1 + num2;
    // console.log(num1 + " + " + num2 + " = " + sum);
    console.log(`${num1} + ${num2} = ${sum}`);
}
addNumbers(1, 2);
// 3
function displayReceipt(totalDue, amountPaid) {
    let changeDue = amountPaid - totalDue;
    console.log("Total Due: " + totalDue);
    console.log("Amount Paid: " + amountPaid);
    if(changeDue >= 0){
        console.log("Change Due: " + changeDue);
    } else {
        console.log("You still own: " + Math.abs(changeDue));
    }
}
displayReceipt(35, 100);
displayReceipt(20, 20);
displayReceipt(50, 30);
