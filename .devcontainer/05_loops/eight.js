const number=[1,2,3,4,5];
const initialValue=0;
const sum=number.reduce((accumulator,currentValue)=>{return accumulator+currentValue},initialValue);
console.log(sum);