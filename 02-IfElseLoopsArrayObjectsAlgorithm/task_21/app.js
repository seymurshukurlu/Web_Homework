function  exchange(arr, index, str){
    if(arr.length < index){
        arr.push(str);
    }
    else{
        arr[index] = str;
    }
    return arr;

}

console.log(exchange(['a','salam','b','world'], 3, "dev"));