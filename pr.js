const nums1 = []
const nums2 = [2,3]
var findMedianSortedArrays = function (nums1, nums2) {
    let median = 0;
    let nums3 = [];
    let p1 = 0, p2 = 0;
    let m = nums1.length;
    let n = nums2.length
    for (let i = 0; i < m + n; i++) {
        if (p2 >= n || (p1 < m && nums1[p1] < nums2[p2])) {
            nums3[i] = nums1[p1]
            p1++
        }
        else {
            nums3[i] = nums2[p2]
            p2++
        }
    }
    
    if (nums3.length % 2 == 0) {
      let mid=nums3.length/2;
      median = (nums3[mid] + nums3[mid - 1]) / 2
    } else {
      console.log("comes odd")
        median = nums3[Math.trunc(nums3.length/2)]
    }
    return median;
};

console.log(findMedianSortedArrays(nums1,nums2))