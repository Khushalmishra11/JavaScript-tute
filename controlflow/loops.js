// for loop

// for (let i = 0; i < 10 ; i++) {
//     const element = i;
//     console.log(element);
    
// }

// for of loop
// [ "", "" , " "]

const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
    
}


// const greeting = "Hello World!"
// for (const greet of greeting){
//     console.log(`Each char is ${greet}`)
    
    
// }

// Maps

const map = new Map()
map.set('IN', "India")
map.set('US', "United States of america")
map.set('FR', "France")

// console.log(map);

for (const [key, value] of map) {
    console.log(key);
    
    
}

const myObject = {
    game1 : 'NFS',
    game2 : 'spiderman'
}

// for (const [key] of myObject) {
//     console.log(key);
    
// }

