const count = require('text-count');

function project-tea() {
  const text = "P R O J E C T T E A"
  return {
    text,
    length: count.charCount(text)
  }
}


module.exports = project-tea
