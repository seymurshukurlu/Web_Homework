let arr=[3,8,2,5,4,10,7,6]

let min = arr[0];
let max = arr[0];
let sum = 0;

for(let i = 0; i < arr.length; i++){
    sum += arr[i];
}

for(let i = 0; i < arr.length; i++){
    if(min<=arr[i]){
        min = arr[i];
    }
    else if(max >= arr[i]){
        max = arr[i];
    }
}

console.log(sum - min - max);

