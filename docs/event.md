# 事件

```js
new Canvas({
    template:[{
        event: {
            // 可用事件包括：click、dblclick、mousemove
            click(event) {
                /**
                 * event = {
                 *  event: string // 事件名称，比如click
                 *  x: number // 点击横坐标，相对画布左上角
                 *  y: number // 点击纵坐标，相对画布左上角
                 *  id: string // 点击元素唯一标志，v1.1.0 新增
                 * }
                 */
                console.log(event)
            }
        },
        ......
    }]
})
```

上面是针对特定元素注册事件，也可以对整个画布注册：

> v1.1.0 新增

```js
new Canvas({
    event: {
        // 可用事件和参数说明同上
        click(event) {
            console.log(event)
        }
    },
    ......
})
```