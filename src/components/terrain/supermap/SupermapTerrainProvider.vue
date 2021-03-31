<script>
import { url } from '../../../mixins/mixinProps'
import mixinTerrainProvider from '../../../mixins/providers/mixinTerrainProvider'
export default {
  name: 'VcProviderTerrainSupermap',
  mixins: [url, mixinTerrainProvider],
  props: {
    isSct: {
      type: Boolean,
      default: true
    },
    isShowGlobe: {
      type: Boolean,
      default: true
    },
    requestVertexNormals: {
      type: Boolean,
      default: false
    },
    requestWaterMask: {
      type: Boolean,
      default: false
    },
    ellipsoid: Object,
    credit: [String, Object]
  },
  methods: {
    /**
     * 重写 createCesiumObject 方法。
     */
    async createCesiumObject () {
      const {
        url,
        requestVertexNormals,
        requestWaterMask,
        ellipsoid,
        credit,
        isSct,
        isShowGlobe
      } = this
      const options = {
        url,
        requestVertexNormals,
        requestWaterMask,
        ellipsoid,
        credit,
        isSct,
        isShowGlobe
      }

      this.removeNullItem(options)
      return options.url
        ? new Cesium.CesiumTerrainProvider(options)
        : Cesium.createWorldTerrain({ requestVertexNormals, requestWaterMask })
    }
  }
}
</script>
