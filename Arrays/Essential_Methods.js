const pilots = ['Vettel', 'Alonso', 'Haikkonen', 'Massa']

pilots.pop()//Delete the last element
console.log(pilots)

pilots.push('Verstappen')//Add in the last index
console.log(pilots)

pilots.shift()//Delete the first element
console.log(pilots)

pilots.unshift()//Add in the first index

/*Splice  much more versatile, with him i can remove items, being the first parameter the index, second, number of elements
 that i wanna delete and the remaining are the elements that i can add.*/
    
pilots.splice(3,0,'Massa')

console.log(pilots)


const somePilots = pilots.slice(2)/*Catch an part of elements, having as parameter the initial index and the final index
(not included)*/
console.log(somePilots)

const somePilots2 = pilots.slice(1,4)
console.log(somePilots2)
