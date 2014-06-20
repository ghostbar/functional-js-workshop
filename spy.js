function Spy (target, method) {
  var orig = target[method];

  var res = {
    count: 0
  };

  target[method] = function () {
    res.count += 1;
    return orig.apply(this, arguments);
  };

  return res;
}

module.exports = Spy;
