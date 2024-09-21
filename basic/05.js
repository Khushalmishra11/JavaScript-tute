// // object literals

// const mySym = Symbol("key1")

// const JsUser = {
//     name: "Khushal",
//     "full name": "khushal Mishra",
//     [mySym]: "mykey1",
//     age: 18,
//     location: "jaipur",
//     email: "khushal@google.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Saturday"]
// }

// // `console.log(JsUser.email);
// // console.log(JsUser["email"]);
// // console.log(JsUser[mySym]);`

 
// JsUser.email = "Khushal@chatgpt.com"
// // Object.freeze(JsUser)

// JsUser.greeting = function(){
//     console.log("Hello Js User");
    
//     }
// JsUser.greetingTwo = function(){
//     console.log(`Hello Js User, ${this.name}`);
    
//     }

// // console.log(JsUser.greeting());
// // console.log(JsUser.greetingTwo());



// // object singleton
// // const tinderUser = new Object()

// const tinderUser = {}

// tinderUser.id = "123abc"
// tinderUser.name = "sammy"
// tinderUser.isLoggedIn = false


// // console.log(tinderUser);

// const regularUser = {
//     email: "some@gmail.com",
//     fullname: {
//         userfullname:{
//             firstname: "Khushal",
//             lastname: "Mishra"
//         }
//     }
// }


// // console.log(
// //     regularUser.fullname
// // );


// const obj1 = {1:"a", 2: "b"}
// const obj2 = {3:"a", 4: "b"}

// // const obj3 = Object.assign(obj1, obj2)
// // console.log(obj3);

// const obj3 = {...obj1, ...obj2}

// const users =
// [
//     {
//         id:1,
//         email: "K@gmail.com",
//     },
//     {
//         id:1,
//         email: "K@gmail.com",
//     },
//     {
//         id:1,
//         email: "K@gmail.com",
//     },
// ]


// users[1].email
// // console.log(tinderUser);

// // console.log(Object.keys(tinderUser));
// // console.log(Object.values(tinderUser));
// // console.log(Object.entries(tinderUser));

// // console.log(tinderUser.hasOwnProperty("isLoggedIn"));
// // console.log(tinderUser.hasOwnProperty("isLogged"));


// // ###############Objects 2

//  types to declare objects
/*const tinderUser = new Object()*/
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    email: "some@gmail.com",
    fullname:
    {
        userfullname:{
            firstname: "Khushal",
            lastname: "mishra"
        }
    }
}

console.log(regularUser.fullname.userfullname);
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "khushal"

}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(instructor);

// {
//     name: "khushal",
//     coursename: "js in hindi",
//     price: "FREE",
// }

