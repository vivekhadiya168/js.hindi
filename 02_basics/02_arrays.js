const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["batman", "superman", "flash"]

// marvel_heros.push(dc_heros)            // dc array ne marvel aaray ma push kare che
// console.log(marvel_heros);             // 1st ni andar 2nd array push karaviye to sub array save thay
// console.log(marvel_heros[3][1]);       // [][] thi sub array no element check kari shakiye

// const all_heros = marvel_heros.concat(dc_heros)             // new array declare kari ne concat() use kari ne 2 array ne join kari shakiye  (concant = join)
// console.log(all_heros);

const all_new_heros = [...marvel_heros, ...dc_heros]          // spread operator (commonly use to join arrays)
// console.log(all_new_heros);                                   //  (... means array na element individual thay gya che)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(2)            // flat() no use karine array ni andar array hoy ene ek j array ma describe kari shakay.  () ni andar array ni depth aapvani hoy , infinity pan chale.
// console.log(real_another_array);




// console.log(Array.isArray("vivek"));    // array che ke nai check kare
// console.log(Array.from("vivek"));       // koi pan value ne array ma convert karse
// console.log(Array.from({name: "vivek"}));    // {} ma che etle convert nathi kartu. convert na kare tyare uotput ma khali [] male.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));   // .of() thi different value ne array ma ek sathe store karavi shakiye
