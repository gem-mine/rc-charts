import scriptjsLoader from '@sdp.nd/js-async-loader'
import { echartMap } from './map'

export default async function echartsLoader (url, versions, modules) {
  const uriPrefix = url || `//gcdncs.101.com/v0.1/static/fish`
  const uri = `${uriPrefix}/echarts/:versions/:moduleName.js`
  versions = versions || '4.0.2'
  versions = echartMap[versions] || echartMap['6.4.4'.match(/\w(?=\.)/)[0]]

  modules = modules || ['echarts.min']
  for (let i = 0; i < modules.length; i++) {
    await scriptjsLoader(uri, null, {
      versions,
      moduleName: modules[i]
    })
  }
  // 补充echart缺少的初始化方法
  const echartsSDK = window.echarts
  echartsSDK.chart = (dom, options) => {
    const chart = echartsSDK.init(dom)
    chart.setOption(options)
    return chart
  }
  return echartsSDK
}
