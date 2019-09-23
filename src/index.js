import React, { Component } from 'react'
import PropTypes from 'prop-types'
import echartsLoader from './echartsLoader'
import hchartsLoader from './hchartsLoader'
const PlatformType = {
  ECHARTS: 'echarts',
  HCHARTS: 'hcharts'
}
export default class RcCharts extends Component {
  static defaultProps = {
    platformType: PlatformType.ECHARTS
  }
  static propTypes = {
    url: PropTypes.string,
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
    RcChart: PropTypes.object
  }
  getChildContext () {
    return {
      chartInstance: this.componentInstance,
      RcChart: this.RcChart
    }
  }
  static PlatformType = PlatformType
  componentInstance
  RcChart
  bindContainer = container => {
    this.container = container
  }
  createComponentInstance (RcChart, chartOptions) {
    const Chart = RcChart.chart
    return new Chart(this.container, chartOptions)
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
    loaderNow(this.props.url, this.props.versions, this.props.modules).then(RcChart => {
      if (!this.mounted_) {
        return
      }
      this.RcChart = RcChart
      this.componentInstance = this.createComponentInstance(RcChart, this.props.chartOptions)
      if (this.props.setComponentInstance) {
        this.props.setComponentInstance(this.componentInstance, RcChart)
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
