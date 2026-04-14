//for
array=[1,2,3,4,5]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element)
    
}
//////////////INNER LOOP//////////////////////////////

for (let i=0;i<=10;i++) {
   for(let j=0;j<=10;j++){
    console.log(`${i} * ${j} = ${i*j}`)
   }
    
}
//break and continue
let myArray=[1,2,3,4,5]
for (let index = 0; index < myArray.length; index++) {
    if (index===3) {
       console.log("Breaking the loop at index 3")
    }
    console.log(myArray[index])
    const element = myArray[index];
    
}