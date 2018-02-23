---
order: 1
title: Highcharts
---

Highcharts 初始化基础操作

```jsx
import NDReactCharts, { PlatformType } from "@sdp.nd/nd-charts";

class App extends React.Component {
  chartInstance;
  NDChart;
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
        <NDReactCharts
          setComponentInstance={(chartInstance, NDChart) => {
            this.chartInstance = chartInstance;
            this.NDChart = NDChart;
          }}
          chartOptions={chartOptions}
          className="react-chart-demo"
          style={{ height: 501 }}
          versions="6.0.2"
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

```css
.react-chart-demo {
  width: 100%;
  height: 500px;
}
.react-chart-container-demo .button-demo {
  margin: 5px;
}
```
