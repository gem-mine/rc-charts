import scriptjsLoader from '@sdp.nd/js-async-loader'
export default function hchartsLoader (versions, modules) {
  versions = versions || '6.0.2'
  modules = modules || ['highcharts']
  if (!modules.includes('js/modules/oldie') && navigator.userAgent.indexOf('MSIE 8.0') > 0) {
    modules.push('js/modules/oldie')
  }
  return modules.reduce((previousValue, currentValue) => {
    return previousValue.then(() =>
      scriptjsLoader(`//cdn.bootcss.com/highcharts/:versions/:moduleName.js`, 'Highcharts', {
        versions,
        moduleName: currentValue
      })
    )
  }, Promise.resolve({}))
}
