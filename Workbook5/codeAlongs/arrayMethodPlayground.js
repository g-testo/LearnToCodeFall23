let menuItems = [
    { id: 1, item: "Tacos", category: "Meal", price: 12.29 },
    { id: 2, item: "Burger", category: "Meal", price: 7.29 },
    { id: 3, item: "Salad", category: "Meal", price: 8.29 },
    { id: 4, item: "Ice tea", category: "Drink", price: 2.19 },
    { id: 5, item: "Coke", category: "Drink", price: 2.29 },
];

// Accumulator Pattern for searching!

function findMenuItemById(items, id) {
    let menuItem = null;

    for(let item of items) {
        if (item.id === id) {
            // Finding the item
            menuItem = item;
            break;
        }
    }

    // for(let i=0;i<items.length;i++){
    //     if(items[i].id === id){
    //         menuItem = items[i];
    //         break;
    //     }
    // }

    return menuItem;
}

let foundItem = findMenuItemById(menuItems, 2);
console.log(foundItem);
