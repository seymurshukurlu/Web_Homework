function join(arr,symbol){
    let result = "";
    for(let i= 0; i < arr.length; i++){
        result += arr[i];
        if(i < arr.length - 1){
            result += symbol;
        }
    }
    return result;

}

console.log(join([1, 73, 99, 20], "*"))