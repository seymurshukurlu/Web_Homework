function clearDuplicate(arr){
    let result = [];
    for(let i = 0; i < arr.length; i++){
        let checker = true;
        for(let j = 0; j < arr.length; j++){
            if(arr[i]===result[j]){
                checker = false;
            }
        }
        if(checker==true){
            result.push(arr[i]);
        }
        
    }
    return result;
}



console.log(clearDuplicate(['a', 2, 'd', 2, 'a', 14, 14, 's', false]));
