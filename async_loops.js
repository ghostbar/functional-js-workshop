function loadUsers (userIds, load, done) {
  var users = [];
  var acc = 0;
  userIds.forEach(function (ele, idx) {
    load(userIds[idx], function (res) {
      users[idx] = res;

      acc += 1;

      if (acc === userIds.length)
        return done(users);
    });
  });
}

module.exports = loadUsers;
