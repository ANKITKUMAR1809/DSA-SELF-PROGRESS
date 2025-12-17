let arr = ["h", "e", "l", "l","o"];

const reverseString = (arr) =>{
    let s= arr.length-1;

    for( let i=0; i<Math.trunc(arr.length/2);i++){
        let temp = arr[s];
        arr[s]= arr[i]
        arr[i]= temp;
        s=s-1;
    }
    return arr;
}

console.log(reverseString(arr))

