// object literals

// object.create           // constructor method to create object

const MySymbol = Symbol("key1")          // symbol data type declare karyo

const JsUser = {
    name: "vivek",
    "full name": "vivek hadiya",         // JsUser["full name"] thi j access kari shakay. (.full name nai chale)
    age: 20,
    [MySymbol]: "mykey1",               // symbol ne object ma declare aa rite karay. [] ni andar
    location: "surat",
    isLoggedIn: false,
    email: "vivek@gmail.com",
    lastActive: ["monday", "thursday", "sunday"]
}

// console.log(JsUser.email);              // 2 ways to access object
// console.log(JsUser["full name"]);           // " " ma lakhyu because key(email) che e string ni jem track thay
// console.log(JsUser[MySymbol]);           // symbol ne object ni andar aa rite access karay


JsUser.email = "vivek.chatgpt.com"      // object ni andar values change karva
// console.log(JsUser["email"]);

// Object.freeze(JsUser)                      // object ni value freeze karva

JsUser.greeting1 = function(){
    console.log("hello");
    
}

JsUser.greeting2 = function(){
    console.log(`hello ${this.name}`);     // (` use for direct output) (this = current object na reference mate)
}

console.log(JsUser.greeting1());
console.log(JsUser.greeting2());

