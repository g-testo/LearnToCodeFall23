let person1 = { name: "Pursalane", age: 11, gender: "Female" };
let person2 = { firstName: "John", lastName: "Smith", username: "", age: 14, gender: "Male" };

let nameDot = person1.name;
let nameBracket = person1["name"];

console.log(nameDot, nameBracket);

for(let key in person2){
    console.log(key);
    console.log(person2[key]);
}