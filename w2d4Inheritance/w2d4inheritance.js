/*
Question 1:
➢Create an object student using object literal which has
➢Properties: firstName:String, lastName:String, grades: Array
➢Methods:
➢inputNewGrade(newGrade): push newGrade to grades
➢computeAverageGrade(): return average of grades
➢Create an Array with multiple students which are created using Object.create();
➢Then compute the average grade for all students in the array

*/
let student = {
    firstName: "Default",
    lastName: "Geb",
    grades: [98, 90, 87],
    inputgrade(newgrade) {

        this.grades.push(newgrade);

        return this.grades;
    },
    computeAverageGrade() {
        let sum = 0;
        for (let j = 0; j < this.grades.length; j++) {
            sum += this.grades[j];

        }
        return sum / this.grades.length;
    }
}
console.log(student.inputgrade(99))
console.log(student.computeAverageGrade())

let student1 = Object.create(student)
student1.firstName = "Indiras"
student1.lastName = "Barassa",
    student1.grades = [96, 99, 88];
let student2 = Object.create(student);
student2.firstName = "Ashenafi"
student2.lastName = "Gere";
student2.grades = [90, 99, 98];
console.log(student1.grades);
let student3 = Object.create(student);
student3.firstName = "Barnabas";
student3.lastName = "Berhanu";
student3.grades = [100, 99, 98];
let totalstudents = [student1, student2, student3];
let averagegrade = totalstudents.map((element) => {
    return element.computeAverageGrade();
});
//console.log(averagegrade);

let totalaverage = averagegrade.reduce((accumulator, currentvalue, index, array) => (accumulator + currentvalue/ array.length), 0);
console.log(totalaverage);
// ➢Question 2: Redo the Question 1 using Constructor Function
console.log("-------------------------------------")
let Student = function (firstName, lastName, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = grades;
}
Student.prototype.inputgrade = function (newgrade) {
    this.grades.push(newgrade);
    return this.grades;
}

Student.prototype.computeAverageGrade = function () {
    let sum = 0;
    for (let j = 0; j < this.grades.length; j++) {
        sum += this.grades[j];
    }
    return sum / this.grades.length;

}
let indrias = new Student("Indrias", "Barassa", [100, 99, 89]);
let brooke = new Student("Brooke", "Habte", [89, 91, 88]);
let barni = new Student("Barnabas", "Berhanu", [87, 99, 89]);
console.log(indrias);
console.log(indrias.firstName);
console.log(indrias.inputgrade(55));
console.log(indrias.computeAverageGrade());

const studentFriends = [indrias, brooke, barni];
totolstudentGrade = studentFriends.map((element) => element.computeAverageGrade()).reduce((accumulator, currentvalue, index, array) => (accumulator + currentvalue / array.length), 0);

// Adding a built-in Methods of Array using prototype inheritance
Array.prototype.sort = function () {
    for (let i = 0; i < this.length; i++) {
        if (this[i] > this[i + 1]) {
            let temp = this[i];
            this[i] = this[i + 1];
            this[i + 1] = temp;
            i = -1;
        }
    }
    return this;
    //console.log(sort([2,10,-5,4,-2]));
}
console.log(indrias.grades.sort()); // we can call this Built in method on any Object formed by the construcotr Fucntion Student 