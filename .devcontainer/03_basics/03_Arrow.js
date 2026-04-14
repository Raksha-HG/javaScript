const user={
    username:"john",
    price:999,
    welcomeMessage: function(){
        console.log(`Welcome ${this.username}!`)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username="jane"
// user.welcomeMessage()
console.log(this)

// function chai(){ 
//    let username="john"
//     console.log(this.username)
// }
// chai()

// const chai=function(){
//let username="john"
//      console.log(this.username)
// }

const chai=()=>{
    let username="john"
     console.log(this)
}

//ARROW FUNCTION DOES NOT HAVE ITS OWN THIS, IT INHERITS THIS FROM THE PARENT SCOPE
//ARROW FUNCTION CANNOT BE USED AS A CONSTRUCTOR
//ARROW FUNCTION CANNOT USE THE ARGUMENTS OBJECT
//ARROW FUNCTION CANNOT BE USED AS A METHOD IN AN OBJECT

//()=>{} IS AN ARROW FUNCTION

// const AddTwo=(num1,num2)=>{
//     return num1+num2
// }
// console.log(AddTwo(5,10))

//implicit return
//mean if the function body has only one expression, we can omit the curly braces and the return keyword, and the result of that expression will be returned automatically.
const addTwo=(num1,num2)=>num1+num2
console.log(addTwo(5,10))

const objReturn=()=>({name:"john",age:30})
console.log(objReturn())    