// let student1 = {
//     name: "Rose",
//     isEnrolled: true,
//     location: {
//         state: "GA",
//         city: "Atlanta",
//     },
// };

// let student2 = {
//     name: "Amaris",
//     isEnrolled: true,
//     location: "Tampa, FL",
// };

class Student {
    constructor(id, name, isEnrolled, location){
        // Set the given data as properties for the new instance
        this.id = id;
        this.name = name;
        this.isEnrolled = isEnrolled;
        this.location = location;
    }
}
// Creating instances from class Student
let student1 = new Student(1, "Rose", true, "Atlanta, GA");
let student2 = new Student(2, "Amaris", true, "Tampa, FL");
console.log(student1.name);
console.log(student2.name);
