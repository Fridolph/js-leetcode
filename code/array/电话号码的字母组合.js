// 输入："23"
// 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

/**
 * @param {string} digits
 * @return {Array<string>}
 */
const letterCombinations = digits => {
  let arr = digitsToLetter(digits)
  let ret = combine(arr)
  return ret
}

function digitsToLetter(digits) {
  // 1. 建立电话号码键盘映射
  let map = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'nmo', 'pqrs', 'tuv', 'wxyz']
  // 2. 把输入字符串按单字符分隔 , 变为数组 '234' => ['2', '3', '4']
  let numArr = digits.split('')

  // 3. 保存键盘映射后的字母内容, 如 23 => ['abc', 'def']
  let ret = []
  numArr.forEach(v => {
    if (map[v]) {
      ret.push(map[v])
    }
  })

  return ret
}
// console.log(digitsToLetter('23')) // ['abc', 'def']

function combine(arr) {
  // 临时变量用来保存前两个组合的结果
  let temp = []
  // 最外层的循环是遍历第一个元素，里层的循环是遍历第二个元素
  for (let i = 0; i < arr[0].length; i++) {
    for (let j = 0; j < arr[1].length; j++) {
      temp.push(`${arr[0][i]}${arr[1][j]}`)
    }
  }
  arr.splice(0, 2, temp)
  if (arr.length > 1) {
    combine(arr)
  } else {
    return temp
  }
  return arr[0]
}

// console.log(letterCombinations('456'));

export default letterCombinations
