let countries = ["Azerbaijan", "Albania", "Germany", "America", "Russian"];

for(let i = 0; i<countries.length; i++){

  
  if(countries[i][0].toLowerCase()==='a' && countries[i][countries[i].length-1].toLowerCase()==='a'){
    console.log(countries[i]);

  }
}