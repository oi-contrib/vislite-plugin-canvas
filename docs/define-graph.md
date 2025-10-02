# 自定义图形

基本语法如下：

```js
Canvas.defineElement(name, draw, attr)
```

以circle为例子：

```js
Canvas.defineElement("circle", function(attr){
    this.painter[attr.type + "Circle"](attr.cx, attr.cy, attr.radius)
}, {
    type: {
        type: "string"
    },
    cx: {
        type: "number"
    },
    cy: {
        type: "number"
    },
    radius: {
        type: "number"
    }
})
```

其中type可选值包括：string、number、color。属性可以通过default设置默认值，无默认值就是必输。