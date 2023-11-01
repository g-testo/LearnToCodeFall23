// let kids = ["Natalie", "Brittany", "Zachary", "Allison"];

// kids.sort();

// console.log(kids);

// let numbers = [3, 27, 400, 1, 111, 11, 10, 90, 7];

// numbers.sort(function (a, b) {
//     if (a < b) {
//         return -1;
//     } else if (a == b) {
//         return 0;
//     } else {
//         return 1;
//     }
// });

// console.log(numbers);

let products = [
    { prodId: 22, item: "Stapler", price: 12.79 },
    { prodId: 2, item: "Notepads (12 pk)", price: 12.29 },
    { prodId: 12, item: "Black Pens (12 pk)", price: 5.7 },
];

products.sort(function(a, b){
    if(a.item < b.item){
        return -1;
    } else if(a.item === b.item){
        return 0;
    } else {
        return 1;
    }
});

console.log(products);