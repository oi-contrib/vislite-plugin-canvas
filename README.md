# [@vislite/canvas](https://github.com/oi-contrib/vislite-plugin-canvas)
一个更灵活好用的数据驱动的画布

<p>
    <a href="https://zxl20070701.github.io/toolbox/#/npm-download?packages=@vislite/canvas&interval=7">
        <img src="https://img.shields.io/npm/dm/@vislite/canvas.svg" alt="downloads">
    </a>
    <a href="https://www.npmjs.com/package/@vislite/canvas">
        <img src="https://img.shields.io/npm/v/@vislite/canvas.svg" alt="npm">
    </a>
    <a href="https://github.com/oi-contrib/vislite-plugin-canvas/issues">
        <img src="https://img.shields.io/github/issues/oi-contrib/vislite-plugin-canvas" alt="issue">
    </a>
    <a href="https://github.com/oi-contrib/vislite-plugin-canvas" target='_blank'>
        <img alt="GitHub repo stars" src="https://img.shields.io/github/stars/oi-contrib/vislite-plugin-canvas?style=social">
    </a>
    <a href="https://github.com/oi-contrib/vislite-plugin-canvas">
        <img src="https://img.shields.io/github/forks/oi-contrib/vislite-plugin-canvas" alt="forks">
    </a>
     <a href="https://gitee.com/oi-contrib/vislite-plugin-canvas" target='_blank'>
        <img alt="Gitee repo stars" src="https://gitee.com/oi-contrib/vislite-plugin-canvas/badge/star.svg">
    </a>
    <a href="https://gitee.com/oi-contrib/vislite-plugin-canvas">
        <img src="https://gitee.com/oi-contrib/vislite-plugin-canvas/badge/fork.svg" alt="forks">
    </a>
</p>

<img src="https://nodei.co/npm/@vislite/canvas.png?downloads=true&amp;downloadRank=true&amp;stars=true" alt="NPM">

## 如何使用？

```
npm install --save @vislite/canvas
```

安装后，准备好渲染位置

```html
<div id="root" style="width:400px;height:400px"></div>
```

然后直接使用：

```js
import Canvas from "@vislite/canvas"

let canvas = new Canvas({
    el: document.getElementById("root"),
    data: {
        radius: 100
    },
    template: [{
        name: "circle",
        attr: {
            type: "fill",
            cx: 200,
            cy: 200,
            radius: _this => _this.data.radius
        },
        config: {
            fillStyle: "red"
        },
        event: {
            click(event) {
                console.log("你点击了我")
            }
        },
        children: []
    }]
})
```

这样，一个红色的球就绘制出来了。

如果希望改变球的大小，可以直接：

```js
canvas.data.radius = 200
```

还可以看出来，点击球的时候会触发点击事件，如果想在点击的时候修改球大小，就可以：

```js
......
event: {
    click(event) {
        // console.log("你点击了我")
        this.data.radius = 200
    }
},
......
```

此外，其中config属性和vislite的[canvas画笔配置](https://oi-contrib.github.io/VISLite/#/api/canvas/api)一致。

下面是更多功能明细：

- [指令（for、if）](./docs/directive.md)
- [事件](./docs/event.md)
- [图形（arc 弧、circle 圆、rect 矩形、text 文字）](./docs/graph.md)
- [自定义图形](./docs/define-graph.md)

## 版权

MIT License

Copyright (c) [zxl20070701](https://zxl20070701.github.io/notebook/home.html) 走一步，再走一步