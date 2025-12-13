//     *
//    **
//   ***
//  ****
// *****
let n = 6;
let sr=n-1;
for ( let i = 0 ; i < n; i++){
    let sp= " ";
    let row=""
    for(let s =0 ; s < sr; s++){
        row += sp;
    }
    for(let j =0 ; j<=i ;  j++){
        row =row + "*"
    }
    console.log(row)
    sr=sr-1;
}