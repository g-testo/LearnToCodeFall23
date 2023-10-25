// Scope
// Global scope
// Local scope
// Function scope
// Block scope

// let count = 0; // Global Variable

// function increment(){
//     count = count + 1;
// }

// let globalScope = "global";

// function myFunkyFunc(){ // Castle walls
//     let functionScope = "function";
//     if(true){ // Fence
//         let blockScope1 = "block1";
//     }

//     function myNestedFunc(){ // Inner castle wall
//         let nestedFunctionScope = "nested function";

//     }
//     myNestedFunc();
// }

// if(true){ // Fence
//     var blockScope2 = "block2";
// }

// myFunkyFunc();

// function calculator(num1, num2, operation){ // 10, 20, "add"
//     function add(addNum1, addNum2){
//         let result = addNum1 + addNum2;
//         return result;
//     }
//     if(operation === "add"){
//         return add(num1, num2);
//     }
// }
// 8

// 7

// 4

"use strict";
let a = 4;
function test6() {
    let a = 7;
    function again() {
        let a = 8;
        console.log("a = " + a);
    }
    again();
    console.log("a = " + a);
}
test6();
console.log("a = " + a);