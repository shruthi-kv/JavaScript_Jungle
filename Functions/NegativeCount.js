let arr = [1,5,0,0,2,-0];

function CountNegative(arr){
    let negCount = 0;
    for(let i =0 ; i< arr.length; i++){
        if(arr[i] < 0){
            negCount = negCount+1
        }

    }
    return negCount;
}

console.log(CountNegative(arr))