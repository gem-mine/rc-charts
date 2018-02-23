import React, { Component, PropTypes } from 'react'
import echartsLoader from './echartsLoader'
import hchartsLoader from './hchartsLoader'
const PlatformType = {
  ECHARTS: 'echarts',
  HCHARTS: 'hcharts'
}
export default class NDCharts extends Component {
  static defaultProps = {
    platformType: PlatformType.ECHARTS
  }
  static propTypes = {
    versions: PropTypes.string,
    modules: PropTypes.arrayOf(PropTypes.string),
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    platformType: PropTypes.oneOf(Object.values(PlatformType)),
    chartOptions: PropTypes.object.isRequired,
    setComponentInstance: PropTypes.func,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
  }
  static childContextTypes = {
    chartInstance: PropTypes.object,
    NDChart: PropTypes.object
  }
  getChildContext () {
    return {
      chartInstance: this.componentInstance,
      NDChart: this.NDChart
    }
  }
  static PlatformType = PlatformType
  componentInstance
  NDChart
  bindContainer = container => {
    this.container = container
  }
  createComponentInstance (NDChart, chartOptions) {
    return new NDChart.chart(this.container, chartOptions)
  }

  componentDidMount () {
    this.mounted_ = true
    let loaderNow = null
    switch (this.props.platformType) {
      case PlatformType.ECHARTS: {
        loaderNow = echartsLoader
        break
      }
      case PlatformType.HCHARTS: {
        loaderNow = hchartsLoader
        break
      }
      default: {
        loaderNow = echartsLoader
      }
    }
    loaderNow(this.props.versions, this.props.modules).then(NDChart => {
      if (!this.mounted_) {
        return
      }
      this.NDChart = NDChart
      this.componentInstance = this.createComponentInstance(NDChart, this.props.chartOptions)
      if (this.props.setComponentInstance) {
        this.props.setComponentInstance(this.componentInstance, NDChart)
      }
      this.forceUpdate() // Re-render now that componentInstance is created
    })
  }
  render () {
    const children = this.componentInstance ? this.props.children : null
    return (
      <div className={this.props.className} id={this.props.id} ref={this.bindContainer} style={this.props.style}>
        {children}
      </div>
    )
  }
}
