// Data Structures

// let javiersGlassOfWater_source = "Fridge";
// let javiersGlassOfWater_owner = "Javier";
// let javiersGlassOfWater_isFilled = true;
// let javiersGlassOfWater_maxCapacityOz = 8;

// let obj = {
//     // Key : Value // Pair
//     // Label : data
//     source: "Fridge",
//     type: "Glass",
//     owner: "Javier",
//     isFilled: true,
//     maxCapacityOz: 8,
//     content: "water",
// };
// obj.content = "apple juice";
// obj["content"] = "apple juice";

// obj.owner = "Gregorio";
// obj["owner"] = "Gregorio";
// // print to console "javier owns a glass of water that came from the fridge and is currently filled with 8 oz of water"
// console.log(
//     `${obj.owner} owns a ${obj.type} of ${obj.content} that came from the ${obj.source} and is currently filled with ${obj.maxCapacityOz} oz of ${obj.content}`
// );



let person = {
    name: "Greg",
    currentLocation: "New York City",
    hairColor: "Brown",
    interests: "programming, 3d printing and photography"
}

person.currentLocation = "Los Angeles";

function displayPerson(givenPerson){
    console.log(`${givenPerson.name} has ${givenPerson.hairColor} hair, lives in ${givenPerson.currentLocation} and loves ${givenPerson.interests}`);
}
displayPerson(person);