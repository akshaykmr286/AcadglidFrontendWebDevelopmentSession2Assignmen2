/*
Constructor in a class is of two typoes
1.parameterised
2.Non parameter type
*/

//class declaration started here
class constClass {
    //declaring private properties of class
    private empName:string;
    private empId:number;
    //constructor declaration with parameter
    constructor(empName:string,empId:number) {
        this.empId = empId;
        this.empName = empName;
    }
    //class method with return
    getDetails() {
        return `Employee Name : ${this.empName} and Employee ID : ${this.empId}`;
    }
}

//creating object of class constClass
let emp = new constClass("Akshay",602492);
console.log(emp.getDetails());
document.write(emp.getDetails());

