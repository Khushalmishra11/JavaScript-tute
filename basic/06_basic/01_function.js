// function sayMyName(){


//     console.log("K");
//     console.log("H");
//     console.log("U");
//     console.log("S");
//     console.log("H");
//     console.log("A");
//     console.log("L");


// }

// sayMyName()

// function addTwoNumbers(num1, num2){
//     var total = num1 + num2;
//     console.log(total);
// }

// addTwoNumbers("A", 20);


function calculateCartPrice(val1, val2, ...num1){ // rest operator ...
    return num1
}

console.log(calculateCartPrice(100,400,500))

const uesr = {
    username: "khushal",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anuobject.username} and price is ${anyobject.price}`);

}

// handleObject(price)


const myNewArray = [200,400,100,660]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))