const arr = [3, 2, 1, 0, 2, 0, 1];

// const singleNumber = (arr)=>{
//     let hash={};

//     for (let i = 0; i < arr.length; i++){
//         if(!hash[arr[i]]){
//             hash[arr[i]]=1
//         }
//         else{
//             hash[arr[i]]++;
//         }
//     }
//     for(let i = 0; i < arr.length; i++){
//         if(hash[arr[i]]==1){
//             return arr[i]
//         }
//     }
// }

// way -2

const singleNumber = (arr) => {
    let xor=0;
    for( let i = 0; i < arr.length; i++){
        xor=xor^arr[i];
    }
    return xor;
};
console.log(singleNumber(arr));
