let arr = [1,7,3,4,5,6,7,12,4,61,0,146,2,4,6,8,200];

function largest(arr){
    let lar = arr[0];

    for(let i=0; i<arr.length;i++){

        if(lar<arr[i]){
            lar = arr[i]
        }

    }
    return lar

}

console.log(largest(arr))