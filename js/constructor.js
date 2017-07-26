/*
Constructor in a class is of two typoes
1.parameterised
2.Non parameter type
*/
//class declaration started here
var constClass = (function () {
    //constructor declaration with parameter
    function constClass(empName, empId) {
        this.empId = empId;
        this.empName = empName;
    }
    //class method with return
    constClass.prototype.getDetails = function () {
        return "Employee Name : " + this.empName + " and Employee ID : " + this.empId;
    };
    return constClass;
}());
//creating object of class constClass
var emp = new constClass("Akshay", 602492);
console.log(emp.getDetails());
document.write(emp.getDetails());
