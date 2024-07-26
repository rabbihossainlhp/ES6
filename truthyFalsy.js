//actually there is nothing thats like special here 
//Lemme try with code....

let test = "hello";

//when we write condition like bellow ....
if(test){
    console.log("Yes This is true");
}else{
    console.log("Nope am not true");
}                           

                            // in this case it will print the first truth condition
                            //When "if(test)" will write it means there is no {[null,False,NaN,undefind,"".0]}
                            //It means this is "truthy" & first condition will excute -_-_-_ Note: this is not explicite True/False
                            // this is truthy & falsy

//Lets see onemore exmp::

if(!test){
    console.log("Truthy");
}else{
    console.log("Falsy");
}