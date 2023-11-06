let menuItems = [
    { id: 1, item: "Tacos", category: "Meal", price: 12.29 },
    { id: 2, item: "Burger", category: "Meal", price: 7.29 },
    { id: 3, item: "Salad", category: "Meal", price: 8.29 },
    { id: 4, item: "Ice tea", category: "Drink", price: 2.19 },
    { id: 5, item: "Coke", category: "Drink", price: 2.29 },
];

// Output
// [
//     { id: 1, item: "Tacos", category: "Meal", price: 12.29 },
//     { id: 2, item: "Burger", category: "Meal", price: 7.29 },
//     { id: 3, item: "Salad", category: "Meal", price: 8.29 },
// ]


let itemsMatchingCategory = menuItems.filter(function(item){
    return item.category === "Drink";
});
console.log(itemsMatchingCategory);

// ***********************

// Accumulator Pattern for filtering!
// function filterMenuItemsByCategory(items, category) {

//     // Create Accumulator
//     let menuItemsMatchCategory = [];

//     // loop
//     for (let item of items) {
//         if (item.category === category) {
//             // Act of Acumulating!
//             menuItemsMatchCategory.push(item);
//         }
//     }

//     // Return accumulator
//     return menuItemsMatchCategory;
// }

// let filteredItems = filterMenuItemsByCategory(menuItems, "Drink");
// console.log(filteredItems);

// **********************

// let menuItems = [
//     { id: 1, item: "Tacos", category: "Meal", price: 12.29 },
//     { id: 2, item: "Burger", category: "Meal", price: 7.29 },
//     { id: 3, item: "Salad", category: "Meal", price: 8.29 },
//     { id: 4, item: "Ice tea", category: "Drink", price: 2.19 },
//     { id: 5, item: "Coke", category: "Drink", price: 2.29 },
// ];

// Callback function
// function findById(item){
//     if(item.id = 2){
//         return true;
//     }
// }

// let foundItem = menuItems.find(findById);
// console.log(foundItem);

// let foundItem = menuItems.find(function(item){
//     return item.id === 2;
// });
// console.log(foundItem);

// Accumulator Pattern for searching!

// function findMenuItemById(items, id) {
//     let menuItem = null;

//     for(let item of items) {
//         if (item.id === id) {
//             // Finding the item
//             menuItem = item;
//             break;
//         }
//     }

//     // for(let i=0;i<items.length;i++){
//     //     if(items[i].id === id){
//     //         menuItem = items[i];
//     //         break;
//     //     }
//     // }

//     return menuItem;
// }

// let foundItem = findMenuItemById(menuItems, 2);
// console.log(foundItem);
