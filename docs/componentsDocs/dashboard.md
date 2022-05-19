# 仪表盘

#### 代码

```html
<dash-board-md
    style="width: 200px;height: 200px;"
    :data="{ value: 60 }"
    :config="{
        color: '#27e4ae',
        fontSize:21
    }"
></dash-board-md>
```

#### 示例

<dash-board-md style="width: 200px;height: 200px;" :data="{ value: 60 }" :config="{
        color: '#27e4ae',
        fontSize:16
    }"></dash-board-md>

#### data 数据

| 数据项     | 简介       | 类型   | 备注 |
| ---------- | ---------- | ------ | ---- |
| data.value | 仪表盘比例 | number | 必须 |

#### config 配置项

| 配置项   | 简介     | 类型   | 备注                   |
| -------- | -------- | ------ | ---------------------- |
| color    | 数值颜色 | string | 默认为高亮绿色 #27e4ae |
| unit     | 数值单位 | string | 默认为 %               |
| min      | 最小刻度 | number | 默认为 0               |
| max      | 最大刻度 | number | 默认为 100             |
| fontSize | 字体大小 | number | 默认为 12              |
