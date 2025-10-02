# 指令

## for

比如我们想绘制3个circle，半径分别为10、20、30，那么可以：

```js
template:[{
    for: _this => [10, 20, 30],
    name: "circle",
    attr: {
        ......
        radius: _this => _this.$value
    },
    ......
}]
```

添加for指令的地方，当前作用域就会多一个`$index`和`$value`属性，分别表示当前for条目的值和序号。

此外，你可以通过`$parent`来访问父作用域的值。

## if

如果希望动态控制一个元素是否显示：

```js
template:[{
    if: _this => true|false
    ......
}]
```