let arr = [0,0,1,1,1,2,2,3,3,3,4];
// output =  [0,1,2,3,4,2,3,2,1]
// output = 5
// Sorted 
//  non-decreasing order ( array can contain dup)

const removeDup= (arr)=>{
    let x=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>arr[x]){
            arr[x]=arr[i]
            x++;
        }
    }
    return x+1;
}

console.log(removeDup(arr))
