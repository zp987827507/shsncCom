import zChart from './index.vue'
zChart.install = (app) => {
    app.component(zChart.name, zChart)
}
export default zChart
