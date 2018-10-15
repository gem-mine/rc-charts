import scriptjsLoader from '@sdp.nd/js-async-loader'
export default async function hchartsLoader (versions, modules) {
  const uri = `//cdn.bootcss.com/highcharts/:versions/:moduleName.js`
  versions = versions || '6.0.7'
  modules = modules || ['highcharts']
  if (!modules.includes('js/modules/oldie') && navigator.userAgent.indexOf('MSIE 8.0') > 0) {
    modules.push('js/modules/oldie')
  }
  for (let i = 0; i < modules.length; i++) {
    await scriptjsLoader(uri, null, {
      versions,
      moduleName: modules[i]
    })
  }
  return window.Highcharts
}
