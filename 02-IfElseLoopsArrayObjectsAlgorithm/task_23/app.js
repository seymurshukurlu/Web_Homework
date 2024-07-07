const students = [
    { name: "Ali", scores: [90, 85, 92] },
    { name: "Davud", scores: [100, 100, 100] },
    { name: "Mammal", scores: [75, 80, 85] },
    { name: "Camil", scores: [90, 95, 85] },
];

function Average(scores) {
    let total = 0;
    for (let i = 0; i < scores.length; i++) {
        total += scores[i];
    }
    return total / scores.length;
}

const New = [];
for (let i = 0; i < students.length; i++) {
    const average = Average(students[i].scores);
    New.push({ name: students[i].name, average: average });
}

console.log(New);
