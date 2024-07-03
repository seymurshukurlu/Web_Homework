
let a = 9;
let b = 5;
let c = 3;

if (a > b && b > c) {
    console.log("big sum", a, " ", b);
} else if (a > c && c > b) {
    console.log("big sum", a, " ", c);
} else if (b > c && c > a) {
    console.log("big sum", b, " ", c);
} else if (b > a && a > c) {
    console.log("big sum", b, " ", a);
} else if (c > a && a > b) {
    console.log("big sum", c, " ", a);
} else if (c > b && b > a) {
    console.log("big sum", c, " ", b);
}



