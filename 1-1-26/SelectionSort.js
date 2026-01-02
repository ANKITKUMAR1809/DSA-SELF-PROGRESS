let arr = [7, 1, 5, 4, 3, 2];

const selectionSort = (a) => {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (a[j] < a[min]) {
        min = j;
      }
    }
    if (min != i) {
      let temp = a[min];
      a[min] = a[i];
      a[i] = temp;
    }
  }
  return a;
};

console.log(selectionSort(arr));
