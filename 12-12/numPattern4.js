// 1
// 10
// 101
// 1010
// 10101
// 101010
let n = 6;
for (let i = 0; i < n; i++) {
  let row = "";

  for (let j = 0; j <= i; j++) {
    if ((j + 1) % 2 == 0) {
      row = row + 0;
    } else {
      row = row + 1;
    }
  }
  console.log(row);
}
console.log(1%2)