export default {
    name: "circle",
    draw: function (attr) {
        this.painter[attr.type + "Circle"](attr.cx, attr.cy, attr.radius)
    },
    attr: {
        type: {},
        cx: {
            type: "number"
        },
        cy: {
            type: "number"
        },
        radius: {
            type: "number"
        }
    }

}