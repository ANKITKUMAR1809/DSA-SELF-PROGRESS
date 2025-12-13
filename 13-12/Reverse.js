const printReverse = (n)=>{
    let rev = 0;
    let ncopy= n;
    let limit = 2**31
    if(n<-limit || n>limit-1)
        return 0;
    n= Math.abs(n);
    while(n>0){
        rev= (rev*10)+ (n%10)
        n=Math.trunc(n/10)
    }
    return ncopy<0?-rev:rev
}

console.log(printReverse(-32143473499))