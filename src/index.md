---
category: Components
subtitle: 报图
type: Data Display
title: NDCharts
---

通用报图组件。

## 何时使用

* 需要显示或获取空间数据的时候。

## API

```jsx
import NDReactCharts from "@sdp.nd/nd-charts";
<NDReactCharts
  style={{ height: 500 }}
  chartOptions={{
    title: {
      text: "ECharts 入门示例"
    },
    tooltip: {},
    legend: {
      data: ["销量"]
    },
    xAxis: {
      data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
    },
    yAxis: {},
    series: [
      {
        name: "销量",
        type: "bar",
        data: [5, 20, 36, 10, 10, 20]
      }
    ]
  }}
/>;
```

| 参数                 | 说明                                                                                                                                                                                  | 类型                             | 默认值                                                                |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | --------------------------------------------------------------------- |
| setComponentInstance | 设置报图实例                                                                                                                                                                          | function(chartInstance, NDChart) | -                                                                     |
| chartOptions         | 报图初始化配置项                                                                                                                                                                      | Object                           | -                                                                     |
| platformType         | 报图平台类型：[echats（PlatformType.ECHARTS）](http://echarts.baidu.com/)，[highcharts（PlatformType.HCHARTS））](https://www.hcharts.cn/)                                            | PlatformType                     | PlatformType.ECHARTS                                                  |
| versions             | 版本号。[echarts 的 cdn](http://www.bootcdn.cn/echarts/)；[highcharts 的 cdn](http://www.bootcdn.cn/highcharts/)                                                                      | string                           | echarts:'4.0.2'；highcharts:'6.0.2'                                   |
| modules              | 按需加载的报图库，其中"js/modules/oldie"为 highcharts 在 ie8 下默认加载的库。[echarts 的 cdn](http://www.bootcdn.cn/echarts/)；[highcharts 的 cdn](http://www.bootcdn.cn/highcharts/) | string                           | echarts:["echarts.min"]；highcharts:["highcharts","js/modules/oldie"] |
| className            | 报图平台容器节点样式类名称                                                                                                                                                            | string                           | -                                                                     |
| id                   | 报图平台容器节点 ID                                                                                                                                                                   | string                           | -                                                                     |
| style                | 报图平台容器节点样式                                                                                                                                                                  | Object                           | -                                                                     |
