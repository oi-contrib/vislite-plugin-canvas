export default {
    name: "text",
    draw: function (attr) {
        if (attr.width > 0) {
            this.painter[attr.type + "Texts"](attr.text, attr.x, attr.y, attr.width, attr.lineHeight, attr.deg)
        } else {
            this.painter[attr.type + "Text"](attr.text, attr.x, attr.y, attr.deg)
        }
    },
    attr: {
        type: {
            type: "string"
        },
        text: {
            type: "string"
        },
        x: {
            type: "number"
        },
        y: {
            type: "number"
        },
        deg: {
            type: "number",
            default: 0
        },
        width: {
            type: "number",
            default: -1
        },
        lineHeight: {
            type: "number",
            default: 1.2
        }
    }

}