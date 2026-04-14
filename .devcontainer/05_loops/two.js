// for of
const arr = [1, 2, 3, 4, 5];
//for of is used to iterate over iterable objects like arrays, strings, maps, sets, etc. It provides a simpler syntax compared to traditional for loops when you only need to access the values of the iterable.
for (const num of arr) {
    console.log(num);
}
const str="Hello, World!";
for (const greet of str) {
    console.log(greet);
}
//maps
const myMap = new Map();
myMap.set('name', 'Alice');
myMap.set('age', 30);
myMap.set('city', 'New York');
for (const m of myMap) {
    console.log(m);
}

const myObj={
    name:"Alice",
    age:30,
    city:"New York"
}
// for (const loopOnObj of myObj) {
//     console.log(myObj);
// }
//forof cannot be used to iterate over objects directly. However, you can use Object.keys(), Object.values(), or Object.entries() to iterate over the properties of an object.
for (const key of Object.keys(myObj)) {
    console.log(key); // Logs the keys: name, age, city
}
for (const value of Object.values(myObj)) {
    console.log(value); // Logs the values: Alice, 30, New York
}
for (const [key, value] of Object.entries(myObj)) {
    console.log(`${key}: ${value}`); // Logs key-value pairs: name: Alice, age: 30, city: New York
}

//for in
//for in is used to iterate over the enumerable properties of an object. It provides a way to loop through the keys of an object.
const myObj2={
    name:"Bob",
    age:25,
    city:"Los Angeles"
}
for (const key in myObj2) {
    console.log(key); // Logs the keys: name, age, city
    console.log(myObj2[key]); // Logs the values: Bob, 25, Los Angeles
}
//forEach
//forEach is a method available on arrays that allows you to execute a provided function once for each array element. It is often used for iterating over arrays in a more functional programming style.
const array = [1, 2, 3, 4, 5];

array.forEach(element => {
    console.log(element);
});