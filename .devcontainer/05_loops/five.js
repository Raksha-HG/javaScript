const coding=["JavaScript","Python","Java","C++","Ruby"];
coding.forEach(function (val){
    console.log(val);
})
const myCoding=[
    {name:"JavaScript", year:1995},
    {name:"Python", year:1991},
    {name:"Java", year:1995},
]
myCoding.forEach(function (val){
    console.log(val.name, val.year);
})