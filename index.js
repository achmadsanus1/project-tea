const count = require('text-count');

function achmad() {
  const text = "A C H M A D"
  return {
    text,
    length: count.charCount(text)
  }
}


module.exports = Achmad
