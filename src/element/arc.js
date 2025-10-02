export default {
    name: "arc",
    draw: function (attr) {
        this.painter[attr.type + "Arc"](attr.cx, attr.cy, attr.r1, attr.r2, attr.beginDeg, attr.deg)
    },
    attr: {
        type: {
            type: "string"
        },
        cx: {
            type: "number"
        },
        cy: {
            type: "number"
        },
        r1: {
            type: "number"
        },
        r2: {
            type: "number"
        },
        beginDeg: {
            type: "number"
        },
        deg: {
            type: "number"
        }
    }

}