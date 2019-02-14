// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:
// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

// 给定一组整数，两个数字的返回索引，这样它们就会加到一个特定的目标上。
// 您可能假设每个输入都有一个解决方案，并且您可能不使用相同的元素两次。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {result{}}
 */
var twoSum = function(nums, target) {  
  let i,
    len = nums.length,
    exsit = {};

  for (i = 0; i < len; i++) {
    // 进行判断，target - nums[i]能进行运算减就进入if语句
    // 反过来，当nums[i]大于nums的length时即退出循环，这个被减数不存在
    if (exsit[target - nums[i]] !== undefined) {
      // 返回结果数组，其包含 exsit[target - nums[i]]
      return [exsit[target - nums[i]], i];
    }
    // nums[i]为对象的key，exsit[key] 赋值为 当前的i 索引 
    exsit[nums[i]] = i
  }
};

// for循环每次执行的时候，以nums[i]的值为key，下标i为value存入exsit对象中。每次循环时会先去查找target-nums[i]有没有存在，如果存在，则返回i和值为target-nums[i]的下标，即exsit[target-nums[i]]（exsit中存的key为数组中元素值，value为数组元素下标）