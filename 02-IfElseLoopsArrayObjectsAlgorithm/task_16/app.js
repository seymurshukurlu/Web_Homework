function converter(word){
    let result = "";
    for(let i = 0; i<word.length; i++){
        let letter = word[i];
        if (letter  === letter.toUpperCase()){
            letter = letter.toLowerCase()
        }
        else{
            letter = letter.toUpperCase()
        }
        result += letter;
    }
    return result;
}

console.log(converter('saLamNecesen'));