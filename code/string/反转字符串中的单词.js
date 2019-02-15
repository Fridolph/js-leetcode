const fn = str => {
  // 1. 对字符串按空格进行分隔，保存数组，数组的先后顺序就是单词的顺序
  let arr = str.split(' ')
  // 2. 对数组进行遍历，每个元素进行反转，再将数组拼接为字符串并返回
  let ret = arr.map(v => v.split('').reverse().join('')).join(' ')
  return ret
}

const fn2 = str => str.split(' ').map(v => v.split('').reverse().join('')).join(' ')

const fn3 = str => str.match(/[\w']+/g).map(v => v.split('').reverse().join('')).join(' ')

export default fn3
