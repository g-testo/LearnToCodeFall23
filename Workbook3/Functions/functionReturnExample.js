function multiplication(num1, num2){
    return num1 * num2;
}

let multiResult = multiplication(4, 3);
///////
function add(num1, num2){
    return num1 + num2;
}
let addResult = add(10, 20);
///////
function sub(num1, num2){
    return num1 - num2;
}
let subResult = sub(20, 10);

///////
function divide(num1, num2){
    if(num2 === 0){
        console.log("You can't divide by zero");
        return null;
    }
    return num1/num2;
}

let divResult1 = divide(10, 5);
console.log(divResult1); // 2

let divResult2 = divide(4, 4);
console.log(divResult2); // 1

let divResult3 = divide(6, 3);
console.log(divResult3); // 2

let divResult4 = divide(1, 0);
console.log(divResult4); // null