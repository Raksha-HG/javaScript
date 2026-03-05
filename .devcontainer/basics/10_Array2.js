const marvel_heros=["thor","Ironman","spiderman"]
const dc_heros=["superman","flash","batman"]

//marvel_heros.push(dc_heros)
//console.log(marvel_heros)
//console.log(marvel_heros[3][1])
const all=marvel_heros.concat(dc_heros)
console.log(all)

//Spread Operator

const allNewH=[...marvel_heros,...dc_heros]
console.log(allNewH)

const another_array=[1,2,3,[4,5,[9,8,7]],6,4 ,[6,7]]
const realArray=another_array.flat(Infinity)
console.log(realArray)