function join(arr1,arr2,char){
    let str = "";
    for(let i = 0; i<arr1.length; i++){
        str += arr1[i];
        str += char;

    }
    for(let i = 0; i<arr2.length; i++){
        str += arr2[i];
        if(i < arr2.length - 1){
            str += char;
        }
    }

    return str;

    
}

console.log(join([1,2],[3,4],'*'));