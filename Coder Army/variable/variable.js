/*
let name = "Rishu"

console.log(name)

let age  = 28

console.log("Age is", age)//Curently age will print as 28

//Now i'm updating the value of age
age = 20

console.log("Updated age is :", age)

const acc = 747941

console.log("Account no is :", acc)// acc = 747941

*/

/*

// Trying to update

acc = 9771
console.log("Account no is :", acc)// it will throw error because once a variable is declared in const will not updated

*/


/*
var value = 18
console.log("value is", value)//here we decalre variable using var with name value

// again we are able to deaclare value with same name variable which is an major drawback
var value = 20

*/


// ----------> Data Types

/*
// Primitive Data Types
    There are 7 primitive data types
        number
        string
        boolean
        undefined
        null
        bigint
        symbol
*/


// Number
let num = 14
// console.log(num)

let float = 2.56
console.log(num,float)// print 14, 2.56



// string
let s = "Let's do it"

console.log(s)// Print Let's do it

// boolean

let college = false;
let skill = true;

console.log(skill , college)// Print true, false


// undefined
let user;

console.log(user)// Undefiend cz it is not declared 


// Null

let value = null;

console.log(value)


// Bigint

let V = 246325423562859618946278492365029572n

console.log(V)

// Symbol

const id1 = Symbol("Id");
console.log(id1);


/*

// Non Primitive Data Types
    array
    object
    function
*/

// Array
let arr = [12 , 13 , 83 , 34, 18 , "Rishu" , true]

console.log(arr)


// Object

let person = {
    name:"Rishu",
    age:28,
    gender:"Male"
}

console.log(person)
console.log(typeof person)


// Function

function add(){
    console.log("This function just print")
}

add()
console.log(typeof add)

// we can store function in any variable in java script

let d = function addd(){
    console.log(2 + 5)

}
d()
console.log(typeof d)





// Primitive data type is immutable

let a = 10;
let b = a;

b = 20;
console.log(a,b);

let str = "Rohit";
str = "Mohan";

console.log(str);


// Non primitive data type mutable

let arrr = [10,20,30,40];

arrr.push(90);
arrr[0] = 70;
console.log(arrr);

let obj ={
    name:"Mohan",
    age:20
}

let obj2 = obj;

obj2.name = "Rohan";

console.log(obj);