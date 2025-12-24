let arr = [1, 1, 0, 1, 1, 1,0,1,1,1,1,1,0,0,0,1,0];

const maxConsOne = (arr) => {
  let c = 0;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
      c++;
    } else  {
      if(max<c)
        max= c

      c=0
    }
  }
  return max>c?max:c;
};

console.log(maxConsOne(arr));
