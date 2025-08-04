let arr = [-3,5,1,6,9,0,3,56,885,6,2];

function Smallest(arr){

    let small = +Infinity;

    for(let i=0; i<arr.length;i++){

        if(arr[i]< small){
            small = arr[i]
        }


    }
    return small;
}

console.log(Smallest(arr))