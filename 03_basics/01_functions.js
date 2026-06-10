function sayMyName(){
    console.log("v");
    console.log("i");
    console.log("v");
    console.log("e");
    console.log("k")
}

// sayMyName()

// function addTwoNumbers(num1,num2){
//     console.log(num1 + num2);
// }
// addTwoNumbers(3,4)

// const result = addTwoNumbers(3,5)
// console.log("result: ",result);

function addTwoNumbers(num1,num2){
    // let result = num1 + num2
    // return result
    return num1 + num2
}
const results = addTwoNumbers(3,5)
// console.log(results);


function loginUserMsg (username = "sam"){   // means koi input nai hoy to sam aavi jase 
    if (!username){                               // !username means false value like undefined. means false value aavse to if condition lagu padse.
        console.log("please enter an username:");  // to return kai nai thay
        return
    }
    return `${username} just logged in`
}
loginUserMsg("vivek")                      // aa khali return j thase. aapde return thayu hoy ene call to karavvu pade ne
// console.log(loginUserMsg("vivek"));            // function ne call karavva

//++++++++++++++ example for my self+++++++++++++++++
function StudentMarks(name,marks,subject){
    return `${name} got ${marks} marks in ${subject}`
}
// console.log(StudentMarks("vivek",50,"maths"));
//++++++++++++++++++++++++++++++++++++++++++++++++++++

function calculateCardPrice(...num1){          // ... means rest operator. aapde game etla lement add kari shakiye
    return num1

}
// console.log(calculateCardPrice(2,3,4,5,6,7,8));

//++++++++++++++++++ Object in function+++++++++++++++++
 const user = {                            // object in function 
    username: "vivek",
    price: "199"
 }

  function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
  }
//   handleObject(user)

// handleObject({                         // function ni andar direct object ni key and value muki shakay
//     username: "vivek",
//     price: "199"
// })

const myNewArr = [200, 400, 600]          // array in function

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArr));
console.log(returnSecondValue([200,300,400]));    // aa rite direct function ni andar pan karavi shakay. means array ni jagya e direct array ni value mukine pan kari shakay