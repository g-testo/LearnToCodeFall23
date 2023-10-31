// let gregsComputersSimple = [
//     // Detail level 1
//     'Apple Macbook Pro 16"',
//     "Acer Helios 500",
//     "Chromebook",
//     "HP touchscreen",
//     'Apple Macbook Pro 15.3"',
// ];

// function getAverage(scores){
//     console.log(scores);
// }

// getAverage([92, 98, 84, 76, 89, 99, 100]);

// let animals = [
//     "Cat", "Dog", "Lion", "Gorilla", "Fox", "Alpaca"
// ]

// animals[6] = "Sheep";

// animals[animals.length] = "Capybara";
// console.log(animals);

// let indexOfFox = animals.indexOf("Fox", 5);
// console.log(indexOfFox);

// let lastIndexOfSheep = animals.lastIndexOf("Sheep", 5);
// console.log(lastIndexOfSheep);

let menu = [
    {id: 1, item: "Tacos", category: "Meal", price: 12.29},
    {id: 2, item: "Burger", category: "Meal", price: 7.29},
    {id: 3, item: "Salad", category: "Meal", price: 8.29},
    {id: 4, item: "Ice tea", category: "Drink", price: 2.19},
    {id: 5, item: "Coke", category: "Drink", price: 2.29}
];

function filterByCategory(givenMenu, category){
    let matchingMenuItems = [];
    for(let i = 0; i < givenMenu.length;i++){
        console.log(givenMenu[i].category);
        
    }
}

filterByCategory(menu, "Meal");