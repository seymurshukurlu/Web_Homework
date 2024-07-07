function clear(arr){
    arr1=[];
    for(let i = 0; i<arr.length; i++){
        if(arr[i] != null && arr[i] != Boolean && arr[i] != undefined && arr[i] != "" && arr[i] != 0){
            arr1.push(arr[i]);
        }

    }
    return arr1;
}

console.log(clear([0, 1, false, 2, undefined, '', 3, null]));

