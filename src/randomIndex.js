module.exports = arr =>
  Array.isArray(arr) && arr.length
    ? Math.floor(Math.random() * arr.length)
    : undefined
