// const user = {
//     username: "vivek",
//     price: 999,

//     welcomeMsg: function(){
//         console.log(`${this.username}, welcome to website`);
//         console.log(this);
        
        
//     }
// }

// user.welcomeMsg()
// user.username = "sam"
// user.welcomeMsg()             // have output ma same aavse

// console.log(this);           // function ni bahar this ne print karshu to output empty {} malse because global context che j nai only node ni andar j aam thase . windows ni andar console ma alag output malse


// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
//                                // this.username call karavshu to undefined malse
// }
// chai()   // function ni andar this call karavshu etle kaik output male j

// const chai = function(){
//     let username = "vivek"
//     console.log(this.username); // this.username call karavshu to undefined malse khali this karavshu to kaik output malse
// }
// chai()

// const chai = () => {                       // arrow function 
//     let username = "vivek"
//     console.log(this.username);      // username call karashu etle undefined malse. khali this karavshu to empty {} malse
// }

// chai()

//+++++++++++++++++++ Arrow function +++++++++++++++++
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3,4))

// const addTwo = (num1, num2) => (num1 + num2)          // implicit return : {} and return lakhvani jarur na pade.
const addTwo = (num1, num2) => ({username: "vivek"})     // arrow function loop ma use thay
console.log(addTwo(3,4))                              // explicit return : means return lakhvu pade