---
order: 0
title: ECharts
---

echarts 初始化基础操作

```jsx
import NDReactCharts, { PlatformType } from "@sdp.nd/nd-charts";

class App extends React.Component {
  chartInstance;
  NDChart;
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
        <NDReactCharts
          setComponentInstance={(chartInstance, NDChart) => {
            this.chartInstance = chartInstance;
            this.NDChart = NDChart;
          }}
          chartOptions={chartOptions}
          className="react-chart-demo"
          style={{ height: 501 }}
          modules={["echarts.min"]}
          platformType={PlatformType.ECHARTS}
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

```css
.react-chart-demo {
  width: 100%;
  height: 500px;
}
.react-chart-container-demo .button-demo {
  margin: 5px;
}
```
