const webTechs = [
    "HTML",
    "CSS",
    "JS",
    "React",
    "JS",
    "Redux",
    "Node",
    "JS",
    "MongDB",
];

const newarray = [];

for(let i= 0; i<webTechs.length; i++){
    if(webTechs[i].length > 4){
        newarray.push(webTechs[i])
    }
}

console.log(newarray);