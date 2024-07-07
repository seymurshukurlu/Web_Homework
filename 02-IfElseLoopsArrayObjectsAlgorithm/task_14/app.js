function getFirst(arr,n){
    if(n === undefined){
        return arr[0];
    }
    else{
        let arr2 = [];
        for(let i = 0; i<n && i < arr.length; i++){
            arr2.push(arr[i]);
        }
        return arr2;
    }
   
}

console.log(getFirst([1, 73, 99, 20], 3));