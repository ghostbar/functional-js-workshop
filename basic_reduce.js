function countWords (strings) {
  return strings.reduce(function (a, b) {
    a[b] = ++a[b] || 1;
    return a;
  }, {});
}

module.exports = countWords;
