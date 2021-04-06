/**The forEach method return the array with the modification that i want. He receive as a parameter a callback function,
 * which  consider the first parameter as the value, second the index and for third the entire array. If i want 
 * insert one more parameter, the method will treat him as undefined.
 */

const approved = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

approved.forEach(function(name, index){
    console.log(`${index+1}) ${name}`)
})

approved.forEach(name => console.log(name))

const showApproved = approved => console.log(approved)

approved.forEach(showApproved)

