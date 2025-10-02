export default function (templateArray, elementMap) {
    let _this = this, els = [], events = {}, elsMap = {}, calcEl = function (templateArray, id, link, $parent) {
        for (let i = 0; i < templateArray.length; i++) {
            let item = templateArray[i]
            let element = elementMap[item.name]

            let forScope = []
            if ("for" in item) {
                let forData = typeof item.for === "function" ? item.for(_this) : item.for
                for (let forIndex = 0; Array.isArray(forData) && forIndex < forData.length; forIndex++) {
                    forScope.push({
                        $parent,
                        $value: forData[forIndex],
                        $index: forIndex
                    })
                }
            } else {
                forScope = [{
                    $parent,
                    $value: void 0,
                    $index: -1
                }]
            }

            for (let j = 0; j < forScope.length; j++) {

                let curId = id + "-" + i
                let curLink = link + item.name + "#" + i + " "

                if ("for" in item) {
                    curId = curId + "for" + j
                    curLink = curLink.trim() + "for" + j + " "
                }

                let _this2 = {
                    ..._this,
                    ...forScope[j]
                }

                if ("if" in item) {
                    if (!(typeof item.if === "function" ? item.if(_this2) : item.if)) {
                        continue
                    }
                }

                let attr = {}

                // 用户设置的属性
                for (let key in item.attr) {
                    if (typeof item.attr[key] === "function") attr[key] = item.attr[key](_this2)
                    else attr[key] = item.attr[key]
                }

                // 未设置的检查是否有缺省值
                for (let key in element.attr) {
                    if (!(key in attr)) {
                        if (element.attr[key].required) {
                            // throw new Error(curLink + "\n属性 " + key + " 为必输项，未设置值")
                            console.error(curLink + "\n属性 " + key + " 为必输项，未设置值")
                            return
                        } else {
                            attr[key] = element.attr[key].default
                        }
                    }
                }

                let config = {}
                for (let key in item.config) {
                    if (typeof item.config[key] === "function") config[key] = item.config[key](_this2)
                    else config[key] = item.config[key]
                }

                els.push({
                    name: item.name,
                    id: curId,
                    attr,
                    config
                })

                elsMap[curId] = els.length
                events[curId] = item.event

                if (Array.isArray(item.children)) calcEl(item.children, curId, curLink, forScope[j])
            }
        }
    }
    calcEl(templateArray, "id", "", {})
    return { els, elsMap, events }
}