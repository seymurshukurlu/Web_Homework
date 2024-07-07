function cem(str, chr){
    let sum = 0;
    for(let i = 0; i<str.length; i++){
        if(str[i] === chr){
            sum+=i;
        }
    }


    if(sum == 0){
        return -1;
    }
    else{
        return sum;
    }


}

console.log(cem("Abbasaga",'a'));
console.log(cem("salam",'b'));