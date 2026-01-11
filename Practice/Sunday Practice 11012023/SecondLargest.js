// Second largest
const arr = [3, 24, 6, 8, 9, 20,22];

const secondLargest = (arr) => {
  let largest = -Infinity;
  let second_largest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i]>largest){
        second_largest=largest;
        largest=arr[i];
    }
    else if(arr[i]!=largest && arr[i]>second_largest){
        second_largest=arr[i]
    }
  }
  return second_largest;
};

console.log(secondLargest(arr))