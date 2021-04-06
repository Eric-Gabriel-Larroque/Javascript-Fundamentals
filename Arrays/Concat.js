/*the concat method join  the arrays, but dont change the original, being necessary
keep her changes in a variable.*/

const sons = ['Gabriel','Rafael']
const daughters = ['Amanda','Bárbara']
const all = sons.concat(daughters)

console.log(`Sons: ${sons}`)
console.log(`Daughters: ${daughters}`)
console.log(`All of them: ${all}`)

console.log([].concat([1,2],3,[4,5],[[6,7,8]]))
