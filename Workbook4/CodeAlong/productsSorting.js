let products = [
    {prodId: 2, item: "Notepads (12 pk)", price: 12.29},
    {prodId: 12, item: "Black Pens (12 pk)", price: 5.70},
    {prodId: 22, item: "Stapler", price: 12.79}
];
products.sort((a,b)=>{
    return a.price - b.price;
    // if(a.item < b.item){
    //     return -1;
    // } else if(a.item == b.item){
    //     return 0;
    // } else {
    //     return 1;
    // }
})

console.log(products);