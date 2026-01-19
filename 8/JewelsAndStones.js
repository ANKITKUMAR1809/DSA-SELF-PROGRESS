let jewels = "aA";
let stones = "aAAbbbb";

function numJewelsInStones(jewels, stones) {
  let jSet = new Set();
  for (let i = 0; i < jewels.length; i++) {
    jSet.add(jewels[i]);
  }
  let stoneAreJewels = 0;
  for (let i = 0; i < stones.length; i++) {
    if (jSet.has(stones[i])) {
      stoneAreJewels++;
    }
  }
  return stoneAreJewels;
}

console.log(numJewelsInStones(jewels, stones));

// timecomplexity = O(m+n);
// space complexity = O(1);
//  because set has only distinct elements and in character there should be either cpaital 26 letter  + small 26 letters or some symbols that is countable. that is why space complexity is constant;