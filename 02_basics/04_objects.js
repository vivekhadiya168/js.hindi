// singleton
const tinderUser = new Object()  // singleton way to create object

tinderUser.id = "123abc"
tinderUser.name = "jay"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "jay@gmail.com",            // object ni andar pan ghana badha object create kari shakiye
    fullname: {
        userfullname: {
            firstName: "vivek",
            lastName: "hadiya"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstName);   // . kari ne badha object ne access kari shakay. (aapde jetla object access karva em . karine name lakhtu javanu)

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "a",
    4: "b"
}
// const obj3 = {obj1 , obj2}                     // object ni andar object banse 
// const obj3 = Object.assign({}, obj1 , obj2)     // 2 object ne combine karva
const obj3 = {...obj1, ...obj2}                   // 2 object ne combine karva (spread operator)

// console.log(obj3);

const users = [
    {
        id: 1,
        email: "v@gmail.com"
    },
    {
        id: 1,
        email: "v@gmail.com"
    },
]
// console.log(users[1].email)
// console.log(tinderUser);

console.log(Object.keys(tinderUser));       // perticular object ni keys find karva
console.log(Object.values(tinderUser));     // perticular object ni values find karva
console.log(Object.entries(tinderUser));    // entries mate. (ex : ["keys" , "values"] aa rite print tashe )

console.log(tinderUser.hasOwnProperty("isLoggedIn"));   // aa property che ke nai check karva. boolean ma ans aapse.
