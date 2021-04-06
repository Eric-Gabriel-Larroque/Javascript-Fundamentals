//instantiate arrays
console.log(typeof Array, typeof new Array, typeof [])

let approved = new Array('Bia', 'Carlos','Ana' )
console.log(approved)

approved = ['Bia','Carlos','Ana']
console.log(approved[0])
console.log(approved[1])
console.log(approved[2])
console.log(approved[3])

//adding element
approved[3] = 'Paulo'
approved.push('Abia')

console.log(approved.length)//lenght equals 5

approved[9] = 'Rafael'
console.log(approved.length)//equals 10
console.log(approved[8] === undefined)

approved.sort()//organizes the array according to unicode punctuation
console.log(approved)

delete approved[1] //Delete and keeps an undefined in the place
console.log(approved[1])
console.log(approved[2])

approved = ['Bia','Carlos','Ana']
approved.splice(1,1)
console.log(approved)