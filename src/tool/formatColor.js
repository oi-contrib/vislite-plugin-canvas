import { getStyle } from "oipage/web/style/index"

let helpEl
export default function (color) {
    if (!helpEl) {
        helpEl = document.createElement("div")
        helpEl.style.position = "fixed"
        helpEl.style.width = "1px"
        helpEl.style.height = "1px"
        helpEl.style.left = "-100px"
        document.getElementsByTagName("body")[0].appendChild(helpEl)
    }
    helpEl.style.color = color

    let colorArray = getStyle(helpEl, "color").replace(/^rgba{0,1}\(/, "").replace(/ /g, "").replace(")", ",1").split(",")
    return [+colorArray[0], +colorArray[1], +colorArray[2], +colorArray[3]]
}