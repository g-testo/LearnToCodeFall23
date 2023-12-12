class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(){
        return this.firstName + " " + this.lastName;
    }
}

class Employee extends Person{

    constructor(id, firstName, lastName, jobTitle, payRate){
        super(firstName, lastName);
        this.id = id;
        this.jobTitle = jobTitle;
        this.payRate = payRate;
    }

    getGrossPay(hoursWorked){
        return hoursWorked * this.payRate;
    }
}

let employee1 = new Employee(1, "Aysu", "Rodgers", "Software Engineer", 100);

let grossPay1 = employee1.getGrossPay(40);

console.log(grossPay1);