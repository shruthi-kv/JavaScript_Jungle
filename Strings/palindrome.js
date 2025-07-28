
let str = "Malayalam";

function checkPalidrome(str) {
    let calstr = '';

    for (let i = str.length-1; i>=0 ;i --){
        calstr = calstr + str[i] 
    }
    if(calstr.toUpperCase() === str.toUpperCase()){ 
        return true;
    }else{
        return false;
    }

}

let isPalindrome = checkPalidrome(str);
console.log(isPalindrome)