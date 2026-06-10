//======================== Scope ===================
// var c = 300
let a = 300
if(true){                            // {} ni andar che e block or local scope ane bahar hoy e global scope
    let a = 10
    const b = 20
    // console.log("inner:" , a);
    

}

// console.log(a);
// console.log(b);
// var use kariye to e local scope ma use kariye to pan function bahar pan call thay jay.means var entire function ma visible thase. const and let ma e problem na aave

//============== Nested scope ========================
function one(){
    const username = "vivek"

    function two(){
        const website="youtube"
        console.log(username);
        
    }
    // console.log(website);

    // two()
    
}
// one()

if (true) {
    const username = "vivek"
    if (username === "vivek") {
        const website = " youtube"
        // console.log(username + website);
        
    }
    // console.log(website);   
}
// console.log(username);

//+++++++++++++++++++ Interesting ++++++++++++++++++

console.log(addOne(5));           // function declare karya pela pan lakhi shakay
function addOne(num){              // function aa rite pan bane (1st)
    return num + 1
    
}

const addTwo = function(num){      // function aa rite pan bane (2nd) (variable ma hold kari ne)
    return num + 2                 // aama function declare karya pela addTwo ne value access nai karva dey because aapde aaya variable ma hold karyo che function ne
}
addTwo(5)

