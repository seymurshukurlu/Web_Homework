function isEqual(arr1, arr2){
    let checker = true;
    for(let i = 0; i < arr1.length; i++){
        if(arr1.length != arr2.length){
            checker = false
        }

        else if(arr1[i]===arr2[i]){
            checker = true;
        }
        else{
            checker = false;
        }
    }

    if(checker==true)
    {
        return true;
    }
    else{
        return false;
    }

}

console.log(isEqual([1, 2, 3, 4,8], [1, 2, 3, 4, 5]));
console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4]));
console.log(isEqual([1, 2, 3, 4, false], [1, 2, 3, 4, false]));


