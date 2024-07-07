let arr = [3, 8, 2, 5, 4, 10, 7, 6];

function checkNumber(array, number) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === number) {
            return true;
        }
    }
    return false;
}

console.log(checkNumber(arr,6));