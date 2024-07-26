/**|
 * |
 * |
 * |
 * |-_-_-_-_-_-_-_-_Now we will explore more interesting & simpl feature...
 * |_-_-_-_-_-_-_-__
 * |
 * |
 * |
 * |
 * |
*/

//Ternary Operator________________________________________________________________________________________
let year = 2000;                           //for single condition
let details = (year>2000)? "over 2":"okey";
console.log(details);


let year1 = 2100;                          //for multiple condition
let details1 = (year1>2000)? "over 2": (year1==2000)? "it's 2":"Less 2";
console.log(details1);


let num = 2;                               //for ommite extra code for simple explicite condition
let printNum = num>5;
console.log(num);

/**|
 * |
 * |
 * |
 * |
 * |
 * |
 * |
 * |
 */  //Find array __________________________________________________________________________________________

let arrSimple = [1,2,3,4,5,6,7,8,9];

let result = arrSimple.find(function(currV,index,array){    //second two parameter you can avoid initially
    return currV>6;
},this);

console.log(result);


//This example for understanding "this" value

class Person{
    constructor(name, country){
        this.name = name;
        this.country = country;
    }

    test(){
        console.log("Testing...");
    }

    anotherFunction(){
        let array = [9,8,7,6,5,4,3,2];
        array.find(function(){
            this.test();
        },this)
    }
}

let access = new Person("Hayat", "BD");
access.anotherFunction();

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
 */ //Find index of an array ______________________________________________________________________________