import CanvasConfigType from "vislite/types/CanvasConfig"
import CanvasType from "vislite/types/Canvas"

interface eventArgType {
    event: string
    x: number
    y: number
    id: string
}

interface eventBackType {
    (this: Canvas, event: eventArgType): void
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

interface _thisType extends Canvas {

    /**
     * for循环值
     */
    $value: any

    /**
     * for循环序号
     */
    $index: number

    /**
     * 父元素
     */
    $parent:_thisType
}

interface templateItemType {
    name: string
    for?: any
    if?: any
    attr?: {
        [key: string]: (_this: _thisType) => void | any
    }
    event?: eventType
    config?: CanvasConfigType | {
        [key: string]: (_this: _thisType) => any
    },
    children?: Array<templateItemType>
}

interface optionDataType {
    [key: string]: any
}

export default class Canvas {
    constructor(option: {
        el?: HTMLElement

        /**
         * 动画时长，可选
         */
        time?: number

        /**
         * 数据，可选
         */
        data?: optionDataType,

        /**
         * 生命周期，可选
         */
        lifecycle?: {

            /**
             * 画布大小改变后
             */
            resized?: (this: Canvas) => void
        }

        /**
         * 视图模板
         */
        template: Array<templateItemType>

        /**
         * 全局事件，可选
         */
        event?: eventType
    })

    /**
     * 数据值
     */
    data: optionDataType

    /**
     * 画笔
     */
    painter: CanvasType

    /**
     * 画布宽
     */
    width: number

    /**
     * 画布高
     */
    height: number

    /**
     * 动画时长
     */
    time: number

    /**
     * 修改数据
     * @param data 
     */
    setData(data: {
        [key: string]: any
    }): this

    /**
     * 是否完成大小初始化
     */
    sized: boolean

    /**
     * 开启滴答轮询动画
     * @param time 可选，表示滴答轮询动画周期时长
     */
    startDida(time?: number): this

    /**
     * 关闭滴答轮询动画
     */
    stopDida(): this

    /**
     * 定义元素
     * @param name 
     * @param draw 
     * @param attr 
     */
    static defineElement(name: string, draw: (this: Canvas, attr: {
        [key: string]: any
    }) => void, attr: {
        [key: string]: {
            type: string,
            default?: any
        }
    }): Canvas

    /**
     * 定义类型
     * @param name 
     * @param animationFactory 
     */
    static defineType(name: string, animationFactory: (newValue: any, oldValue: any) => ((deep: number) => any)): Canvas
}