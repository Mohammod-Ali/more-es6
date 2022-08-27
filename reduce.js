const numbers =[1,2,3,4,6,7,8]
// .reduce (accumulator function , initial value)
// accumulatorFunction use two parameters
const total = numbers.reduce((previous, current) => {
    console.log(previous, current)
    return previous + current
} , 0)
console.log(total);