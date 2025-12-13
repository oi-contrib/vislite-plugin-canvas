import VISCanvas from "vislite/lib/Canvas/index.es"
import { animation } from "oipage/web/animation/index"
import { throttle } from "oipage/web/throttle/index"
import elementFactroy from "./element/index"
import animationMap from "./animation/index"
import useTemplate from "./template"
import resizeObserver from "./tool/resizeObserver"

// 元素集合
let elementMap = {}

// 对象
export default function Canvas(option) {
    option.el.style.overflow = "hidden"

    let painter = new VISCanvas(option.el)
    let info = painter.getInfo()
    let instance = {
        painter,
        data: option.data,
        width: info.width,
        height: info.height
    }

    let render = {
        els: [],
        elsMap: {},
        events: {}
    }

    // 事件
    for (let eventName of ["click", "dblclick", "mousemove"]) {
        painter.bind(eventName, function (regionName, x, y) {

            let event = {
                event: eventName,
                x, y,
                id: regionName || ""
            }

            if (render.events && render.events[regionName]) render.events[regionName][eventName]?.call(instance, event)

            // 全局事件
            if (option.event && option.event[eventName]) {
                option.event[eventName].call(instance, event)
            }
        })
    }

    // 修改数据
    let hadWill = false, stop
    instance.setData = function (newData) {
        for (let key in newData) {
            instance.data[key] = newData[key]
        }

        // 优化多次setData性能问题
        // 2025年12月9日 于南京
        if (hadWill) return
        hadWill = true

        setTimeout(function () {
            hadWill = false

            let newRender = useTemplate.call(instance, option.template, elementMap)

            // 这里需要考虑中途来新的动画
            stop = animation(function (deep) {
                instance.painter.clearRect(0, 0, instance.width, instance.height)
                for (let el of newRender.els) {
                    let oldIndex = render.elsMap[el.id]
                    instance.painter.reset().config(el.config)
                    if (oldIndex) {
                        let attrValue = {}, newAttr = el.attr, oldAttr = render.els[oldIndex - 1].attr, attr = elementMap[el.name].attr
                        for (let key in attr) {
                            if (attr[key].animation) {

                                // 这里应该缓存一下
                                attrValue[key] = attr[key].animation(newAttr[key], oldAttr[key])(deep)
                            } else {
                                attrValue[key] = el.attr[key]
                            }
                        }
                        elementMap[el.name].draw.call(instance, el.id, attrValue)
                    } else {
                        elementMap[el.name].draw.call(instance, el.id, el.attr)
                    }
                }
            }, 500, function () {
                render = newRender
            })

        })

    }

    // 监听画布大小改变
    resizeObserver(option.el, throttle(function () {

        painter = new VISCanvas(option.el)
        info = painter.getInfo()

        instance.width = info.width
        instance.height = info.height

        instance.painter.clearRect(0, 0, instance.width, instance.height)
        render = useTemplate.call(instance, option.template, elementMap)
        for (let el of render.els) {
            instance.painter.reset().config(el.config)
            elementMap[el.name].draw.call(instance, el.id, el.attr)
        }

    }, {
        keep: true
    }))

    return instance
}

// 挂载元素
Canvas.defineElement = elementFactroy(function (name, draw, attr) {

    let _attr = {}
    for (let name in attr) {
        let item = attr[name]

        _attr[name] = {
            required: !("default" in item), // 是否必输
        }

        // 默认值
        if ("default" in item) _attr[name].default = item.default

        // 过渡动画
        if (animationMap[item.type]) _attr[name].animation = animationMap[item.type]
    }

    elementMap[name] = {
        draw: function (uniqueId, attr) {
            this.painter.setRegion(uniqueId)
            draw.call(this, attr)
        },
        attr: _attr
    }
})