// Operator 
// Aritmetic operator

console.log("Arithmetic Operator")

// Addition Operator
console.log("Addition of 2 + 4 is:",2 + 4) // 6

// Subtraction Operator
console.log("Subtraction of 2 - 5 is:",2 - 5) // -3

// MUktiplication Operator
console.log("Multiplication of 2 * 5 is:",2 * 5) // 10

// division Operator
console.log("Division of 5 / 2 is:",5 / 2) // 2.5

// Modulo operator
console.log("Modulo of 5 % 2 is:", 5 % 2) // 1

// Power of any number to the any number
console.log("Square of 5 is:",5 ** 2) // 25
console.log("Cube of 5 is:",5 ** 3) // 125







// Assignment Operator

console.log("Assignment Operator")


let x = 20
let y = 10



// Addition
x = 20
x += y
console.log("Addition of x + y is:", x) // 30

// Subtraction
x = 20
x -= y
console.log("Subtraction of x - y is:", x) // 10

// Multiplication
x = 20
x *= y
console.log("Multiplication of x * y is:", x) // 200

// Division
x = 20
x /= y
console.log("Division of x / y is:", x) // 2

// Modulo
x = 20
x %= y
console.log("Remainder of x % y is:", x) // 0


// Comparison Operator

console.log("Comparison operator")

let c = 20
let d = 10

// Greater than
console.log(c > d) // true

// Less than
console.log(c < d) // false

// Greater than equal to
console.log(c >= d) // true

// Less than equal to
console.log(c <= d) // false

let q = 20
let z = "20"
// Equal to(==)
console.log( q == z) // true (whenever we compare string with number js explixitly convert string into number and when we use == operator it will compare that value)

// Equal to(===)
console.log(q === y) // false (but this qual to operator first compare there type than compare the value)


// Conversion

// string --> num
let num = "122ac"
let conv = Number(num)

console.log(conv)
console.log(typeof num)
console.log(typeof conv)

// num --> string

let n = 121
let str  = String(n)

console.log(str)
console.log(typeof str)


let one = 0.1
let two = 0.2
let three = Number((one + two).toFixed(1))

console.log(three == 0.3)


