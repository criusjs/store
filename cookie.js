function _has(key) {
  return (new RegExp("(?:^|;\\s*)" + escape(key).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie)
}

class Cookie {

  setItem(key, data, expires, path) {
    if (!key) {
      return
    }
    document.cookie = escape(key) + "=" + escape(data) + "; expires=" + expires + "; path=" + path;
  }
  getItem(key) {
    if (!key || !_has(key)) {
      return null
    }
    var regexpStr = "(?:^|.*;\\s*)" +
      escape(key).replace(/[\-\.\+\*]/g, "\\$&") +
      "\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*"
    return unescape(document.cookie.replace(new RegExp(regexpStr), "$1"))
  }
  removeItem(key) {
    if (!key || !_has(key)) {
      return
    }
    document.cookie = escape(key) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/"
  }
  clearAll() {

  }
  map(callback) {
    var cookies = document.cookie.split(/; ?/g)
    for (var i = cookies.length - 1; i >= 0; i--) {
      if (!trim(cookies[i])) {
        continue
      }
      var kvp = cookies[i].split('=')
      var key = unescape(kvp[0])
      var val = unescape(kvp[1])
      callback(val, key)
    }
  }
}

module.exports = Cookie;