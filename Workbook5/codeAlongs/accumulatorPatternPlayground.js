// let num = [2, 5, 6, 10, 100, 40, 42]; // 205
// Create an algorithm that sums all numbers in a given array

// Basic Accumulator Pattern
// function sum(numArr){
//     // 1: Creating an accumulator, variable
//     let total = 0;
//     // 2: Loop
//     for(let i=0;i<numArr.length;i++){

//         // Might involve an if statement

//         // 3: Act of accumulation
//         // total = total + numArr[i];
//         total += numArr[i];
//     }

//     // 4: Return our accumulator
//     return total;
// }
// let result = sum(num);
// console.log(result);

//*********/ End of: Basic Accumulator Pattern /**********

let groceryPrices = [
    10.22, 10.89, 1.11, 8.47, 14.52, 7.96, 15.99, 18.52, 5.99, 9.22, 12.45, 19.31, 7.27, 14.96, 5.35, 6.14, 6.61, 11.54,
    7.3, 5.55,
];

// 1: Given a list of grocery store prices, I want a new list of all items greater than $8
// input: [...]
// output: [...]

function findPricesGreaterThanEight(prices){
    let pricesGreaterThanEight = [];

    for(let i=0;i<prices.length;i++){
        if(prices[i] > 8){
            pricesGreaterThanEight.push(prices[i]);
        }
    }

    return pricesGreaterThanEight;
}
let result = findPricesGreaterThanEight(groceryPrices);
console.log(result);

// 2: I want the average of all the prices
// input: [...]
// output: number

// 3: I want to find total prices of the 3 cheapest items
// input: [...]
// output: number
