const name="hitesh"
const repoCount=50
console.log(name + repoCount + "value")
//use back tickss-->
console.log(`Hello my name is ${name}, my github Repocount is ${repoCount}`)

const gameName=new String('hitesh-hc')
console.log(gameName)

console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.charAt(2))

const newString=gameName.substring(0,6)
console.log(newString)

//slice

const newStr=gameName.slice(-8,4)
console.log(newStr)
//trim---->remove extra spaces
const newSting1="    hitesh   "
console.log(newSting1);
console.log(newSting1.trim());

//replace

const url="https://hitesh.com/hitesh%20choudary"

console.log(url.replace('%20','-'));

const score=90  

const balance= new Number(700);

console.log(balance)