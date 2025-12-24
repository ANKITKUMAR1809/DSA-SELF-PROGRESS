const arr = [0, 2, 3, 1, 4];

const missingNumber = (arr) => {
  let n = arr.length;
  let totalSum = (n * (n + 1)) / 2;
  let partSum = 0;

  for (let i = 0; i < n; i++){
    partSum += arr[i];
  }
  return totalSum-partSum;
};


console.log(missingNumber(arr))