const pkg = require("./package.json")
const pluginNodeResolve = require("@rollup/plugin-node-resolve")

module.exports = {
    input: "./src/index.js",
    output: {
        name: 'Canvas',
        file: "./dist/canvas.js",
        format: "umd",
        banner: `/*!
 * @vislite/canvas v${pkg.version}
 * git+https://github.com/oi-contrib/vislite-plugin-canvas.git
 */`
    },
    plugins: [pluginNodeResolve()]
}
