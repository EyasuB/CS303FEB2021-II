
'use strict';
/*
Use array methods: filter, map, reduce, etc to implement below:






*/

//Question 1: For a given array, sum all the elements which are greater than 20.

//[1, 50, 40, 3, 10] => Print result: 90

let arr = [1, 50, 40, 3, 10];
const filteredred = arr.filter((item) => item > 20).reduce((a, b) => {
    return a + b
}, 0);
console.log(filteredred);
//Question 2: For a given String array, return a new array which contains all string, length is greater than and equals to 5, and contains letter ‘a’.
let stringArray = ['abcdefgy', 'cd'];
const filtered = stringArray.filter((item) => {
    return item.length >= 5 && item.includes('a');
})
console.log(filtered);

//•Question 3:
//•Create a constructor function Employee with properties: firstName, lastName, birthdate: Date type, methods: getFullName(), getAge()
const Employee = function (firstName,lastName,birthdate) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthdate = birthdate;
    this.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    this.getAge=function(){
        let currentyear = new Date().getFullYear();
        let borndate = new Date(this.birthdate).getFullYear();
        return currentyear - borndate;

    } 
}
//Create an array with a few Employee objects with different firstName, lastName, birthdate.
const Bisrat = new Employee("Bisrat", "Gebrehiwot", "1992/09/20");
const Indrias = new Employee("Indrias", "Belachew", "1992/09/24");
const Simon = new Employee("Simon", "Kiflay", "1985/07/16");
const Abigael = new Employee("Abigu", "Bisrat", "2017/09/15");
console.log(Bisrat);

//Find if there is any employee which age is greater than 20
let employee = [Bisrat, Indrias, Simon, Abigael];
console.log(employee);
let employeeBelow20 = employee.filter((item) => {
    return item.getAge() > 20;
});
//console.log(employeeBelow20);
//Return a String array which contains the full name of employee and born after 2000
const employeeAfter2000 = employee.filter((item) => new Date(item.birthdate).getFullYear()>2000).map((item)=>item.getFullName())
//console.log(employeeAfter2000);

