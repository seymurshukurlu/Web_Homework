let a = 6;
let b = 7;
let c = 9;

if (a >= b && b >= c) {
    console.log("Big Number: ",a * 100 + b * 10 + c);
    console.log("Little Number: ",c * 100 + b * 10 + a);
} else if (a >= c && c >= b) {
    console.log("Big Number: ",a * 100 + c * 10 + b);
    console.log("Little Number: ",b * 100 + c * 10 + a);
} else if (b >= c && c >= a) {
    console.log("Big Number: ",b * 100 + c * 10 + a);
    console.log("Little Number: ",a * 100 + c * 10 + b);
} else if (b >= a && a >= c) {
    console.log("Big Number: ",b * 100 + a * 10 + c);
    console.log("Little Number: ",c * 100 + a * 10 + b);
} else if (c >= a && a >= b) {
    console.log("Big Number: ",c * 100 + a * 10 + b);
    console.log("Little Number: ",b * 100 + a * 10 + c);
} else if (c >= b && b > a) {
    console.log("Big Number: ",c * 100 + b * 10 + a);
    console.log("Little Number: ",a * 100 + b * 10 + c);
}
else {
    console.log("please insert proper number");
}