const randomIndex = require("./randomIndex")

module.exports = arr => {
  const idx = randomIndex(arr)
  return idx >= 0 ? arr[idx] : undefined
}
