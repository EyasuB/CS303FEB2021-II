//➢ Question 1: Fix a function that loses “this” (do with bind, wrapper, call, and apply)
function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
}
let user = {
    name: 'John',
    loginOk() {
        alert(`${this.name} logged in`);
    },
    loginFail() {
        alert(`${this.name} failed to log in`);
    },
};
askPassword(user.loginOk, user.loginFail);
//using bind 
//askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
//using call
askPassword.call(() => user.loginOk.call(user), user.loginFail.call(user))

//What should we pass askPassword in the code below, so that it calls user.login(true) as ok and user.login(false) as fail?
function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
}

let user = {
    name: 'John',

    login(result) {
        alert(this.name + (result ? ' logged in' : ' failed to log in'));
    }
};

//askPassword(?, ?); // ?
// Solution 
//If we use bind method
askPassword(user.login.bind(user, true), user.login.bind(user, false));

// we can also use wrapper function 
askPassword(() => user.login(true), () => user.login(false));

/*
//Question 3: Fix the code below using bind
let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach(function (student) {
            console.log(this.title + ": " + student);
        });
    }
};
group.showList()

*/
//using arrow function 
let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach((student)=> {
            console.log(this.title + ": " + student);
        });
    }
};
group.showList()
//Using bind
let group2 = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach(function(student) {
            console.log(this.title + ": " + student);
        }.bind(this));
    }
};
group2.showList()
