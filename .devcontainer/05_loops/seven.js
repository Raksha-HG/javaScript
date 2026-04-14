// const myNums=[1,2,3,4,5,6,7,8,9,10];
// const newnums=myNums.map((num)=>{return num+10})
// console.log(newnums)
const myNums=[1,2,3,4,5,6,7,8,9,10];
const newNums=myNums.map((num)=>{return num*10})
.map((num)=>{return num+1})
.filter((num)=>{return num>50})
console.log(newNums); // [51, 61, 71, 81, 91, 101], first map multiplies each number by 10, second map adds 1 to each number, and filter returns a new array with numbers greater than 50.