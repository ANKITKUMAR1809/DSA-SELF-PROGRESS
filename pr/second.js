const arr =[ 4,6,2,9,1,7];

const secondLargest = (arr)=>{
    if(arr.length <2){
        return -1;
    }
    let s=-Infinity, l=-Infinity
    for(let i=0;i<arr.length;i++){
        if(arr[i]>l){
            s=l
            l=arr[i]
        }
        else if(arr[i]>s && s!=l){
            s=arr[i]
        }
    }
    return s;
}

console.log(secondLargest(arr))