// const arr = [1,5,8,3,5,8,92,45,8,23,8,9,245,8578,23,6,7787,7587];

const arr = [1];

function SecondLargest(arr){
    if(arr.length<2){
        return null
    }
    let firstLargest = -Infinity;
    let secondLargest = -Infinity;

    for(let i = 0; i < arr.length ; i++){

        if(arr[i] > firstLargest){
            secondLargest = firstLargest;
            firstLargest = arr[i];
        }else if(arr[i] > secondLargest){
            secondLargest = arr[i]

        }

    }

    return secondLargest;


}

console.log(SecondLargest(arr))