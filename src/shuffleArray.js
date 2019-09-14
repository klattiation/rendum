export default arr => {
  if (Array.isArray(arr) && arr.length > 0) {
    return [...arr].sort(() => 0.5 - Math.random())
  }
}
