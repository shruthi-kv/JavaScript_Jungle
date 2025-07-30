// 3. Use reduce to count total characters in all strings
const words = ['hello', 'world'];

// let str = words[0].split('')
// let str2 = words[1].split('')
// let combostr = [...str, ...str2];
// console.log(combostr)

// let res = combostr.reduce((acc,curr) => acc+curr,0)
// console.log(res)

let res = words.reduce((acc,curr)=> acc+curr.length,0)
console.log(res)