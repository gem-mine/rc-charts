# 地图

---

基于多种报图平台（[echarts](http://echarts.baidu.com/)等）Javascript API 的通用报图组件。

## 何时使用

- 需要数据可视化图表的时候。

## 浏览器支持

IE 8+

## 安装

```bash
npm install @gem-mine/rc-charts --save
```

## 运行

```bash
# 默认开启服务器，地址为 ：http://local:8000/

# 能在ie9+下浏览本站，修改代码后自动重新构建，且能在ie10+运行热更新，页面会自动刷新
npm run start

# 构建生产环境静态文件，用于发布文档
npm run site
```

## 代码演示

```css
.react-chart-demo {
  width: 100%;
  height: 500px;
}
.react-chart-container-demo .button-demo {
  margin: 5px;
}
```

### ECharts 插件

echarts 初始化基础操作

```jsx
import RcReactCharts, { PlatformType } from "@gem-mine/rc-charts";

class App extends React.Component {
  chartInstance;
  RcChart;
  render() {
    const chartOptions = {
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
    };
    return (
      <div className="react-chart-container-demo">
        <RcReactCharts
          setComponentInstance={(chartInstance, RcChart) => {
            this.chartInstance = chartInstance;
            this.RcChart = RcChart;
          }}
          versions="5.1.0"
          chartOptions={chartOptions}
          className="react-chart-demo"
        />
        <button
          className="button-demo"
          onClick={() => {
            this.chartInstance.setOption({
              ...chartOptions,
              title: { text: "ECharts 入门示例" + Math.random().toFixed(2) }
            });
          }}
        >
          更新报图title
        </button>
      </div>
    );
  }
}
ReactDOM.render(<App />, mountNode);
```

### Highcharts 插件

Highcharts 初始化基础操作

```jsx
import RcReactCharts, { PlatformType } from "@gem-mine/rc-charts";

class App extends React.Component {
  chartInstance;
  RcChart;
  render() {
    const chartOptions = {
      chart: {
        type: "bar" //指定图表的类型，默认是折线图（line）
      },
      title: {
        text: "Highcharts 入门示例" // 标题
      },
      xAxis: {
        categories: ["苹果", "香蕉", "橙子"] // x 轴分类
      },
      yAxis: {
        title: {
          text: "吃水果个数" // y 轴标题
        }
      },
      series: [
        {
          // 数据列
          name: "小明", // 数据列名
          data: [1, 0, 4] // 数据
        },
        {
          name: "小红",
          data: [5, 7, 3]
        }
      ]
    };
    return (
      <div className="react-chart-container-demo">
        <RcReactCharts
          setComponentInstance={(chartInstance, RcChart) => {
            this.chartInstance = chartInstance;
            this.RcChart = RcChart;
          }}
          modules={["highcharts", "highcharts-more"]}
          chartOptions={chartOptions}
          className="react-chart-demo"
          style={{ height: 501 }}
          platformType={PlatformType.HCHARTS}
        />
        <button
          className="button-demo"
          onClick={() => {
            this.chartInstance.setTitle({ text: "Highcharts 入门示例" + Math.random().toFixed(2) });
          }}
        >
          更新报图title
        </button>
      </div>
    );
  }
}
ReactDOM.render(<App />, mountNode);
```

## API

| 参数                 | 说明                                                                                                                                                                                                                                                                                 | 类型                             | 默认值                              |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ----------------------------------- |
| setComponentInstance | 设置报图实例                                                                                                                                                                                                                                                                         | function(chartInstance, RcChart) | -                                   |
| chartOptions         | 报图初始化配置项                                                                                                                                                                                                                                                                     | Object                           | -                                   |
| platformType         | 报图平台类型：[echats（PlatformType.ECHARTS）](http://echarts.baidu.com/)，[highcharts（PlatformType.HCHARTS）](https://www.hcharts.cn/)                                                                                                                                           | PlatformType                     | PlatformType.ECHARTS                |
| versions             | 版本号。[echarts 的 cdn](http://www.bootcdn.cn/echarts/)；[highcharts 的 cdn](http://www.bootcdn.cn/highcharts/)                                                                                                                                                                     | string                           | echarts:'4.0.2'；highcharts:'6.0.2' |
| modules              | 需依次加载的报图库[echarts 的 cdn](http://www.bootcdn.cn/echarts/)；[highcharts 的 cdn](http://www.bootcdn.cn/highcharts/) | string                           | echarts:\["echarts.min"\]；highcharts:\["highcharts","js/modules/oldie"\] （其中"js/modules/oldie"为 highcharts 在 ie8 下默认加载的库）                                 |
| className            | 报图平台容器节点样式类名称                                                                                                                                                                                                                                                           | string                           | -                                   |
| id                   | 报图平台容器节点 ID                                                                                                                                                                                                                                                                  | string                           | -                                   |
| style                | 报图平台容器节点样式                                                                                                                                                                                                                                                                 | Object                           | -                                   |
