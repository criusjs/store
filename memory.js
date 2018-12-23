var _data = {}
class Memory {
  setItem(key, value) {
    _data[key] = value;
  }
  getItem(key) {
    return _data[key];
  }
  removeItem(key) {
    delete _data[key];
  }
  clearAll() {
    _data = {};
  }
  getAll() {
    return _data;
  }
  map(callback) {
    Object.keys(_data).map(key => {
      callback(key, _data[key]);
    });
  }
}

module.exports = Memory;