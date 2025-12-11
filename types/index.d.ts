import CanvasConfigType from "vislite/types/CanvasConfig"

interface eventArgType {
    event: string
    x: number
    y: number
    region: string
}

interface eventBackType {
    (event: eventArgType): void
}

type eventType = {

    /**
     * 点击
     */
    click?: eventBackType

    /**
     * 双击
     */
    dblclick?: eventBackType

    /**
     * 移动
     */
    mousemove?: eventBackType

}

interface templateItemType {
    name: string
    for?: any
    if?: any
    attr?: {
        [key: string]: any
    }
    event?: eventType
    config?: CanvasConfigType
    children?: Array<templateItemType>
}

export default class Canvas {
    constructor(option: {
        el?: HTMLElement
        data?: {
            [key: string]: any
        },
        template: Array<templateItemType>

        /**
       * 全局事件，可选
       */
        event?: eventType
    })

    /**
     * 修改数据
     * @param data 
     */
    setData(data: {
        [key: string]: any
    }): this

    /**
     * 定义元素
     * @param name 
     * @param draw 
     * @param attr 
     */
    static defineElement(name: string, draw: (attr: {
        [key: string]: any
    }) => void, attr: {
        [key: string]: {
            type: "number" | "string" | "color",
            default?: number | string
        }
    }): void
}