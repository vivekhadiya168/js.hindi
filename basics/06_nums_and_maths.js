const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);    // pela string ma convert karyu. so aapde strings ni methods use kari shakiye pali length find kayri
// console.log(balance.toFixed(2));          //  fixed digit j show kare like 12.1234 che to 12.12 j show karse

const otherNumber = 23.8966
// console.log(otherNumber.toPrecision(3));   // value precise kare , aapde jetli joye etli output = 23.9

const hundreds = 1000000
// console.log(hundreds.toLocaleString("en-IN"));   // count in indian standard

//===================maths=======================

// console.log(Math);
// console.log(Math.abs(-4));       // value positive karva
// console.log(Math.round(4.3));    // round off karva
// console.log(Math.ceil(4.2));     // round off kare top vale sathe means output is 5
// console.log(Math.floor(4.3));    // round off kare bottom value sathe means output is 4
// console.log(Math.sqrt(25));      // square root
// console.log(Math.pow(4, 3));     // power ex : 4^3
// console.log(Math.min(1,2,3,4,)); // minimun value aape
// console.log(Math.max(1,2,3,4,)); // max value aape

// console.log(Math.random());       // random value aape ane 0 to 1 vachhe aape
// console.log((Math.random()*10)+1);  // 1 to 10 vachhe value aapse. 0 na male ena mate +1 karyu

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1))+min);

 