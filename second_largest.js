let arr =[3, ];

function secondLargest(arr){
    if(arr.length<2){
        return "Array can't have second highest."
    }
    let s=-Infinity,l=-Infinity;
    for(let i=0; i<arr.length; i++){
        if(arr[i]>l){
            s=l
            l=arr[i];
        }
        else if(arr[i]>s && s != l){
            s= arr[i]
        }
    }
    return s;
}
console.log(secondLargest(arr))