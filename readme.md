# memoize

## 功能：

缓存昂贵计算结果[https://en.wikipedia.org/wiki/memoization]

---

默认采用浅比较对比参数匹配`Object.is`；
可自定义比较函数如值比较：

```
memoize(someFunction,customEqualFunction)
```
