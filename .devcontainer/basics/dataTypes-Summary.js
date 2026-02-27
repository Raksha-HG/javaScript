//primitive and non primitive

//primitive
//7 types
//1.String ,2.Number, 3.Boolean, 4.null ,5.Undefined ,6.Symbol,7.BigInt
 const score=100

 const id=Symbol('123')//diff value
 const AnotherId=Symbol('123')//diff value
 const bigNumber=234567890876n
 console.log(id===AnotherId);

 //

//Reference Non-Primitive

//1.Arrays 2.Objects 3.functions

const heros=["s","k","h"]

let myObj={
    name:"hitesh",
    age: 18
}

const myFunc=function(){
    console.log("hello world");
}
