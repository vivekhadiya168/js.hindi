// Primitive 

// 7 types : string, number, boolean, null, undefined, symbol, BigInt

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false   // boolean
// const Temp = null          // null (empty)
// let userEmail;             // undefined

// const bigNumber = 1234567n    // BigInt

// const id = Symbol('123')
// const anotherId = Symbol('123') // symbol ni andar same value hoy pan unique name hoy to chale ex : id and anotherId

// console.log(id);
// console.log(id === anotherId); // both are not same



// reference(non-primitive)

// Arrays, Objects, Functions

// const heros = ["shaktiman", "nagraj", "doga"]     // arrays

// {
//     name: "hitesh",
//     age: 22,                // Objects. >> {} bracket ma lakhay
// }


// function(){}           // function ne aa rite lakay 

// const myFunction = function(){
//     console.log("hello world");
    
// }                                          // variable ma store karyu

// non-primitive no data type object j aave.

// ======================================================
// ============ Memory===============

// Stack (primitive ), Heap(non- Primitive)

let myYoutubeName = "vivek.com"

let anotherName = myYoutubeName
anotherName = "vhadiya"

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email: "vivek@gmail.com",
    upi: "vivek@ybl"
}

let userTwo = userOne

userTwo.email = "v@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
