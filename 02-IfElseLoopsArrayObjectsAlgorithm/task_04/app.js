let arr=[3,8,2,5,4,10,7,6]

let checker = arr[0];

for(let i = 0; i < arr.length; i++){
    if(arr[i]%2==0 && arr[i]>=checker)
    {
        checker = arr[i];
    }
}

console.log(checker);