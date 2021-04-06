/**This method create a new array mapping the other array, but he create with the same number of elements of the referential
 * array. */
const nums = [1,2,3,4,5]

let result = nums.map(function(e){ return e*2 } )

console.log(result)

const sum10 = e => e + 10
const triple = e => e * 3
const forCash = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

result = nums.map(triple).map(sum10).map(forCash)
console.log(result)