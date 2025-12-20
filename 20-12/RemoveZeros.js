// Remove Zero to the last of array but in place
let arr = [0]

const removeArray = (arr) =>{
    let x=0; //point on first of array 
    for(let i = 0; i < arr.length; i++){
        if(arr[i]!=0){
            let temp = arr[x]
            arr[x]= arr[i]
            arr[i]= temp
            x++
        }
    }
    return true;
}


console.log(removeArray(arr),arr)