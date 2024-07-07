let arr=[3,8,2,5,4,10,7,6]

let min = arr[0];
let max = arr[0];


for(let i = 0; i < arr.length; i++){
    if(arr[i]%2==0 && arr[i]<=min)
    {
        min = arr[i];
    }
    
    else if(arr[i]%2!=0 && arr[i]>=max){
        max = arr[i]
    }
}

for(let i = 0; i < arr.length; i++){
    if(arr[i]===min){
        arr[i]=max;
    }
    else if(arr[i]===max){
        arr[i]=min;
    }
}

console.log(arr);
