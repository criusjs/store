var db = openDatabase('websql', '1.0', '_data', 2 * 1024 * 1024);
db.transaction(function (ctx) {
  ctx.executeSql('CREATE TABLE IF NOT EXISTS _data (KEY text PRIMARY KEY,VALUE text)');
});
class WebSQL {
  setItem(key, value) {
    db.transaction(function (ctx) {
      ctx.executeSql('SELECT * FROM  _data WHERE KEY = ?', [key], (ctx, result) => {
        if (result.rows.length === 0) {
          ctx.executeSql('INSERT INTO _data (VALUE,KEY) VALUES (?,?)', [JSON.stringify(value), key]);
        } else {
          ctx.executeSql('UPDATE _data SET VALUE = ? WHERE KEY = ?', [JSON.stringify(value), key]);
        }
      });
    });
  }
  getItem(key, callback) {
    db.transaction(function (ctx) {
      ctx.executeSql('SELECT * FROM  _data WHERE KEY = ?', [key], (ctx, result) => {
        let item = result.rows.item(0);
        callback(item.KEY, JSON.parse(item.VALUE))
      });
    });
  }
  delItem(key) {
    db.transaction(function (ctx) {
      ctx.executeSql('DELETE FROM _data WHERE KEY = ?', [key]);
    });
  }
  clearAll() {
    db.transaction(function (ctx) {
      ctx.executeSql('DELETE FROM _data');
    });
  }

  getAll(callback) {
    db.transaction(function (ctx) {
      ctx.executeSql('SELECT * FROM  _data', [], (ctx, result) => {
        let _d = {};
        var len = result.rows.length;
        for (var i = 0; i < len; i++) {
          let item = result.rows.item(i);
          _d[item.KEY] = item.VALUE;
        }
        callback(_d);
      });
    });
  }

  map(callback) {
    db.transaction(function (ctx) {
      ctx.executeSql('SELECT * FROM  _data', [], (ctx, result) => {
        var len = result.rows.length;
        for (var i = 0; i < len; i++) {
          let item = result.rows.item(i);
          callback(item.KEY, item.VALUE)
        }
      });
    });
  }
}

module.exports = WebSQL;