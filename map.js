const numbers =  [2, 3, 4, 5, 6]

function getDoubles(numbers){
    const output = [];
    for(const number of numbers){
        const doubled = number * 2;
        output.push(doubled)
    }
    return output;
}


const doubleIt = num => num * 2;
const makeDouble = numbers.map(doubleIt)

const makeDouble2 = numbers.map(num => num * 2)
console.log(makeDouble2);

const result = getDoubles(numbers)
console.log(result);