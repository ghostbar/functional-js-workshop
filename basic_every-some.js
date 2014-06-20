function checkUsers (good) {
  return function (toCheck) {
    return toCheck.every(function (sUser) {
      return good.some(function (user) {
        return user.id === sUser.id;
      });
    });
  }
}

module.exports = checkUsers;
