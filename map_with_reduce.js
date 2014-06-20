function map (array, fn) {
  return array.reduce(function (acum, item, index, array) {
    return acum.concat(fn(item, index, array));
  }, []);
}

module.exports = map;
