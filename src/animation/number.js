import deepValue from "../tool/deepValue"

export default function (newValue, oldValue) {
    return (deep) => deepValue(newValue, oldValue, deep)
}