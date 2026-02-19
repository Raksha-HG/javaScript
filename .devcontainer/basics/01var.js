const accountId= 3456;
let accountEmail="raksha.g5155@gmail.com"
var accountPassword="45678"
accountCity="jaipur"
let accountState

//accountId=2  ->not allowed (const)
accountEmail="hitesh456@gmail.com"
console.log(accountEmail);
accountPassword="7890"
accountCity="mysore"

/* preffer not to use var because of 
Why you should avoid var in JavaScript

In modern JavaScript, we prefer let and const over var.
if (true) {
  var x = 10;
}
console.log(x); // 10 😬
Even though x is inside the if block, it’s still accessible outside.

But with let:

if (true) {
  let y = 10;
}
console.log(y); // ❌ Error


let and const are block-scoped, which prevents bugs.
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
