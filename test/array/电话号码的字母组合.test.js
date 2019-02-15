import letterCombinations from '../../code/array/电话号码的字母组合'

test(`letterCombinations('23')`, () => {
  expect(letterCombinations('23')).toEqual(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'])
})

test(`letterCombinations('456')`, () => {
  expect(letterCombinations('456')).toEqual([
    'gjn',
    'gjm',
    'gjo',
    'gkn',
    'gkm',
    'gko',
    'gln',
    'glm',
    'glo',
    'hjn',
    'hjm',
    'hjo',
    'hkn',
    'hkm',
    'hko',
    'hln',
    'hlm',
    'hlo',
    'ijn',
    'ijm',
    'ijo',
    'ikn',
    'ikm',
    'iko',
    'iln',
    'ilm',
    'ilo'
  ])
})
