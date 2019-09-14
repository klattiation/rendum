const defaultRange = { min = 0, max = 100 }

export default range => {
  const { min, max } = { ...defaultRange, ...range }
  return Math.random() * (max - min) + min
}
