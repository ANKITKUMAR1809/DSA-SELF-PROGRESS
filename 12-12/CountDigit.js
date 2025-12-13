let n = 14555;
let c =0;
while (n > 0) {
    n= Math.trunc(n/10);
    c= c+1;
}
console.log(c)
console.log(n)