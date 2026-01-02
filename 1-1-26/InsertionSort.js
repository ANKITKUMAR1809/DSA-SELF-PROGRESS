let arr = [7, 8, 2, 5, 4, 1];

const insertionSort = (a) => {
  for (let i = 1; i < a.length; i++) {
    let curr = a[i];
    let prev = i-1;
    while (a[prev] > curr && prev>=0) {
      a[prev + 1] = a[prev];
      prev--;
    }
    a[prev+1]=curr;
  }
  return a;
};

console.log(insertionSort(arr));
