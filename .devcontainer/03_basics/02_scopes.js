 let a = 300
if(true){
        let a = 10
        const b = 20
        var c = 30 
}
//console.log(a)
//console.log(b)
console.log(c)//--> var has no effect on scope

const user={
        username:"hitesh",
        price:199
}

function handleObject(anyObject){
        console.log(`username: ${anyObject.username} Price:${anyObject.price}`)
}

handleObject(user);

const myNewArr=[6,7,8,9,10]

function handleArray(anyArray){
 return anyArray[2]
}

console.log(handleArray(myNewArr))

//nested scope

function one(){
        const userName="hitesh"

        function two(){
                const website="youtube"
                console.log(userName)
        }
        //console.log(website)
        two()
}
one()

if(true){
        const username="hitesh"
        if(username==="hitesh"){
                const website="youtube"
                console.log(username + website)
        }
       //
       // console.log(website)
}
//console.log(username)

//+++++++++INTERESTING+++++++++++++++
console.log(addOne(5))
function addOne(num){
        return num+1
}

//addOne(5)
//addTwo(5)--->causes error because of hoisting
//console.log(addTwo(5))-->causes error because of hoisting
const addTwo= function(num)
{
        return num+2
}

//addTwo(5)
//console.log(addTwo(5))