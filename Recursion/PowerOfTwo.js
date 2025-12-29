function po2(n){
    if(n==1) return true;
    if(n<1) return false;

    return po2(n/2);
}

console.log(po2(16))