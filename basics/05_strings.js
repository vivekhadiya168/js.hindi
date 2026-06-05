// const name = "vivek"
// const repoCount = 50

// string ne define karvani methods : 

// console.log(name + repoCount + "value");
// console.log(`hello my  name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('vivek-vk')


// console.log(gameName[0]);               // 0 position par kayo character che e janva
// console.log(gameName.__proto__);


// console.log(gameName.length);            // length janva
// console.log(gameName.toUpperCase());     // badhu uppercase ma aavi jase
// console.log(gameName[2]);                //  2nd position par kayo character che e janva
// console.log(gameName.charAt(2));         //  2nd position par kayo character che e janva
// console.log(gameName.indexOf("i"));      // i kay position par che e janva


const newString = gameName.substring(0, 4)   // letters range find . not working in negative
console.log(newString);

const anotherString = gameName.slice(-8, 3)  // letters range find . also work in negative
console.log(anotherString);

const newStringOne = "    vivek    "
console.log(newStringOne);
console.log(newStringOne.trim());        // unnecessary space remove karva


const url = "https://vivek.com/vivek%20hadiya"     // string replace karva mate
console.log(url.replace("%20", "-"))

console.log(url.includes("vivek"));            // word available che ke nain e janva

console.log(gameName.split("-"));            //aapda word ne split karva mate. basis on - (aapde game te basis par split karavi shakiye)

