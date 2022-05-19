import zStackBar from './index.vue'
zStackBar.install = function (app) {
    app.component(zStackBar.name, zStackBar)
}
export default zStackBar
