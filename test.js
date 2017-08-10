var plusOne = function (digits) {
  var carry = 1;
  for (var i = digits.length - 1; i >= 0; i--) {
    var sum = digits[i] + carry;
    if (sum === 10) {
      digits[i] = 0;
      carry = 1;
    } else {
      digits[i] = sum;
      carry = 0;
    }
  }
  if (carry === 1) {
    digits.unshift(1);
  }
  return digits;
};
console.log(plusOne([04,3,02,01]));