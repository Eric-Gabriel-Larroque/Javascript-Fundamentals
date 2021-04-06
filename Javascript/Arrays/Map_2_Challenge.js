const cart = [
    '{"name": "Eraser", "price": 3.45}',
    '{"name": "Notebook", "price": 13.90}',
    '{"name": "Pencil Kit", "price": 41.22}',
    '{"name": "Pen", "price": 7.50}',
]

const converted = cart.map( (el) => JSON.parse(el).price)
console.log(converted)

