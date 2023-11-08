// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // [2,4,6,8,...]
// let stringArr = [
//     "twenty-seven",
//     "forty-nine",
//     "eighty-six",
//     "sixty-eight",
//     "seventy-six",
//     "twenty-six",
//     "twelve",
//     "nineteen",
//     "seven",
//     "forty-six",
// ];

// ["My bingo number is twenty-seven", "My bingo number is forty-nine", ...]

// Filter, find, forEach, map

// Map

// let mappedArr = stringArr.map(function(str, index){
//     if(index%2 === 0){
//         return "My bingo number is " + str;
//     } else {
//         return str;
//     }
// });

// console.log(mappedArr);

// let mappedArr = nums.map(function (num) {
//     return num * 2;
// });

// console.log(mappedArr);

// Anonymous Function

// for(let num of nums){
//     console.log(num);
// }

// nums.forEach(function(num, index){
//     console.log(num);
// })

//// **********

// ..forEach
// Named function:
// function actionToRunPerEl(num){
//     console.log(num);
// }
// nums.forEach(actionToRunPerEl);

// let nums = [10, 8, 42, 100]; // 160

// let total = nums.reduce(function(accum, curr){
//     return accum + curr;
// }, 0);

let purchasedOptions = [
    { item: "A/C", price: 1019.0 },
    { item: "Sunroof", price: 699.99 },
    { item: "AM/FM Stereo w/ cassette player", price: 199.0 },
];

let totalPrice = purchasedOptions.reduce(function (accum, curr) {
    return accum + curr.price;
}, 0);

console.log(totalPrice);
