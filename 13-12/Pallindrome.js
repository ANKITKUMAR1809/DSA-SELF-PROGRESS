const isPallindrome = (n) => {
    let dup = n;
    let reverse=0;
    if(n<0){
        return false;
    }
    while (dup>0){
        reverse =(reverse *10) + (dup%10);
        dup = Math.trunc(dup/10)
    }
    console.log(reverse);
    if(reverse== n){
        return true;
    }
    else {
        return false;
    }
};

console.log(isPallindrome(-131));