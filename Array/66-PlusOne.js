// Given a non-negative integer represented as a non-empty array of digits, plus one to the integer.

// You may assume the integer do not contain any leading zero, except the number 0 itself.

// The digits are stored such that the most significant digit is at the head of the list.


// 大概意思就是：用一个数组表示一个非负整数，数组第一位是数字的最高位，数组中的元素都是0-9的数字，比如用a[3]表示123，那么a[0]=1,a[1]=2,a[2]=3;然后这个数加上1，得到一个新的数组，要求返回这个数组。

/**
 * @param {number[]} digits
 * @return {number[]}
 */
// [1,2,3]
let plusOne = digits => {
  if (!digits instanceof Array) {
    return;
  }  

  const CARRY = 1;

  

  for (let i = digits.length - 1; i >= 0; i--) {
    let sum = digits[i] + CARRY;
    if (sum === 10) {
      digits[i] = 0;
      CARRY = 1;
    } else {
      digits[i] = sum;
      carry = 0;
    }
  }

  if (carry === 1) {
    digits.unshift(1);
  }
  return digits;
}

console.log(plusOne([1,2,3]))