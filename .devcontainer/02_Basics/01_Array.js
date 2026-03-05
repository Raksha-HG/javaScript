//array
const myArray=[0,1,2,3,4,5]
console.log(myArray[0])

//copy operation on array performs shallow copies only.

//shallow copy--> A Shallow copy of an object is a copy whose properties are the 
//share the same refference as those of source object from which the copy was made,
//as a Result ,when you change either the source or copy ,you may the other object to change too

//DEEP COPY-->Whose propeties do not share the same refference points


const arr= new Array(1,2,3,4)

// myArray.push(6)
// myArray.pop()
// console.log(myArray)

myArray.unshift(9)
myArray.shift()
console.log(myArray.includes(9))
console.log(myArray.indexOf(9))


//slice,splice
//slice doesn't manipulate original array
 const arr1=myArray.slice(1,3)
console.log(arr1)
//splice -->manipulate original array
const arr2=myArray.splice(1,3)
console.log(arr2)