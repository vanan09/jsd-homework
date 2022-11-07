//Age calculator

const currYear = new Date().getFullYear();
let birthDay = 1993;

let a = currYear - birthDay;
let b = birthDay - currYear;
console.log("They are either "+ a + " or " + b);

//Lifetime supply Calculator

// let currAge = prompt("Please enter your age");
// let maxAge = prompt("Please enter maximum age");
// let estAmt = prompt("Please enter estimate amount");

// if(currAge >= maxAge){
//     console.log("Please enter maximum age more than current age.");
// }else{
//     calBal = (maxAge - currAge) * estAmt;
//     console.log("You will need " + calBal + " to last you until the ripe old age of "+ maxAge);
// }

// The Geometrizer

let radius = 4;
console.log("The circumference is " + 2 *  Math.PI * radius);
console.log("The are is " + radius * radius *Math.PI)


//The Temperature Converter

let temperatureCel = 30;
let fahrenheit = temperatureCel * 9 / 5 +32;
console.log(temperatureCel + "°C is " + fahrenheit+"°F");

let CelLatest = (fahrenheit - 32) * 5 /9;
console.log(fahrenheit + "°F is " + CelLatest+"°C");    

//Conditional

//The World Translator
let eng = "Hello World";
let french = "Bonjour le monde";
let malay = "Hai dunia";
let language = "";

if(language === "English"){
    console.log(eng);
}else if(language === "French"){
    console.log(french);
}else if(language === "Malay"){
    console.log(malay);
}else{
    console.log("No languange")
}

//The Grade Assigner

let result = 80;
let score;

if(result >= 80){
    score = "A";
}else if (result >= 70) {
    score = "B";
}else if(result >= 60){
    score = "C";
}else if (result >= 50){
    score = "D";
}else{
    score = "F";
}


//Air Conditioning
let acFunc = true;
const desireTemp = 20;
let currTemp = 30;

if(acFunc && currTemp > desireTemp){
    console.log("Turn on the A/C Please");
}else if(!acFunc && currTemp < desireTemp){
    console.log("Fix the A/C whenever you have the chance... It's cool..");
}else{
    console.log("Fix the A/C now! It's hot!");
}


//You and Your Government
let age = 29;
let voteMsg = "You can vote";
let senateMsg = "run for the Senate!";
let govMsg = "hold any place in government"

if(age >= 35){
    console.log(voteMsg.concat(" AND ", govMsg));
}else if(age >= 25){
    console.log(voteMsg.concat(" AND ", senateMsg));
}else if(age >= 18){
    console.log(voteMsg);
}else{
    console.log("You can't vote yet");
}

//Golf


//Serge Says
let userAsk = prompt("Ask a question");

if(userAsk === "" || userAsk ===null){
    console.log("Fine. Be that way!");
}else if(userAsk.includes('?')){
    console.log("Sure");
}else if (userAsk.toUpperCase() === userAsk){
    console.log("Woah, chill out!");
}else{
    console.log("Whatever");
}



//Loops

//evn/odd

for (let i = 0; i <=20; i++){
    if(i % 2 == 0){
        console.log( i + " is even.");
    }else{
        console.log(i + " is odd.")
    }
}

//Multiplication Table
for(let i = 1; i <=12; i++){
    console.log(i + " * 9 = " + i*9);
}

// The Grade Assigner

for(let i = 60; i <= 100; i++){
    console.log("For " + i + ", you got a " + score);
}

