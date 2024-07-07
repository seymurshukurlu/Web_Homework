let arr = [2, 9, -5, -4, "AzerBayCan", true, 12, "LANKARAN", "LimOn", 182, 4];

for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
        let Count = 0;
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] >= 'A' && arr[i][j] <= 'Z') {
                Count++;
            }
        }
        if (Count > 2) {
            console.log(arr[i]);
        }
    }
}
