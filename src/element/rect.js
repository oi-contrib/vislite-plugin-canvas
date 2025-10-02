export default {
    name: "rect",
    draw: function (attr) {
        this.painter[attr.type + "Rect"](attr.x, attr.y, attr.width, attr.height)
    },
    attr: {
        type: {
            type: "string"
        },
        x: {
            type: "number"
        },
        y: {
            type: "number"
        },
        width: {
            type: "number"
        },
        height: {
            type: "number"
        }
    }

}