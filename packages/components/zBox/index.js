import zBox from "./index.vue"
zBox.install = (app) => {
    app.component(zBox.name, zBox)
}
export default zBox
