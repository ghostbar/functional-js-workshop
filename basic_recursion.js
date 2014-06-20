function reduce (array, fn, initial) {
  function reduceOne (idx, val) {
    if (idx > array.length - 1)
      return val;

    return reduceOne(idx + 1, fn(val, array[idx], idx, array));
  }
  return reduceOne(0, initial);
}

module.exports = reduce;
