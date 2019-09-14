module.exports = {
  isEmpty: arr => !Array.isArray(arr) || !arr.length,
  isNotEmpty: arr => Array.isArray(arr) && arr.length,
  isNil: v => v === undefined || v === null,
}
