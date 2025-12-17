let arr = [ 0,1,2,2,3,0, 4, 2]
let val =2;

const removeElements = (arr )=>{
    let x =0;
    for ( let i = 0; i < arr.length; i++){
        if(arr[i]!=val){
            arr[x]=arr[i];
            x=x+1
        }
    }
    return x;
}
 console.log(removeElements(arr),arr)