class Local {
  setItem(key, value) {
    localStorage.setItem(key, value);
  }
  getItem(key) {
    localStorage.getItem(key);
  }
  removeItem(key) {
    localStorage.removeItem(key);
  }
  clearAll() {
    localStorage.clear();
  }
  getAll() {
    return localStorage;
  }
  map(callback) {
    for (var i = localStorage.length - 1; i >= 0; i--) {
      callback(localStorage.key(i), localStorage.getItem(localStorage.key(i)))
    }
  }
}

module.exports = Local;
// IE 9          > 4999995 + 5 = 5000000
// firefox 22.0 > 5242875 + 5 = 5242880
// chrome  28.0  > 2621435 + 5 = 2621440
// safari  5.1   > 2621435 + 5 = 2621440
// opera   12.15 > 5M （超出则会弹出允许请求更多空间的对话框）