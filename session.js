class Session {
  setItem(key, value) {
    sessionStorage.setItem(key, value);
  }
  getItem(key) {
    sessionStorage.getItem(key);
  }
  removeItem(key) {
    sessionStorage.removeItem(key);
  }
  clearAll() {
    sessionStorage.clear();
  }
  getAll() {
    return sessionStorage;
  }
  map(callback) {
    for (var i = sessionStorage.length - 1; i >= 0; i--) {
      callback(sessionStorage.key(i), sessionStorage.getItem(sessionStorage.key(i)))
    }
  }
}

module.exports = Session;