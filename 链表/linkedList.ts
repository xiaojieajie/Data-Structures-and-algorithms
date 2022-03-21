function defaultEquals<T>(a: T, b: T) {
  return a === b
}

export class LinkedList {
  count: number
  head: undefined
  equalsFn: <T>(a: T, b: T) => boolean
  constructor(equalsFn = defaultEquals) {
    this.count = 0
    this.head = undefined
    this.equalsFn = equalsFn
  }
}
