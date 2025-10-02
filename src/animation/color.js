import formatColor from "../tool/formatColor"
import deepValue from "../tool/deepValue"

export default function (newValue, oldValue) {

    let newColor = formatColor(newValue)
    let oldColor = formatColor(oldValue)

    return function (deep) {
        return `rgba(${Math.round(deepValue(newColor[0], oldColor[0], deep))},${Math.round(deepValue(newColor[1], oldColor[1], deep))},${Math.round(deepValue(newColor[2], oldColor[2], deep))},${deepValue(newColor[3], oldColor[3], deep).toFixed(2)})`
    }
}