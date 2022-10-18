let name1 = "Taha";
if (name1 === "Taha") {
    console.log(true)
}
let name2 = "Ali";
if (name2 !== "Taha") {
    console.log(false)
}

let car = "CIVIC";
if (car === "CIVIC") {
    console.log(car.toLowerCase())
}

if (5 === 5) {
    console.log(true);
}

if (5 !== 3) {
    console.log(true);
}

if (5 > 4) {
    console.log(true);
}

if (4 > 5) {
    console.log(false);
}

if (0 <= 5) {
    console.log(true);
}

if (5 >= 0) {
    console.log(true);
}

let firstName = "Taha";
let secondName = "Faisal";
if (firstName = "Taha" && secondName === "Faisal") {
    console.log(true);
}

let num1 = 2;
let num2 = 3;
if (num1 === 2 || num2 === 1) {
    console.log(true);
}

const arr1 = ['a', 'b', 'c', 'd'];
if (arr1.includes('a')) {
    console.log("Present");
}
if (!arr1.includes('e')) {
    console.log("Absent");
}