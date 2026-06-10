//Immediately Invoked Function Expression (IIFE)  
// global scope na pollution thi problem thay che ghani var , to e pollution hatavva mate iifi no use karyo
// function immediately execute karavva


(function chai(){                          // simple defination ()(). first parenthes code lakhva and 2nd for execution.
 // this is named iifi
    console.log(`db connected`);
    
})();                                   // ; nay lakhiye to 2nd function run nai thai. first code end kariye to j 2nd run thase

( (name) => {                                 // iife in arrow function 
 // simple iife
    console.log(`db connected two ${name}`);
    
})("vivek")
