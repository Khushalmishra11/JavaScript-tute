let a = 100
if (true){
    let a = 10
    const b = 20  
    // console.log("INNER : ", a);

}




// console.log(a);

// console.log(b);


function one(){
    const username = "Khushal"

    function two(){
        const website = "youtbe"
        console.log(username);

        
    }
    // console.log(website);   // error

    two()
    
}

// one()

if (true) {
    const username = "Khushal"
    if (username === "Khushal") {
        const website = " youtube"
        console.log(username + website);
        
    }
    // console.log(website);
    
    
}

// console.log(username);



// *********************** insteresting ************************

function  addOne(num){
    return num + 1
}

addOne(5)

const addTwo = function(num){
    return num + 2
}


