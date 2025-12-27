// let arr = [5, 3, 2, 0, 1];
// let i = 0;
// let n=arr.length
// console.log(arr.length)
// function sumOfArr(arr) {
//   if (i == n) return 0;
//   return arr[i] + sumOfArr(arr[i + 1]);
// }
// console.log(sumOfArr(arr))

let arr = [5, 3, 2, 7, 0, 1];
function sum(n) {
  if (n == 0) return arr[0];
  return arr[n] + sum(n - 1);
}
// Finding Sum of odd number in array
// function sum(n) {
//   let isOdd = arr[n] % 2 != 0;
//   if (n == 0) {
//     return isOdd ? arr[n] : 0;
//   }
//   if (arr[n] % 2 != 0) {
//     return arr[n] + sum(n - 1);
//   } else {
//     return sum(n - 1);
//   }
// }
console.log(sum(arr.length - 1));
