// If

// if ( 2 == "2") {
    // console.log("this statement is true");
    
    // }
    // if ( 2 !== "2") {
        // console.log("this statement is also true");
        
        // }
// const isUserLoggedIn = true;
// const temperature = 41
// if (tempeorature > 50) {
//     console.log("It's too hot outside");
    
// } else {
//     console.log("temperature is more than 50");
    
// }

// <, >, <=, >=, ==, ===, !=, !== 


const balance = 1000
// if (balance > 500 ) console.log("test"), console.log("test2");

// if (balance < 500 ) {
//     console.log("less than");

// }else if(balance < 750){
//     console.log("less than 750");
    
// }else if (balance < 900 ) {
//     console.log("less than 900");
    
    
// }else{
//     console.log("less than 1200");
    
// }



const userLoggedIn = true;
const debitCard = true
const loggedInfromGoogle = false
const loggedInfromEmail = true

if (userLoggedIn && debitCard) {
    console.log("You can make a purchase");
    
}

if (loggedInfromGoogle || loggedInfromEmail) {
    console.log("user logged in");
    
}