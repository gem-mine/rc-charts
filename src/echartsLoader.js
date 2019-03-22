import scriptjsLoader from '@sdp.nd/js-async-loader'
export default async function echartsLoader (versions, modules) {
  const uri = `//cdnjs.cloudflare.com/ajax/libs/echarts/:versions/:moduleName.js`
  versions = versions || '4.0.2'
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
