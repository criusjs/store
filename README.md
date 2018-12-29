# store


- test(cookie|localStore|db|websql)

- setItem(key, value)
- getItem(key)
- delItem(key)
- clearAll()
- getAll()


- usage

Store.use('local|session|cookie|db|sql');// 单独使用
Store.default('local|session|cookie|db|sql'); // 单例中使用配置，有默认配置
Store.test('local|session|cookie|db|sql') // 检测支持情况
Store.[setItem|removeItem|clearAll|getItem|getAll|map];

所有使用异步操作