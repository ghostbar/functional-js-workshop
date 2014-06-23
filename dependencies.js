function getDependencies (tree, result) {
  result = result || [];
  Object.keys(tree.dependencies || []).forEach(function (element) {
    var index = element + '@' + tree.dependencies[element].version;
    if (result.indexOf(index) === -1) // aka: if it does not exist in result
      result.push(index);
    getDependencies(tree.dependencies[element], result);
  });
  return result.sort();

}

module.exports = getDependencies;
