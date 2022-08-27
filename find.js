const products = [
    {id: 1, name: 'laptop', price: 4538},
    {id: 1, name: 'mobile', price: 67667},
    {id: 1, name: 'tablet', price: 45374},
    {id: 1, name: 'watch', price: 4534},
]

const cheap = products.find(product => product.price < 40000)
console.log(cheap);