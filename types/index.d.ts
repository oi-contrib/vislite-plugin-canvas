import CanvasConfigType from "vislite/types/CanvasConfig"

interface templateItemType {
    name: string
    for?: any
    if?: any
    attr?: {
        [key: string]: any
    }
    event?: {
        [key: string]: (event: {
            event: string
            x: number
            y: number
        }) => void
    }
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