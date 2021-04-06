/*Reduce serves you for transform an array in a reduced value, receiving as parameter an accumulator, the current array element,
the index and finaly teh entire array.*/

const students = [

    {name: 'João', grade: 7.3, scholarshipHolder: false},
    {name: 'Maria', grade: 9.2, scholarshipHolder: true},
    {name: 'Pedro', grade: 9.8, scholarshipHolder: false},
    {name: 'Ana', grade: 8.7, scholarshipHolder: true}
]

console.log(students.map(a => a.grade))
const result = students.map(a => a.grade).reduce(function(accumulator, current) {
    console.log(accumulator, current)
    return accumulator + current
})

const scholarhipHolders = (a,b) => a&&b 
const someScholarship = (a,b) => a||b
const schHolder = students.map(e => e.scholarshipHolder)
console.log(schHolder)
console.log(schHolder.reduce(scholarhipHolders))
console.log(schHolder.reduce(someScholarship))