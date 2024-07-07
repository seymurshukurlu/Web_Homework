let arr = [2, 9, -5, -4, "AzerBayCan", true, 12, "LANKARAN", "LimOn", 182, 4];

let check = "";

for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string" && arr[i].length > check.length) {
        check = arr[i];
    }
}

console.log(check);  