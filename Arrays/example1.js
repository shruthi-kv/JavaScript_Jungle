
// 1. Convert array of numbers to their squares using map
const nums = [1, 2, 3, 4];

const square = nums.map((n) => {
    return n*n
})

// 2. Filter out numbers less than 3

const lessThanThree = square.filter((n) => n<3)

console.log(square)


console.log(lessThanThree)