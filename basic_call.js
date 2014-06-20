function count() {
  var res = Array.prototype.slice.call(arguments).filter(function (object) {
    return Object.prototype.hasOwnProperty.call(object, 'quack');
  });

  return res.length;
}

module.exports = count;
