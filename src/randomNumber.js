const defaultRange = Object.freeze({ min: 0, max: 100 })

module.exports = range => {
  const { min, max } = { ...defaultRange, ...range }
  return Math.random() * (max - min) + min
}
