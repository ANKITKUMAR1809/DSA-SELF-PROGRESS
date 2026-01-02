let arr= ["h","e","l","l","o"];

let n=arr.length;
let start=0
let end=arr.length-1;
for(let i = 0; i<Math.trunc(n/2);i++ ){
    let temp = arr[start]
    arr[start]=arr[end]
    arr[end]=temp
    start++;
    end--;
}

console.log(arr)