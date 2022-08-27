const numbers = [12, 4, 32, 43, 23, 54, 13, 54, 75, 1]

const bigNums = numbers.filter(number => number > 20)

const tiny = numbers.filter(number => number < 10)

const even = numbers.filter(num => num % 2 === 0)

console.log(even);


const products = [
    {id: 1, name: 'laptop', price: 4534},
    {id: 1, name: 'mobile', price: 67667},
    {id: 1, name: 'tablet', price: 45374},
    {id: 1, name: 'watch', price: 4534},
]

const expensive = products.filter(product => product.price > 10000)
console.log(expensive);