//!定义install方法 接口Vue作为参数  如果使用use注册插件，则所有组件都将备注册
//!统一导出
import zButton from './components/button/index'
import zTable from './components/table/index'
import zBar from './components/bar/index'
import zLine from './components/line/index'
import zChart from './components/zChart/index'
import zPie from './components/pie/index'
import zStackBar from './components/stackBar/index'
import zDashBoard from './components/dashboard/index'
import { setChartConfig } from './src/util/nomalChart'

let echarts = require('echarts')
const components = [zButton, zTable, zBar, zLine, zChart, zPie, zStackBar, zDashBoard]
const install = (app) => {
    components.forEach((e) => {
        app.use(e)
    })
    app.prototype.$zChart = {
        setChartConfig,
    }
    app.prototype.$echarts = echarts
}

// if (typeof window !== 'undefined' && window.Vue) {
//     install(window.Vue)
// }

const SHSNC = {
    install,
}
//支持按需导入
export { zButton, zTable, zBar, zLine, zChart, zPie, zStackBar, zDashBoard }
//导入ZPUI拿到所有的组件
export default SHSNC
