// Immediately Invoked Function Expression (IIFE)
// Global scope ke pollution se dikkt hoti hai toh uss pollution ko hatane ke liye humne iffe ka use kiya


(function chai(){ // named IIFE
    console.log(`DB Connected`);

    
})(); // semicolon to stop 1 IIFE

( () => {
    console.log(`DB Connected two`);
    
} 

)()







/** JavaScript Execution context
 * global execution context(this)(browser object is window)
 * functional execution context 
 * eval execution context
 * 
 * 
 * Phases in javascript
 * 1. Creation phase
 * 2. Execution phase
 * 
 * 
 * 
 * 
 * 
 * /** let val1 = 10
 *      let val2 = 5
 *      function addNum(Num1, num2){
 *         let total = num12 + num2
 *          return total
 *      }
 *      let result1= addNum(val1, val2)
 *      let result2 = addNum(18,2) */
/**
 * 1 global exectuion(this)
 * 2 memory creation phase( all variables are collected and stored in memory such as val1=undefined, val2=undefined, addNum=defintion , result1=undefined, result2=undefined)
 * 3. Execution phase( val1=10, val2=5, addNum=defintion, result1=15, result2=20)
 * 
 * 
 * 
 * 
    *every function call has its own execution context and then it will be get delete 

 */