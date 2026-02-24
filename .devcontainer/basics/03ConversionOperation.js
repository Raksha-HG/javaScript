let score=33;
console.log("score1",typeof score);

score="33";
console.log("score2",typeof score);

let valueInNumber=Number(score);
console.log("valueInNumber",typeof valueInNumber);

// "33"=> 33
// "33abc"=>NaN
// true=>1 false=>0

let isLoggedIn= ""
let booleanisloggedIn=Boolean(isLoggedIn)
console.log(booleanisloggedIn)
//1 => true
//0=> false
//""=> false
//"raksha" =>true

let someNumber=33
let stringNumber=String(someNumber);
console.log(stringNumber);
console.log(typeof(stringNumber));

//**********************OPERATIONS*****************************

let value=4
let negvalue= -value;
console.log(negvalue);


let str1="hello"
let str2="Raksha"
let str3=str1+str2
console.log(str3)


console.log("1"+2);
console.log("1"+2+2);
console.log(1+2+"2");