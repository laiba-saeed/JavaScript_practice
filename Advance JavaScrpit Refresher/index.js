// Spread Operator
var people = ["Mohaib", "Mushaf", "Talal"];

var residents = ["Waleed", ...people];

// console.log(residents);

var person = {
    name: "Laiba Saeed",
    age: 21
}

var personDetails = {
    // name: person.name,
    // age: person.age,
    ...person,
    salary: "50000"
}

// console.log(personDetails);

// Destructuring

var body = {
    name: "Hajra",
    email: "hajra@gmail.com",
    phoneNumber: "098765422"
}

// var { name } = body;
// var { email } = body;
// var { phoneNumber } = body;
var {name, email, phoneNumber} = body;
// console.log(name, email, phoneNumber);

var students = ["Mushaf", "Talal"];

// var firstStudent = students[0];
// var firstStudent = students.slice(0, 1);
var [firstStudent, secondStudent] = students;
// console.log(firstStudent);
// console.log(secondStudent);

// Promises
var age = 40;
const myPromise = new Promise(function(resolve, reject){
    if(age > 18) {
        resolve("Promise is successful")
    } else {
        reject("Promise is Rejected")
    }
});

myPromise.then(data => {
    console.log("I am inside then", data)
}).catch(err => {
    console.log("err", err)
})

async function promiseCheck() {
    try {
        const promiseResolved = await myPromise;
        console.log("try", promiseResolved);
        throw {};
    } catch (err) {
        console.log("catch", err);
    }
    
}
promiseCheck()

console.log(myPromise);

module.exports = "JavaScript file";