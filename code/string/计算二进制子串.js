// 输入: "00110011"
// 输出: 6
// 解释: 有6个子串具有相同数量的连续1和0：“0011”，“01”，“1100”，“10”，“0011” 和 “01”。

// '0011'0011
// 0'01'10011
// 00'1100'11
// 001'10'011
// 0011'0011'
// 00110'01'1

const countBinarySubstrings = str => {
  // 建立数据结构，堆栈 用来保存数据
  let r = []
  // 通过for循环控制程序运行的流程
  for (let i = 0; i < str.length - 1; i++) {
    let sub = match(str.slice(i))
    if (sub) {
      r.push(sub)
    }
  }
  return r
}

/**
 * 给定任意子输入都返回第一个符合条件的子串
 * @param {String} str
 * @return {String} 符合条件的子串
 */
function match(str) {
  // 找到连续的0或1
  let j = str.match(/^(0+|1+)/)[0]
  // 将上面的连续0或1 取反后 重复一样的字符串长度进行拼接
  let o = (j[0] ^ 1).toString().repeat(j.length)
  let reg = new RegExp(`^(${j}${o})`)
  if (reg.test(str)) {
    return RegExp.$1
  } else {
    return ''
  }
}

// console.log(countBinarySubstrings('00110011'))

export default countBinarySubstrings
