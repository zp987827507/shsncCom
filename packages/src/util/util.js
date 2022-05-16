/**
 * /*
 *
 * @format
 * @Author: zp
 * @LastEditors: zp
 * @Description: 工具类
 * @Date: 2019-03-28 08:53:24
 * @LastEditTime: 2019-03-28 11:30:49
 */

export default new (class Utils {
    constructor() {
        // 主要色调（用在图表当中）
        this.pColor = [
            '#54A0FF',
            '#FBC958',
            '#44CC75',
            '#FB7293',
            '#9D96F5',
            '#FF9F7F',
            '#0BD3FF',
            '#36D1A1',
            '#F0BBFF',
            '#8D80C7',
            '#E690D1',
            '#3E98F1',
            '#2AB0B1',
            '#91DD40',
            '#E062AE',
            '#B23F58',
        ]
    }
    /**
     * 获取时间单位中文
     *
     * @param type
     * @returns {string}
     */
    convertDateTypeToUnit(type) {
        switch (type) {
            case 'MONTH':
                return '月'
            case 'YEAR':
                return '年'
            case 'JD':
                return '季度'
            case 'LJ':
                return '月累计'
            case 'SQ':
                return '水期'
        }
        return ''
    }

    //深拷贝对象
    deepClone(data) {
        const type = this.judgeType(data)
        let obj
        if (type === 'array') {
            obj = []
        } else if (type === 'object') {
            obj = {}
        } else {
            // 不再具有下一层次
            return data
        }
        if (type === 'array') {
            // eslint-disable-next-line
            for (let i = 0, len = data.length; i < len; i++) {
                obj.push(this.deepClone(data[i]))
            }
        } else if (type === 'object') {
            // 对原型上的方法也拷贝了....
            // eslint-disable-next-line
            for (const key in data) {
                obj[key] = this.deepClone(data[key])
            }
        }
        return obj
    }

    //返回数据类型
    judgeType(obj) {
        // tostring会返回对应不同的标签的构造函数
        const toString = Object.prototype.toString
        const map = {
            '[object Boolean]': 'boolean',
            '[object Number]': 'number',
            '[object String]': 'string',
            '[object Function]': 'function',
            '[object Array]': 'array',
            '[object Date]': 'date',
            '[object RegExp]': 'regExp',
            '[object Undefined]': 'undefined',
            '[object Null]': 'null',
            '[object Object]': 'object',
        }
        if (obj instanceof Element) {
            return 'element'
        }
        return map[toString.call(obj)]
    }
})()
