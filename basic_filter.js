function getShortMessages (messages) {
  return messages.filter(function (element) {
    return element.message.length < 50;
  }).map(function (x) {
    return x.message;
  });
}

module.exports = getShortMessages;
