let arr = [4,2,0,10,8,30];

function searchElement(ele){9
    for(let i = 0 ; i<arr.length;i++){
        if(arr[i] === ele){
            return i;
        }
    }

    return -1;

}
console.log(searchElement(35))