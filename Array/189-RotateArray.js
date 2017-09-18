// Rotate an array of n elements to the right by k steps.

// For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].

// Note:
// Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 本以为这样很简单就解决了 …… 结果报错，意思好像是说 不要返回值，直接操作nums
// var rotate = function(nums, k) {
//   return nums.slice(k, nums.length).concat(nums.slice(0, k))
// }
// rotate([1,2,3,4,5,6,7], 3);


// 于是弄了半天…… 最后参考了下网上的答案, 貌似明白了题目的意思
var rotate = function(nums, k) {
  let i, 
    k = k % nums.length;
  
  for (; i < k; i++) {
    nums.unshift(nums.pop())
  }
}

rotate([1,2,3,4,5,6,7], 3);

