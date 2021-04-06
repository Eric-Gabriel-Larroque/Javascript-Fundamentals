/*The filter method returns a new reference array reduced, filtered by the conditional of the function passed.*/

const products = [
    {name: 'Notebook', price: 2499, fragile: true},
    {name: 'Ipad Pro', price: 4199, fragile: true},
    {name: 'Glass', price: 12.49, fragile: true},
    {name: 'Plastic cup', price: 18.99, fragile: false}
]

const fragileProducts = el => el.fragile
const  expensiveProducts = el => el.price >2000
const cheapProducts = el => el.price<1000
const expensive = products.filter(expensiveProducts)
const fragiles = products.filter(fragileProducts)
const cheap = products.filter(cheapProducts)
console.log(expensive)
console.log(fragiles)
console.log("Cheap:\n\n",cheap)