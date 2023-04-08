# http 缓存

## 强缓存

浏览器检查强缓存的方式主要有两个字段

- HTTP/1.0 时期使用`Expires`
- HTTP/1.1 时期使用`Cache-Control`

### Expires

`Expires`字面意思是有效期，所以它表示的是一个具体时间，例如：

```md
Expires: Wed, Nov 11 2020 08:00:00 GMT
```

表示的是这个资源将在 2020 年 11 月 11 日 8 点过期，过期就得重新向服务器发送请求

有趣的是，通常情况下服务器的时间与客户端的时间其实并不一致的，那么如果设置了`Expires`字段就有很可能造成缓存失效，因此这种方式并不确定，所以在 HTTP/1.1 被放弃了

### Cache-Control

放弃了`Expires`之后，HTTP1.1 采用了`Cache-Control`这个重要规则，它设置了一个具体的过期时长，其中的一个属性是`max-age`

```md
Cache-Control: max-age=300
```

表示当前资源会在 300s 后过期

`Cache-Control`不仅仅含有一个`max-age`的属性，它还有很多用法，还可以采用组合的方式：

```md
Cache-Control: public, max-age=300
```

一些常用指令：

- public: 客户端和代理服务器都可以缓存，响应可以被中间任何一个节点缓存
- private: 这个是`Cache-Control`的默认值，只有客户端可以缓存，中间节点不允许缓存
- no-cache: 表示不进行强缓存验证，而是用协商缓存来验证
- no-store: 所有内容都不会被缓存，既不适用强缓存，也不使用协商缓存
- max-age: 表示多久时间之后过期
- s-max-age: 作用同 max-age,但是表示代理缓存，且优先级更高
- max-state: 能容忍的最大过期时间
- min-fresh: 能容忍的最小新鲜度

**对比**

1. `Expires`产于 HTTP/1.0, 而`Cache-Control`产于`HTTP/1.1`
2. `Expires`设置的是一个具体的时间, `Cache-Control`可以设置除时间以外的其他属性
3. 两者同时存在时，`Cache-Control`优先级更高
4. 在不支持`HTTP/1.1`的环境下, `Expires`就会发挥作用，所以现阶段的存在是为了做一些兼容处理

## 协商缓存
