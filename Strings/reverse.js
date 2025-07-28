

let str = "Hello";

function reverseString(str){
    let reversedString ='';

    for(let i = str.length-1; i >=0; i--){
        reversedString = reversedString+str[i]
    }
    return reversedString;
}

function reverseStringByReverse(str){
    return str.split('').reverse().join('')
}



const result = reverseString(str)
console.log(result)

const result1 = reverseStringByReverse(str)
console.log(result1)