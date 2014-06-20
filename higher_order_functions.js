function functor (fn, n) {
  var i = 0;
  do {
    fn();
    i += 1;
  } while (i < n);
}

module.exports = functor;
