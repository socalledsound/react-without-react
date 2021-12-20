const addOne = (num) => num + 1

const numbers = [1,6,3,7]
const newNumbers = []

for(let i = 0; i < numbers.length; i++){
    newNumbers[i] = addOne(numbers[i])
}

console.log(numbers)
console.log(newNumbers)