
// City Welcomerfunction hello() {
// let city = "Karachi";
// let usercity = prompt("Enter Your City Name.");
// if (usercity = cities[i]) {
//     alert("Welcome to the city of lights");
// }
// else {
//     alert("Welcome");
// }

/*
Greater
let gender = ["Male", "Female"];
let userGender = prompt("Enter Your Gender Please.");
let flag = false;
for (let i = 0; i > gender.length; ++i) {
    if (userGender === gender[0]) {
        alert("Good Morning Sir");
        flag === true;
    }
    else if(userGender === gender[1]){
        alert("Good Morning Ma'am");
        flag === true;
    }
}
if(flag === false){
    alert("Invalid input");
 }*/

// Traffic Light 
// var trafficlight = ["Green", "Yellow", "Red"];
// var userinput = prompt("Enter Color of traffic Light");
// let input = false;
// for (let i = 0; i < trafficlight.length; ++i) {

//     if (userinput.toLowerCase() === trafficlight[i].toLocaleLowerCase()) {
//         input = true;
//         if (userinput.toLowerCase() === trafficlight[0].toLowerCase()) {
//             alert("Move Now");
//             break;
//         }
//         else if (userinput.toLowerCase() === trafficlight[1].toLowerCase()) {
//             alert("Ready to move");
//             break;
//         }
//         else if (userinput.toLowerCase() === trafficlight[2].toLowerCase()) {
//             alert("Must Stop");
//         }

//     }
// }
// if(input === false) {
//     alert("Invalid input");
// }

// Fuel test 
// let userFuel = +prompt("Enter current car fuel value.");
// if (userFuel <= 0.25) {
//     alert("Please REFILL FUEL of your Car.");
// }
// else if (userFuel > 0.25) {
//     alert("You are good to go.");
// }
// else {
//     alert("Invalid input");
// }

// var a = 4;
// if(++a === 5){
//     alert("Given condition is True for a.");
// }

// let b = 82;
// if(b++ === 83){
//     alert("Given condition is True for b.");
// }

// let c = 12;
// if(c++ === 13){
//     alert("Condition 1 True for c.");
// }
// if(c === 13){
//     alert("condition 2 is true.");
// }

// if(++c < 14){
//     alert("condition 3 is true.");
// }
// if( c === 14){
//     alert("Condition 4 is true.");
//}

// let materialCost = 20000;
// let laborCost = 2000;
// let totalCost = materialCost + laborCost;
// if( totalCost === materialCost + laborCost ){
//     alert("The Cost is equal");
// }

//Checkers how JS Responds.
// if(true){
//     alert("TRue");
// }
// if(false){
//     alert("False");
// }

// What the>>>
// if ("car" < "cat") {
//     alert("CAR is Smaller that cat");
// }

// Report Card
// alert(`Enter Your Marks of the following.
//        Phy
//        Math
//        Chem`);
// let phyMarks = +prompt("Enter Phy Marks.");
// let totalPhy = +prompt("Enter Phy total Marks.");
// let mathMarks = +prompt("Enter Math Marks.");
// let totalMath = +prompt("Enter  Maths total Marks.");
// let chemMarks = +prompt("Enter Chem Marks.");
// let totalChem = +prompt("Enter Chem total Marks.");

// if (typeof(phyMarks) === "number" && typeof(mathMarks) === 'number' && typeof(chemMarks) === 'number'){
//     let PhyPercent = (phyMarks / totalPhy)*100 ;
//     console.log("Your Math Percentage ="+ PhyPercent+"%"); 
//     let MathPercent = (mathMarks / totalMath)*100 ;
//     console.log("Your Phy Percentage ="+ MathPercent+"%");
//     let ChemPercent = (chemMarks / totalChem)*100 ;
//     console.log("Your Chem Percentage ="+ ChemPercent+"%");
//     console.log("Your Overall Percentage ="+ Math.ceil(((phyMarks +mathMarks+  chemMarks)/(totalPhy+ totalMath + totalChem))*100)+"%");
// }
// else(alert("Invalid Input"));

//Guessing Game
// let num = Math.floor(Math.random()*2);
// let userNum = +prompt("Guess a num between 1 - 10");
//     if(userNum === num){
//         alert("You were right the num is "+ num);
//     }
//     else if(++userNum === num || --userNum === num){
//         alert("You were close the correct ans is "+ num);
//     }
//     else{
//         alert("The correct ans is "+num)
//     }

//DIV By 3
// let userIn = +prompt("Enter any num.");
// if(userIn % 3 === 0){
//  alert("The entered value is divisible by three.");
// }
// else{
//  alert("The entered value isn't divisible by three.");
// }

//even or odd
// let user = +prompt("Enter a number");
// if(user % 2 === 0){
//   alert("The number is even");
// }
// else{
//     alert("The entered num is odd");
// }

//Temp input 
// let userin = +prompt("Enter your weather in Degree Celcious");
// if (userin >= -89.222 || userin <= 56.666 ) {
//     if (userin >= 40) {
//         alert("It's too hot outside.");
//     }
//     else if (userin >= 30) {
//         alert("The weather today is Normal.");
//     }
//     else if (userin >= 20) {
//         alert("Today's Weather is cool.");
//     }
//     else {
//         alert("OMG! Today's weather is so cool.");
//     }
// }
// else {
//     alert("Where do you live!!");
// }

// alert(`I will calculate for you
// Enter 1st num then second num then 
// the opperation you want to perform.`);

// Calculator
// let firstNum = +prompt("Enter 1st Num ");
// let secondNum = +prompt("Enter 2nd Num");
// var operation = prompt("Enter Opperation");

// if (typeof(firstNum) && typeof(secondNum) === "number") {
//     if(operation === "+"){
//      alert(firstNum + secondNum);
//     }
//     else if(operation === "-"){
//      alert(firstNum - secondNum);
//     }
//     else if(operation === "/"){
//     alert(firstNum /secondNum);
//     }
//     else if(operation === "*"){
//     alert(firstNum *secondNum);
//     }
//     else{
//         alert("Invalid input.");
//     }
// }

// var array = ["jan", "Feb", "Mar", "April", "May", "June"];
// console.log(array.lastIndexOf("May"));

// var func = run();
// var date = "Hello";

// function run(){
//   let date2 = "Q";
//   console.log(date);
//   return ;
// }

// var func = run();
// console.log(date2);

// let message = 'Hello1';
// function Greeting() { 
//  let audience = "World1";
//  let message = 'Hello';
//  console.log(audience  + message);
// }
//  function Greeting2() { 
//     let audience = 'World';
//     console.log(message + ' '+ audience);
// }
// console.log(audience); // Block Scope
