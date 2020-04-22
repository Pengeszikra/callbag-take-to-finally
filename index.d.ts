import { Source } from 'callbag'

export default function takeToFinally<I>(
  predicate: (data: I) => boolean,
  lastly: (data: I) => any,
): (source: Source<I>) => Source<I>
