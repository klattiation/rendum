import randomInt from "./randomInt"

export default range => creator =>
  Array.from({ length: randomInt(range) }, (...args) => creator(args))
