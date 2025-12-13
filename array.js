// array literal
let a = [1,2,3]

// array constructor
let b = new Array(10,20,30)

console.log(a);
console.log(b);

let c = ["html","css","js","nodejs"];

// array methods
// push -> add element to end of array
c.push("react");

// unshift -> add element to begining of array
c.unshift("express");

// pop -> remove last element of array
// c.pop();

// shift -> remove first element of array
// c.shift();

// splice -> remove element from array from index and how many elements to remove
c.splice(1,2);


console.log(c)

// array iteration

// for each -> iterate over array

c.forEach((x,i)=>{
    console.log(x, i)
})


