# 圆柱图

### 公共代码片段

```html
<script>
    export default {
        name: 'about',
        data() {
            return {
                data: {
                    xAxis: ['system io', 'user io', 'cluster', 'commit', 'cpu'],
                    data: [26, 22, 15, 8, 5],
                },
            }
        },
    }
</script>
```

### 示例

##### 1.基本

```html
<z-cylinder-bar :data="data" style="width: 600px; height: 400px;"></z-cylinder-bar>
```

<cylinder-md
        :data="data"
        style="width: 600px; height: 400px;"
    ></cylinder-md>

##### 2.设置颜色、数值单位和柱宽

```html
<z-cylinder-bar
    :data="data"
    :config="{
        color: 'normalColor',
        barWidth: 50,
        unit: '%'
    }"
    style="width: 500px; height: 300px;"
></z-cylinder-bar>
```

<cylinder-md
        :data="data"
        :config="{
            barWidth: 50,
            color: 'normalColor',
            unit: '%'
        }"
        style="width: 600px; height: 400px;"
    ></cylinder-md>

<script>
    export default {
        name: 'about',
        data() {
            return {
                data: {
                    xAxis: ['system io', 'user io', 'cluster', 'commit', 'cpu'],
                    data: [26, 22, 15, 8, 5],
                },
            }
        },
    }
</script>

#### data 数据

| 数据项     | 简介         | 类型  | 备注 |
| ---------- | ------------ | ----- | ---- |
| data.xAxis | x 轴类目数据 | array | 必须 |
| data.data  | 数据数组     | array | 必须 |

#### config 配置项

| 配置项   | 简介     | 类型          | 备注                                                                      |
| -------- | -------- | ------------- | ------------------------------------------------------------------------- |
| color    | 颜色     | array，string | 默认使用常规配色， 指定颜色如["#f00", "#00f"]， 或如"normalColor"指定配色 |
| unit     | 数值单位 | string        | 默认不显示                                                                |
| barWidth | 柱宽     | number        | 默认为 30                                                                 |
