// let + const

const player = 'brad'; // const = constant - can not be changed - use const if a variable isn't being changed
let xp = 200;
let playerLVL = false; // use let if something is being changed

if (xp>100){
   let playerLVL = true;
   console.log(playerLVL); //will display true as enclosed the if statement defining a new let variable
}

console.log(playerLVL); // will display false as using the original let on line 5

const playerProfile = {
   player: "Chad",
   xp: 140,
   playerLVL: false
}

playerProfile = 5; // can not change the object assignee as it's a constant

playerProfile.playerLVL = true; // can change specific properties in the object 


// Destructuring

const playerProfile = {
   player: "Chad",
   xp: 140,
   playerLVL: false
}

const player = playerProfile.player;
const xp = playerProfile.xp;
let playerLVL = playerProfile.playerLVL;
// longwinded way of assigning variables from object

const { player, xp } = playerProfile;
let { playerLVL } = playerProfile;
// easier and shorter way to assign variables

const name = "John wick"

const obj = {
   [name]: 'Doug',
   [1 + 2]: 'hello'
   // new way of declaring properties, variables can be used
}

const a = "Tom";
const b = true;
const c = {};

const newObj = { 
   a,
   b,
   c 
   // new way if property and value are the same, removes declaration of property and value
}


// Template Strings
const person = "Paul";
const age = 12;
const food = "Cheese";

const goodbye = "Goodbye " + person + " hope you enjoyed your stay." //Old method for strings

const bestGoodbye = `Hello ${person}, aged ${age}, hope you enjoyed your stay. Enjoy your ${food}.` //new method for template strings. Allows dynamically added variables 

//default arguements

function farewell(person='Dan',age=20,food='egg'){
   return `Hello ${person}, aged ${age}, hope you enjoyed your stay. Enjoy your ${food}.`
} //calls the values from the default arguements in the function


// Symbol

let sym1 = Symbol();
let sym2 = Symbol('Cheese');
let sym3 = Symbol('Cheese');

sym2 == sym3 // will return false as they're independent


//arrow functions

function add(x, y){
   return x + y;
} 

const add = (x, y) => x + y; //new method so you don't constantly write function
const subtract = (x, y) => x-y;
const multiply = (x, y) => x*y;
const division = (x, y) => x/y;