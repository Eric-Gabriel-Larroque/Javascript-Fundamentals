/*flatMap is a invented method, using the map methopd with concat, joining the elements case they are from diferent arrays,
 removing the brackets.*/


Array.prototype.flatMap = function(callback){

        return Array.prototype.concat.apply([], this.map(callback))
    }

const school = [{
    name: 'Group M1',
    students: [{
        name:'Gustavo',
        grade: 8.1
    }, {
        name: 'Ana',
        grade: 9.3
    }]
}, {
    name: 'Group M2',
    students : [{
        name: 'Rebeca',
        grade: 8.9
    }, {
        name: 'Roberto',
        grade: 7.3
    }]
}]

const onlyGrades = students => students.grade 
const groupGrades = group => group.students.map(onlyGrades)

const grades1 = school.map(groupGrades)
console.log(grades1)
const grades2 = school.flatMap(groupGrades)
console.log(grades2)