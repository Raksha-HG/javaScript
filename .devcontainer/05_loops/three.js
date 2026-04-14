//for of loop

const arr=[1,2,3,4,5];
for (const element of arr) {
    console.log(element);
}
const str="Hello, World!";
for (const element of str) {
    console.log(element);
}

//Maps
const mymap=new Map();
mymap.set('name','Alice');
mymap.set('age',30);
mymap.set('city','New York');

for (const element of mymap) {
    console.log(element);
}

for (const [key, value] of mymap) {
    console.log(key, value);
}