// dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());             // perfact date aapse
// console.log(myDate.toTimeString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());           // perfact date and time aapse
// console.log(myDate.toLocaleTimeString());      // perfact time aapse
// console.log(myDate.toUTCString());
// console.log(typeof myDate);                    // object

// let myCreatedDate = new Date(2023,0,23)        // simple format print karavva
// let myCreatedDate = new Date(2023,0,23,5,3)    // date ni sathe time print karavva
let myCreatedDate = new Date("01-14-2023")        // dd-mm-yy format ma print karavva
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()                   // milisecond count karva

// console.log(myTimeStamp);                   // milisecond count karva
// console.log(myCreatedDate.getTime());       // current time in milisecond

// console.log(Math.round(Date.now()/1000));        // milisecond to second ma convert karyu , point ma ans na aave e mate round off

let newDate = new Date()
// console.log(newDate.getMonth() + 1);           // month janva mate
// console.log(newDate.getDay());             // day janva mate

// `${newDate.getDay()}` and time 

console.log(newDate.toLocaleString("default",{
    weekday: "long"                        
    }));                                   // localestring ni andar pan input aapi shakiye ex: find weekday (in short,long,narrow)







