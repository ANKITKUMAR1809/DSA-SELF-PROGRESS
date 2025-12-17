// Best time to buy & sell stock
const arr = [7,1,5,3,6,4];

const bestTime = (arr)=>{
    let min = arr[0];
    let maxProfit = 0;

    for ( let i =1;i<arr.length;i++){
        if(maxProfit<arr[i]-min){
            maxProfit= arr[i]-min
        }
        if(min>arr[i]){
            min=arr[i]
        }
    }
    return maxProfit;
}

console.log(bestTime(arr))