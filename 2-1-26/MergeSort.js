let arr = [3,8,4,6,1,0,9]

function MergeSort(arr){
    if(arr.length<=1) return arr
    let mid = Math.floor(arr.length/2);
    let left = MergeSort(arr.slice(0,mid));
    let right = MergeSort(arr.slice(mid));

    return merge(left,right)
}

// const merge = (n1, n2) => {
//   let arr = [];
//   let l1 = n1.length;
//   let l2 = n2.length;
//   let p1 = 0;
//   let p2 = 0;
//   for (let i = 0; i < l1 + l2; i++) {
//     if(p2>=l2 || (n1[p1]<n2[p2] && p1<l1)){
//         arr[i]=n1[p1];
//         p1++;
//     }
//     else{
//         arr[i]=n2[p2];
//         p2++;
//     }
//   }
//   return arr;
// };


const merge = (left, right)=>{
    let i=0;
    let j=0;
    let res=[];
    while(i<left.length && j<right.length){
        if(left[i]<right[j]){
            res.push(left[i++]);
        }
        else{
            res.push(right[j++]);
        }
    }
    return [...res,...left.slice(i),...right.slice(j)]
}
console.log(MergeSort(arr))