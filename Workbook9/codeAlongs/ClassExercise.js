class Employee {
    constructor(id, firstName, lastName, jobTitle, payRate){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobTitle = jobTitle;
        this.payRate = payRate;
    }
    getFullName(){
        return this.firstName + " " + this.lastName;
    }
    promote(jobTitle, payRate){
        this.jobTitle = jobTitle;
        this.payRate = payRate;
    }
    getIntro() {
        return "Hi, I'm " + this.getFullName() + " and I'm a " + this.jobTitle;
    }
}

let employee1 = new Employee(1, "Gregorio", "Testo", "Software Engineer", 40);

employee1.promote("Senior Software Engineer", 60);

console.log(employee1.getIntro());

