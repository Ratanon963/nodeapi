// const name = 'Ryan';
//name = 'DDD';



// if(true){
//     let name = 'Ryan';
//     //let surround in this scope only 
// }

// let fname = 'Ryan';
// let lname = 'D';
// let age = prompt("Guess Ryan's age.anchor.....");

//oldway
// let result = fname + ' ' + lname + ' is ' + age + ' years old'; 
// alert(result);

//using template string   in ES6 only
// let result = `${fname} ${lname} is ${age}`;
// alert(result);



// function welcome(user = 'Mystery person', message = 'Good day'){
//     alert(`Hello ${user}, ${message}`);
// }
// //welcome();
// welcome('Ryan','Good morning');



// *** Arrow function  

// function gretting(message){
//     return alert(` ${message} everyone !!`);
// }

// let gretting = (message) => alert(` ${message} everyone !!`);   // don't need return key word

// gretting('Good evening');
//----------------------------------

// more then 1 arrgument 
// let createBlog = (title,body) => {
//     if (!title){
//         throw new Error ('A title is required');
//     }

//     if (!body){
//         throw new Error ('A body is required');
//     }

//     return alert(`${title} ${body}`);
// }

// createBlog('Blog' , 'body');


//-----------------------------------------------------
//-----------------------------------------------------

//  ***** "this" keyword refer to the closest contect
// function sayHi(){
// }
// console.log(this);  




// let nepal = {
//     //add property
//     mountains: ['Everest', 'Fish Tail', 'Annapurna'] ,

//     //add method
//     printWithDash: function(){
//         setTimeout(() => console.log(this.mountains.join("-")),3000);
//     }
// };

// nepal.printWithDash();



/// *** Object destructuer in ES 6
// let thingToDo = {
//     morning: "Exercise",
//     afternoon: "Work",
//     evening: "Code",
//     night: ["Sleep" , "Dream"]
// }

// let {morning, afternoon} = thingToDo;
// console.log(morning, '-' , afternoon);


// let uniStudent = student => {
//     let {name, university} = student;
//     console.log(` ${name} from ${university}`);
// };

// let uniStudent = ({name, university}) => {
//     console.log(` ${name} from ${university}`);
// };


// uniStudent({
//     name: 'Ryan',
//     university: 'University of sydney'
// });


/// *** Object array in ES 6

// let[, ,firstMountain] = ['Everest', 'Fish Tail', 'Annapurna'];
// console.log(firstMountain);


/// *** Restructuring ES 6

// var name = 'Everest';
// var height = 8848;
// var output = function (){
//     console.log(`Mt. ${this.name} is ${this.height} meter tall`)
// }

// * New way
// var adventureClibing = {
//     name: 'Everest',
//     height: '8848',
//     output: function (){
//         console.log(`Mt. ${this.name} is ${this.height} meter tall`)
//     }
// };
// adventureClibing.output();



//// *** Spread (...)and rest operators
// var mountains = [ 'Everest' , 'Fish Tail' , 'Annapurna'];
// var mountainsFromJapen = ['Fuji'];

// var allMountains = [...mountains ,...mountainsFromJapen];
// console.log(allMountains);


// var rivers = ['Sunkoshi' , 'Tamakosshi' , 'Saptakoshi'];
// var [First,...rest] = rivers;

// console.log(First);
// console.log(rest);





// function Holiday (destination,days){ 
//     this.destination = destination;
//     this.days = days;
// }

// Holiday.prototype.info = function(){
//     console.log(this.destination + " | " + this.days + 'days');
// }

// var nepal = new Holiday("Nepal",30)
// console.log(nepal.info());


////*** Constructor class */
//Supper class
class Holiday{
    constructor(destination, days){
        this.destination = destination;
        this.days = days;
    }

    info(){
        console.log(`${this.destination} will take ${this.days} days.`);
    }
}
const trip = new Holiday('Kathmadu,Nepal', 30);
console.log(trip.info());


////*** Sub class */

class Expedition extends Holiday{
    constructor(destination,days,gear){
        super(destination,days);
        this.gear = gear;
    }
    info(){
        super.info();
        console.log(`Bring your ${this.gear.join(" and your")}`);
    }
}

const tripWithGear = new Expedition("Everest",49,["Sunglasses","Flages","Camera"]);
tripWithGear.info();

