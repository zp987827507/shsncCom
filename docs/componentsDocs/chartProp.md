# 图表属性

### 自有属性

图表自身的属性，例如用于设置是否显示图例`showLegend`, 形态类型`type`，这样的属性被置于 `config` 内，每种图表的自有属性不完全相同，具体参数请参考具体图表配置

### 公有属性

每个图表要设置对应的宽和高

```html
<z-bar :data="data" style="width: 600px; height: 400px;"></z-bar>
```

'
| 配置项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| data | 数据 | object | -
| config | 配置项（每种图表的自有属性） | object | -
| option | 替换 echarts 默认配置 | object | -
| show-option | 是否打印 echarts 的配置项(控制台可以查看) | boolean | false
