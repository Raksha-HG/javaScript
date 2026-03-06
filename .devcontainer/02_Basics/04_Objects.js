const tinderUser={}

 tinderUser.id="123abc"
 tinderUser.name="sammy"
 tinderUser.isLoggedIn=false
console.log(tinderUser)

const RegularUser={
    email:"raksha.g155@gmail.com",
    fullName:{
            firstName:"raksha",
            middleName:"H",
            lastName:"G"
    }

}

console.log(RegularUser.fullName?.firstName)

//MERGING OBJECTS TOGETHER

const OBJ1={1:"A",2:"B"}
const OBJ2={3:"C",4:"D"}

const OBJ3=Object.assign(OBJ1,OBJ2)
console.log(OBJ3)

const Users=[
    {
    id:"1",
    email:"1ggfd@gmail.com"
},{
    id:"2",
    email:"2ggfd@gmail.com"
},{
    id:"3",
    email:"3ggfd@gmail.com"
}
]

console.log(Users[0].email)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
