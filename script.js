alert("HELLO WORLD WELCOME TO OUR JAVASCRIPT CLASS");
console.log("any message");
const lastname = "solomon";
let firstname = "ahmod";
let age = 20;
let isstudent = true;
let fruits = ("bananna", "apple", "orange", "mango");
firstname = "Ray";
console.log(firstname);
console.log(lastname);
console.log(age);
console.log(fruits);
console.log("My name is" + firstname);
console.log(firstname + "20 years old");
console.log(firstname + "is a fine young man");
console.log("The ladies love" + firstname);
let userName = prompt("what is your name?");
// console.log("Welcome "+ username);
console.log(`welcome ${userName}`);
let Hauthub = {
    web_development: {
        students: ["ahmod", "solomon", "rahmon"]
    },
    data_analytics: {
        students: [""]
    }
}
let solomonage = 16
let rahmonage = 14
solomonage = solomonage + 2;
console.log("solomonage is:", solomonage);
const ageDifference = solomonage - rahmonage;
console.log("ageDifference is", ageDifference);
const ageMultiplication = solomonage * rahmonage;
console.log("ageMultiplication is", ageMultiplication);
const ageDivision = solomonage / rahmonage;
console.log("ageDivision is", ageDivision);
const ageModules = solomonage % rahmonage;
console.log("ageModules is", ageModules);
const ageExponentiation = solomonage ** rahmonage;
console.log("ageExponentiation is", ageExponentiation);
const totalcost = 2 + 7;
console.log("totalcost is", totalcost)
const isEqual = solomonage >= rahmonage
console.log("is solomonage greater than or equal to rahmonage?", isEqual);
const ageLimit = 18;
const presentAge = prompt("How old are you?");

if (presentAge < ageLimit) {
    console.log("you are not qualified");
} else if (presentAge == ageLimit) {
    console.log("you are qualified yami");
} else if (presentAge > ageLimit) {
    console.log("welcome old man");
}
let score = Number(prompt("Enter your score:"));

switch (true) {
    case score >= 90:
        console.log("Grade: A");
        break;

    case score >= 80:
        console.log("Grade: B");
        break;

    case score >= 70:
        console.log("Grade: C");
        break;

    case score >= 60:
        console.log("Grade: D");
        break;

    default:
        console.log("Grade: F");
}

for (let i = 1; i <= 10; i++) {
    console.log(`2 × ${i} = ${2 * i}`);
}
// Menu bar
const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');
const loginBtn = document.querySelector('.login-btn');
const signupBtn = document.querySelector('.signup-btn');

if (menuButton) {
    menuButton.addEventListener('click', function () {
        navLinks.classList.toggle('active');
        loginBtn.classList.toggle('active');
        signupBtn.classList.toggle('active');
    });
}

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function () {
        navLinks.classList.remove('active');
        loginBtn.classList.remove('active');
        signupBtn.classList.remove('active');
    });
});