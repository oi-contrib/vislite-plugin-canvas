import circle from "./circle"
import arc from "./arc"
import rect from "./rect"
import text from "./text"

let elements = [
    circle, arc, rect, text
]
export default function (defineElement) {
    for (let i = 0; i < elements.length; i++) {
        defineElement(elements[i].name, elements[i].draw, elements[i].attr)
    }

    // 后期考虑这里返回函数改造一下
    // 添加服务的依赖注入
    return defineElement
}