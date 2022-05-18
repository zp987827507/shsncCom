import zPie from './index.vue'
zPie.install = function (app) {
    app.component(zPie.name, zPie)
}
export default zPie
