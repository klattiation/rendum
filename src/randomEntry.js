import randomIndex from "./randomIndex"

export default arr => {
  const idx = randomIndex(arr)
  return idx >= 0 ? arr[idx] : undefined
}
