const user = {
    username: "khushal",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , Welcome to website`);
        // console.log(this);
        
        
    }
}   

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

console.log(this);



// function chai(){
    //     let username
    //     console.log(this);
    
    // }
    
    // chai()
    
    
    // Arrow function
const chai = (num1, num2) => {
    return num1 + num2
}
// console.log()addTwo;


// const myArray = [2,5,7,3,8]

// myArray.forEach(function (() => {}))




