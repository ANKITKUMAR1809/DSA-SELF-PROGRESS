const arr = [3, 2, 5, 7, 8, 14];

const secondLargest = (arr) => {
  let s = -Infinity,
    l = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > l) {
      s = l;
      l = arr[i];
    } else if (l != s && arr[i] > s) {
      s = arr[i];
    }
  }
  return s;
};

console.log(secondLargest(arr));
