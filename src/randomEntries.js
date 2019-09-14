import { isEmpty, isNil } from "./_utils"
import shuffleArray from "./shuffleArray"
import randomInt from "./randomInt"

export default (arr, n) => {
  if (isEmpty(arr)) {
    return
  }
  if (arr.length === 1) {
    return arr
  }
  const shuffled = shuffleArray(arr)
  if (isNil(n)) {
    return shuffled.slice(0, randomInt({ min: 1, max: arr.length - 1 }))
  }
  if (n >= arr.length) {
    return shuffled.slice(0, arr.length - 1)
  }
  return shuffled.slice(0, n)
}
