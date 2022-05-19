import zDashBoard from './index.vue'
zDashBoard.install = function (app) {
    app.component(zDashBoard.name, zDashBoard)
}
export default zDashBoard
