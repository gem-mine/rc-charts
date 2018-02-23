import scriptjsLoader from './scriptjsLoader'
export default function echartsLoader (versions, modules) {
  versions = versions || '4.0.2'
  modules = modules || ['echarts.min']
  return modules
    .reduce((previousValue, currentValue) => {
      return previousValue.then(() =>
        scriptjsLoader(`//cdn.bootcss.com/echarts/:versions/:moduleName.js`, 'echarts', {
          versions,
          moduleName: currentValue
        })
      )
    }, Promise.resolve({}))
    .then(echartsSDK => {
      // 补充echart缺少的初始化方法
      echartsSDK.chart = (dom, options) => {
        let chart = echartsSDK.init(dom)
        chart.setOption(options)
        return chart
      }
      return echartsSDK
    })
}
