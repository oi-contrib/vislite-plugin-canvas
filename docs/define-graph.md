# 自定义图形

基本语法如下：

```js
Canvas.defineElement(name, draw, attr)
```

以circle为例子：

```js
// attr表示当前元素的真实属性值
// deep表示滴答轮询动画进度，0-1，请和动画区分（ v1.1.0 新增 ）
Canvas.defineElement("circle", function(attr, deep){
    this.painter[attr.type + "Circle"](attr.cx, attr.cy, attr.radius)
}, {
    type: {},
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

其中type可选值包括：不设置（表示无类型）、number、color。属性可以通过default设置默认值，无默认值就是必输。