let arr=[2,9,-5,-4,"AzerBayCan",true,12,"LANKARAN","LimOn",182,4]


for(let i = 0; i<arr.length; i++){
    if(typeof arr[i]==="boolean"){
        if(i>0){
            console.log(arr[i-1]);
        }
        if (i<arr.length-1)
        console.log(arr[i+1]);
    }
}

