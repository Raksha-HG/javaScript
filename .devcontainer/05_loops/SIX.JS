const values=["js","python","java"];

// const coding =values.forEach((item)=>{
//     console.log(item);
//     return item 
// })
// console.log(coding); //undefined, forEach does not return a new array, it returns undefined.

const myNums=[1,2,3,4,5,6,7,8,9,10];
const arr =myNums.filter((num)=>
  num>5
)
console.log(arr); // [6, 7, 8, 9, 10], filter returns a new array with elements that satisfy the condition  .