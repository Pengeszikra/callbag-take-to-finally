# callbag-take-while

Callbag operator which emits values emitted by the source as long as each value satisfies the given predicate, and then completes as soon as predicate is not satisfied. Call lastly function when callbag is over.
This operator forked from: [Andarist: takeWhile](https://github.com/Andarist/callbag-take-while)

## Example

```js
import forEach from 'callbag-for-each'
import fromIter from 'callbag-from-iter'
import pipe from 'callbag-pipe'
import takeToFinally from 'callbag-take-to-finally'

pipe(
  fromIter([1, 2, 3, 4, 5, 6, 7]),
  takeToFinally(
    data => data < 4.3,
    data => console.log(`failed on test: ${data}`),
  ),
  forEach(console.log),
)

// log: 1, 2, 3, 4, "failed on test: 5"
```
