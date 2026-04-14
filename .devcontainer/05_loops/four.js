const myobj={
    js:"javascript",
    py:"python",
    java:"java"
}

for (const key in myobj) {
    //console.log(key);
    console.log(myobj[key]);
    
}

const arr=[1,2,3,4,5];
for (const key in arr) {
   // console.log(key); // Logs the indices: 0, 1, 2, 3, 4
    console.log(arr[key]); // Logs the values: 1, 2, 3, 4, 5
    
}