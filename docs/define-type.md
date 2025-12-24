# 自定义类型

> v1.1.0 新增

基本语法如下：

```js
Canvas.defineType(name, animationFactory)
```

比如内在的number类型应该这样定义：

```js
Canvas.defineType("number", function(newValue, oldValue) {
    // 返回一个传递deep的函数，此函数返回此刻的值
    return (deep) => (newValue - oldValue) * deep + oldValue
})
```