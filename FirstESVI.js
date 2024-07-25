// ++++++++++++++++++++++++++++++++++++++++Here we will try to see some ES^6 Js syntax  ....+++++++++++++++++++++++++++++++++++


//fat arrow function-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-

//format 1
let calStrr = () => {
    console.log("Hello Es6");
}

//fomat 2
let calStr = ()=> console.log("Hello Es^6");

calStr();

//format 3 
let calStr1 = (num) => num;
let calStr2 = num => num;

console.log(calStr1(77));
console.log(calStr2(454));

//we can sigle opereation oneline here
let calStr3 = (m,n) => m+n;

console.log(calStr3(4,3));
/**
 * |
 * |
 * |
 * |
 * |
 * |
 * |
 * |
 * |
 * |
 * |
 * |
 * |
 * |
 * |
 */



//Here some details about "this" sys+++++-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-

var JScript = {
    Name: "Java Script",
    frameworks: ["React","Angular","Vue"],
    printThisLibrary: function(){
        // console.log(this.frameworks); it's return this(self) obj====={{{this was for checking}}}
        
        this.frameworks.forEach((a)=>console.log(`${this.Name} ${a}`));
    }
}

JScript.printThisLibrary();

/**|
 * |
 * |
 * |
 * |
 * |
 * |
 * |
 * |
 * |
 * |
 * |
 * |
 * |
 **/


//Lemme try with onemore exmple of => function+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//////////////////////////In this case everything is well with the normal function 

function Person (name,country){
    this.name = name;
    this.country = country;
}

let hayat = new Person("Hayat","BD");
console.log(hayat.name);

////////////////////////But problem you will face for this type of work when u will try to use arrow(==>) function here

// let Person2=(name)=>{
//     this.name = name;
// }

// let object = new Person2("Mahmud");
// console.log(object);                  //here you will digest an Error...

