//无数据时的配置项
import CONFIG from '../config/config_'
import _merge from 'lodash/merge'
import util from './util'
let echarts = require('echarts/lib/echarts')

export const getNoDataOption = () => {
    return {
        //backgroundColor: 'rgba(0, 0, 0, .2)',
        graphic: [
            {
                type: 'image',
                id: 'logo',
                right: 'center',
                top: 'center',
                z: -10,
                bounding: 'raw',
                origin: [CONFIG.IMG_NONE_W / 2, CONFIG.IMG_NONE_H / 2],
                style: {
                    image: CONFIG.IMG_NONE,
                    width: CONFIG.IMG_NONE_W,
                    height: CONFIG.IMG_NONE_H,
                    //opacity: 0.8
                },
            },
        ],
    }
}
//图例
export const LEGEND = () => {
    return {
        top: 10,
        itemWidth: 8,
        itemHeight: 8,
        icon: 'circle',
        // borderRadius: 0,
        // symbolKeepAspect: false,
        left: CONFIG.SHOW_TOOLBOX ? 'center' : 'center',
        padding: CONFIG.SHOW_TOOLBOX ? [0, 50, 0, 0] : 0,
        textStyle: {
            color: CONFIG.FONT_COLOR,
            fontSize: CONFIG.FONT_S,
            padding: [2, 0, 0, 0],
        },
    }
}
//获取颜色
const getColor = (color) => {
    if (!color || color === 'normalColor') {
        //返回图表常规配色
        return CONFIG.COLOR
    } else if (typeof color === 'string' && CONFIG[color]) {
        //返回指定配色
        return CONFIG[color]
    } else {
        return color
    }
}
//坐标轴样式
export const AXIS_STYLE = (isSplitShow) => {
    let splitShow = isSplitShow === 'y' ? false : true
    return {
        nameTextStyle: {
            color: CONFIG.FONT_COLOR,
            padding: [0, 0, -10, 0],
            fontSize: CONFIG.FONT_S,
        },
        axisLabel: {
            color: CONFIG.FONT_COLOR,
            fontSize: CONFIG.FONT_S,
        },
        axisTick: {
            lineStyle: {
                color: CONFIG.BORDER_COLOR,
                width: 1,
            },
            show: true,
        },
        splitLine: {
            show: splitShow,
            lineStyle: {
                type: 'dashed',
            },
        },
        axisLine: {
            lineStyle: {
                color: CONFIG.BORDER_COLOR,
                width: 1,
            },
            show: true,
        },
    }
}

//十六进制颜色转为rgb颜色
const getColorRgb = (color = '#fff') => {
    let pattern = /^#([0-9|a-f]{3}|[0-9|a-f]{6})$/
    color = color.toLowerCase()
    if (pattern.test(color)) {
        if (color.length === 4) {
            // 将三位转换为六位
            color = '#' + color[1] + color[1] + color[2] + color[2] + color[3] + color[3]
        }
        //处理六位的颜色值
        let colorNew = []
        for (let i = 1; i < 7; i += 2) {
            colorNew.push(parseInt('0x' + color.slice(i, i + 2)))
        }
        return colorNew
        //return 'RGB(' + colorNew.join(',') + ')';
    } else if (color.indexOf('rgb') > -1) {
        color = color.replace(/[rgba()]/g, '')
        return color.split(',').slice(0, 3)
    }
    return []
}
/**
 * 标准线
 *
 * @param {[]} data  标准线相关数据
 * @param {Object} [data[i].name] 标准线名称
 * @param {String} [data[i].value]    标准线对应数值
 * @param {Boolean} [data[i].color]    标准线对应颜色
 * @return {Object} [option] 标准线配置项
 */
const getMarkLine = (data) => {
    let lines = []
    data.forEach((v) => {
        lines.push({
            name: v.name,
            yAxis: v.value,
            itemStyle: {
                normal: {
                    color: v.color || '#f00',
                },
            },
        })
    })
    let markLine = {
        animation: false,
        symbolSize: 0,
        linStyle: {
            type: 'dotted',
            width: 2,
        },
        data: lines,
        label: {
            normal: {
                show: true,
                formatter: '{b}',
            },
        },
    }
    return markLine
}

//修改配置样式
export const setChartConfig = (opt = {}) => {
    _merge(CONFIG, opt)
}

/**
 * 柱状图
 * @param {Object} data 图表数据 必须,
 * @param {[]} data.xAxis x轴
 * @param {[]} data.series 必须
 * @param {Object} configObj 配置项 可选
 * @param configObj.el 图表绑定的dom元素 可选
 * @param configObj.color 颜色 可选
 * @param {Boolean} configObj.showLabel  是否显示数值 默认不显示
 * @param {String} configObj.unit  数值单位 可选
 * @param {Object}  opt 自定义图表option中的属性 可选
 * @return {Object} 图表配置项
 * */
export const renderBar = (data, configObj, opt) => {
    if (!data || !data.series || data.series.length === 0) {
        return getNoDataOption()
    }
    data = _merge({}, data)
    data.series.map((v) => {
        v.type = v.type || 'bar'
        if (v.type === 'line') {
            v.smooth = true
            v.symbol = 'circle'
        }
        v.barMaxWidth = '20'
        if (configObj.showLabel) {
            v.label = {
                show: true,
                position: 'top',
            }
        }
    })
    let option = {
        legend: LEGEND(),
        color: getColor(configObj.color),
        grid: {
            containLabel: true,
        },
        xAxis: {
            ...AXIS_STYLE('y'),
            data: data.xAxis,
            type: 'category',
        },
        yAxis: {
            ...AXIS_STYLE(),
            name: configObj.unit || '',
        },
        series: data.series,
        tooltip: {
            trigger: 'axis',
        },
    }
    if (opt) {
        _merge(option, opt)
    }

    if (configObj.el) {
        echarts.init(configObj.el).setOption(option, true)
    }

    return option
}

/**
 * 折线图
 * @param {Object} data 图表数据 必须,
 * @param {[]} data.xAxis x轴
 * @param {[]} data.yAxis y轴(与data.xAxis二选一)
 * @param {[]} data.series 必须
 * @param {Object} configObj 配置项 可选
 * @param configObj.el 图表绑定的dom元素 可选
 * @param configObj.color 颜色 可选
 * @param {Boolean} configObj.showLabel  是否显示数值 默认不显示
 * @param {Boolean} configObj.showFillArea 是否填充颜色
 * @param {String} configObj.unit  数值单位 可选 默认不显示
 * @param {Object}  opt 自定义图表option中的属性 可选
 * @return {Object} 图表配置项
 * */
export const renderLine = (data, configObj, opt) => {
    if (!data || !data.series || data.series.length === 0) {
        return getNoDataOption()
    }
    data = _merge({}, data)
    let hasBar = false //是否混合有柱型图
    let color = getColor(configObj.color)
    data.series.map((v, i) => {
        v.type = v.type || 'line'
        v.symbol = 'circle'
        if (v.type === 'bar') {
            hasBar = true
            v.barMaxWidth = 20
        }
        v.smooth = true
        if (configObj.showLabel) {
            v.label = {
                show: true,
                position: 'top',
            }
        }

        if (configObj.showFillArea) {
            let fillColor = getColorRgb(color[i]).concat(0.5)
            let fillColor_ = getColorRgb(color[i]).concat(0)
            v.areaStyle = {
                //区域填充样式
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: `rgba(${fillColor.join(',')})`,
                        },
                        {
                            offset: 1,
                            color: `rgba(${fillColor_.join(',')})`,
                        },
                    ]),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 0,
                },
            }
        }
    })
    let option = {
        legend: {
            ...LEGEND(),
            //itemWidth: hasBar ? 10 : 20
        },
        color: getColor(configObj.color),
        grid: {
            containLabel: true,
        },
        xAxis: {
            ...AXIS_STYLE('y'),
            data: data.xAxis,
            type: 'category',
            boundaryGap: hasBar,
        },
        yAxis: {
            ...AXIS_STYLE(),
            name: configObj.unit || '',
        },
        series: data.series,
        tooltip: {
            trigger: 'axis',
        },
    }

    if (configObj.markLine) {
        let markLine = getMarkLine(configObj.markLine)
        option.series[0].markLine = markLine
    }
    if (opt) {
        _merge(option, opt)
    }

    if (configObj.el) {
        echarts.init(configObj.el).setOption(option, true)
    }

    return option
}

/**
 * 饼图
 *
 * @param {[]} data   标题的series数据
 * @param {Object} configObj
 * @param {Object} [configObj.el] 图表绑定的dom元素，不传时返回option配置项
 * @param {String} [configObj.color]    颜色
 * @param {Boolean} [configObj.showLegend=false]    是否显示图例
 * @param {Boolean} [configObj.showLabel=true]    是否显示线条文字
 * @param {String} [configObj.title]    中间的标题
 * @param {String} [configObj.showNullLabel]    是否显示无数据项的连线标签 默认 false
 * @param {String} [configObj.subtext]    标题 一般放数值
 * @param {String} [configObj.type='circle']     半径  实心圆circle， 圆环ring  玫瑰图rose
 * @param {Object} [opt]   自定义图表option中的属性
 * @return {Object} [option] option配置项
 */
export const renderPie = (data, configObj, opt) => {
    if (!data || data.length === 0) {
        return getNoDataOption()
    }

    configObj.showLabel = configObj.showLabel !== false

    //半径
    if (configObj.type === 'ring') {
        configObj.radius = configObj.showLabel ? ['40%', '60%'] : ['50%', '70%']
    } else {
        configObj.radius = configObj.showLabel ? '60%' : '70%'
    }

    //无数据的部分不显示label和连线
    data.forEach((v, i) => {
        if (v && (!v.value || isNaN(v.value))) {
            data[i].value = 0
            if (!configObj.showNullLabel) {
                data[i].label = {
                    show: false,
                }
                data[i].labelLine = {
                    show: false,
                }
            }
        }
    })
    let option = {
        textStyle: {
            color: null, //避免全局字体颜色覆盖饼图颜色
        },
        legend: {
            show: configObj.showLegend,
            ...LEGEND(),
        },
        title: {
            left: 'center',
            top: 'center',
            text: configObj.title,
            subtext: configObj.subtext,
            textStyle: {
                lineHeight: CONFIG.FONT_L,
                color: CONFIG.FONT_COLOR,
                fontWeight: 400,
            },
            subtextStyle: {
                fontSize: CONFIG.FONT_L,
            },
        },
        color: getColor(configObj.color),
        tooltip: {
            formatter: function (v) {
                return v.name + '：' + v.value + '%'
            },
        },
        series: [
            {
                name: '',
                type: 'pie',
                radius: configObj.radius,
                roseType: configObj.type === 'rose',
                center: ['50%', '50%'],
                label: {
                    show: configObj.showLabel,
                },
                itemStyle: {
                    normal: {
                        //shadowColor: 'rgba(0,0,0,0.4)',
                        shadowBlur: 0,
                    },
                },
                labelLine: {
                    show: configObj.showLabel,
                },
                data: data,
            },
        ],
    }
    if (configObj.showLabel) {
        option.series[0].label = {
            show: true,
            formatter: function (params) {
                return params.name + ':' + params.value + '%'
            },
        }
    }
    if (opt) {
        _merge(option, opt)
    }

    if (configObj.el) {
        echarts.init(configObj.el).setOption(option, true)
    }

    return option
}

/**
 * 堆叠图
 * @param {Object} data 图表数据 必须,
 * @param {[]} data.xAxis x轴
 * @param {[]} data.yAxis y轴(与data.xAxis二选一)
 * @param {[]} data.series 必须
 * @param {Object} configObj 配置项 可选
 * @param configObj.el 图表绑定的dom元素 可选
 * @param configObj.color 颜色 可选
 * @param {String} configObj.unit  数值单位 可选 默认%
 * @param {Object}  opt 自定义图表option中的属性 可选
 * @return {Object} 图表配置项
 * */
export const renderStackBar = (data, configObj, opt) => {
    if (!data || !data.series || data.series.length === 0) {
        return getNoDataOption()
    }

    let unit = configObj.unit === undefined ? '%' : configObj.unit
    let legend = []
    data.series.map((v) => {
        legend.push(v.name)
        v.stack = 'one'
        v.type = 'bar'
        v.barWidth = '60%'
        v.barMaxWidth = 20
    })

    let option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'none',
            },
        },
        grid: {
            containLabel: true,
        },
        color: getColor(configObj.color),
        legend: LEGEND(),
        yAxis: {
            ...AXIS_STYLE(),
            type: data.yAxis ? 'category' : 'value',
            data: data.yAxis || null,
            name: data.yAxis ? '' : unit,
            axisLabel: {
                textStyle: {
                    fontSize: CONFIG.FONT_S,
                },
                interval: data.yAxis ? 0 : null,
            },
        },
        xAxis: {
            ...AXIS_STYLE('y'),
            type: data.xAxis ? 'category' : 'value',
            data: data.xAxis || null,
            name: data.xAxis ? '' : unit,
            axisLabel: {
                textStyle: {
                    fontSize: CONFIG.FONT_S,
                },
                interval: data.xAxis ? 0 : null,
            },
        },
        series: data.series,
    }

    if (opt) {
        _merge(option, opt)
    }

    if (configObj.el) {
        echarts.init(configObj.el).setOption(option, true)
    }

    return option
}

/**
 * 仪表盘
 * configObj  Object
 *   属性如下：
 *   data  Object  图表数据 必须,
 *       包含xAxis或yAxis二选一
 *       series 必须
 *   el 图表绑定的dom元素 可选 不传时返回option配置项
 *   color  Arrway  颜色 可选
 *   unit   String  数值单位 可选 默认%
 *   max: Number 最大刻度
 *   min: Number 最小刻度
 * opt Object  自定义图表option中的属性
 *
 * config中配置color 色值为字体色值
 * */

export const dashboardchart = (configObj, opt) => {
    let fontColor = '#27e4ae'
    if (configObj.color) {
        fontColor = configObj.color
    }
    if (configObj.max === undefined || isNaN(configObj.max)) {
        configObj.max = 100
    }

    if (configObj.min === undefined || isNaN(configObj.min)) {
        configObj.min = 0
    }
    configObj.unit = configObj.unit || '%'
    configObj.fontSize = configObj.fontSize || 12
    let option = {
        tooltip: {
            formatter: (value) => value.value + configObj.unit,
        },
        series: [
            {
                name: '',
                type: 'gauge',
                radius: '80%',
                center: ['50%', '50%'],
                min: configObj.min,
                max: configObj.max,
                splitLine: { show: false },
                axisTick: { show: false },
                axisLine: {
                    lineStyle: {
                        width: 15,
                        color: [[1.0, fontColor]],
                    },
                },
                progress: {
                    show: true,
                    overlap: false,
                    roundCap: false,
                    clip: false,
                    itemStyle: {
                        borderWidth: 0,
                    },
                },
                pointer: {
                    show: true,
                    width: 8,
                    itemStyle: {
                        color: fontColor,
                    },
                },
                axisLabel: {
                    show: false,
                },
                itemStyle: {
                    color: '#e4e4e4',
                    borderWidth: 0,
                },
                detail: {
                    fontSize: configObj.fontSize,
                    formatter: '{value}' + configObj.unit,
                },
                data: [{ value: configObj.data.value }],
            },
        ],
    }
    if (opt) {
        _merge(option, opt)
    }

    if (configObj.el) {
        echarts.init(configObj.el).setOption(option, true)
    }

    return option
}
