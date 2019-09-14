const randomInt = require("./randomInt")

module.exports = range => creator =>
  Array.from({ length: randomInt(range) }, (...args) => creator(args))
