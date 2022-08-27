const products = [
    {id: 1, name: 'laptop', price: 4534},
    {id: 1, name: 'mobile', price: 67667},
    {id: 1, name: 'tablet', price: 45374},
    {id: 1, name: 'watch', price: 4534},
]

const items = products.map(product => product.name)
const prices = products.map(p => p.price)
console.log(prices);