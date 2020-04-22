import forEach from 'callbag-for-each'
import fromIter from 'callbag-from-iter'
import pipe from 'callbag-pipe'

import takeToFinally from '../src'

test('works', () => {
  const actual = []

  pipe(
    fromIter([1, 2, 3, 4, 5, 6, 7]),
    takeToFinally(
      data => data < 4.3,
      data => actual.push(`failed on test: ${data}`),
    ),
    forEach(data => actual.push(data)),
  )

  expect(actual).toEqual([1, 2, 3, 4, 'failed on test: 5'])
})
