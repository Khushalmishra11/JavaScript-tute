// Falsy value
// false, 0 , -0, BigInt 0n, "", null, undefined, NaN

// truethey value
// true, 1, -1, "0", "false", [], {}, function(){}

const userEmail = []
// if(userEmail.length === 0){
//     console.log("array is empty");
    
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
    
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10

// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15


console.log(val1);

//  ternary operator
// condition ? true : false

const iceTeaPrice = 70
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("greater than 80");

