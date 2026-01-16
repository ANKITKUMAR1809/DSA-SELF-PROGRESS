let s = "  Hello this is   World"

const lolw= (s)=>{
    let n=s.length-1;

    while(s[n]===" "){
            n--;
    }
    console.log(n)
}
console.log(s.length)
lolw(s)