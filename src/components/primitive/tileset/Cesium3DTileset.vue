<script>
import {
  show,
  modelMatrix,
  shadows,
  clippingPlanes,
  debugShowBoundingVolume,
  debugWireframe,
  imageBasedLightingFactor,
  url,
  classificationType,
  ellipsoid,
  lightColor2,
  luminanceAtZenith,
  sphericalHarmonicCoefficients,
  specularEnvironmentMaps,
  backFaceCulling
} from '../../../mixins/mixinProps'
import mixinPrimitive from '../../../mixins/primitives/mixinPrimitive'
export default {
  name: 'vc-primitive-tileset',
  mixins: [
    show,
    modelMatrix,
    shadows,
    clippingPlanes,
    debugShowBoundingVolume,
    debugWireframe,
    imageBasedLightingFactor,
    url,
    classificationType,
    ellipsoid,
    lightColor2,
    luminanceAtZenith,
    sphericalHarmonicCoefficients,
    specularEnvironmentMaps,
    backFaceCulling,
    mixinPrimitive
  ],
  props: {
    maximumScreenSpaceError: {
      type: Number,
      default: 16
    },
    maximumMemoryUsage: {
      type: Number,
      default: 512
    },
    cullWithChildrenBounds: {
      type: Boolean,
      default: true
    },
    cullRequestsWhileMoving: {
      type: Boolean,
      default: true
    },
    cullRequestsWhileMovingMultiplier: {
      type: Number,
      default: 60.0
    },
    preloadWhenHidden: {
      type: Boolean,
      default: false
    },
    preloadFlightDestinations: {
      type: Boolean,
      default: true
    },
    preferLeaves: {
      type: Boolean,
      default: false
    },
    dynamicScreenSpaceError: {
      type: Boolean,
      default: false
    },
    dynamicScreenSpaceErrorDensity: {
      type: Number,
      default: 0.00278
    },
    dynamicScreenSpaceErrorFactor: {
      type: Number,
      default: 4.0
    },
    dynamicScreenSpaceErrorHeightFalloff: {
      type: Number,
      default: 0.25
    },
    progressiveResolutionHeightFraction: {
      type: Number,
      default: 0.3
    },
    foveatedScreenSpaceError: {
      type: Boolean,
      default: true
    },
    foveatedConeSize: {
      type: Number,
      default: 0.1
    },
    foveatedMinimumScreenSpaceErrorRelaxation: {
      type: Number,
      default: 0.0
    },
    foveatedInterpolationCallback: Function,
    foveatedTimeDelay: {
      type: Number,
      default: 0.2
    },
    skipLevelOfDetail: {
      type: Boolean,
      default: true
    },
    baseScreenSpaceError: {
      type: Number,
      default: 1024
    },
    skipScreenSpaceErrorFactor: {
      type: Number,
      default: 16
    },
    skipLevels: {
      type: Number,
      default: 1
    },
    immediatelyLoadDesiredLevelOfDetail: {
      type: Boolean,
      default: false
    },
    loadSiblings: {
      type: Boolean,
      default: false
    },
    pointCloudShading: Object,
    debugHeatmapTilePropertyName: String,
    debugFreezeFrame: {
      type: Boolean,
      default: false
    },
    debugColorizeTiles: {
      type: Boolean,
      default: false
    },
    debugShowContentBoundingVolume: {
      type: Boolean,
      default: false
    },
    debugShowViewerRequestVolume: {
      type: Boolean,
      default: false
    },
    debugShowGeometricError: {
      type: Boolean,
      default: false
    },
    debugShowRenderingStatistics: {
      type: Boolean,
      default: false
    },
    debugShowMemoryUsage: {
      type: Boolean,
      default: false
    },
    debugShowUrl: {
      type: Boolean,
      default: false
    }
  }
}
</script>
