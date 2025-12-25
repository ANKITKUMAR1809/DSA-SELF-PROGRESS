const printReverse = (n)=>{
    let rev = 0;
    let ncopy= n;
    let limit = 2**31
    
    n= Math.abs(n);
    while(n>0){
        rev= (rev*10)+ (n%10)
        n=Math.trunc(n/10)
    }
    if(rev<-limit || rev>limit-1)
        return 0;
    return ncopy<0?-rev:rev
}

console.log(printReverse(1534236469))