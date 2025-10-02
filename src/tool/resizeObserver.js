let observer

const attrValueToCallback = {}
let uniqueid = 0

export default function (el, callback) {

    try {

        if (!observer) {
            observer = new ResizeObserver(entries => {
                for (const entry of entries) {
                    attrValueToCallback[(entry.target)._resize_observer_]()
                }
            })
        }

        uniqueid++

        el._resize_observer_ = uniqueid
        attrValueToCallback[uniqueid] = callback

        observer.observe(el)

        return function () {
            if (observer) {
                observer.unobserve(el)
                delete attrValueToCallback[(el)._resize_observer_]
            }
        }

    } catch (e) {
        callback()

        // 如果浏览器不支持此接口
        console.error('ResizeObserver undefined!')
    }
}