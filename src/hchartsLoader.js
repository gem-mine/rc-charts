import scriptjsLoader from '@gem-mine/js-async-loader'
import { hchartMap } from './map'

export default async function hchartsLoader (url, versions, modules) {
  const uriPrefix = url || `//gcdncs.101.com/v0.1/static/share/fish`
  const uri = `${uriPrefix}/highcharts/:versions/:moduleName.js`

  versions = versions || '6.0.7'
  versions = hchartMap[versions] || hchartMap[versions.match(/\w(?=\.)/)[0]]

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
