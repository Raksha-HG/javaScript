//singleton

//object literals
//Object.create

const mysym= Symbol("key")
const JsUser={
    "name":"Hitesh",
    age:18,
    [mysym]:"myKey1",
    location:"jaipur",
    email:"raksha.g5155@gmail.com",
    isloggedIn:false,
    lastLoginDays:["monday","tuesday"]

}

console.log(JsUser.email);
console.log(JsUser);

console.log(JsUser["name"])

JsUser.greetings=function(){
    console.log("hello")
}
console.log(JsUser.greetings())

JsUser.greetingsTwo=function(){
    console.log(`hey ${this.name},may i get your contact number`)
}
console.log(JsUser.greetingsTwo())
