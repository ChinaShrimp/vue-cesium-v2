import SupermapTerrainProvider from './SupermapTerrainProvider.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(SupermapTerrainProvider.name, SupermapTerrainProvider)
}

export default plugin

export {
  SupermapTerrainProvider,
  plugin as install
}
