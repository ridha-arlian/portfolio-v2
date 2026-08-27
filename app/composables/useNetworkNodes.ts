import { computed, onMounted, onUnmounted, ref } from 'vue'
import { pseudoRandom } from '@/utils/random'

export interface NodeItem {
  id: string
  label: string
  detail: string
  href?: string
}

export interface CalculatedNode extends NodeItem {
  x: number
  y: number
}

interface UseNetworkNodesOptions {
  minRadiusDesktop?: number
  maxRadiusDesktop?: number
  minRadiusMobile?: number
  maxRadiusMobile?: number
}

export function useNetworkNodes(nodesData: NodeItem[], options: UseNetworkNodesOptions = {}) {
  const {
    minRadiusDesktop = 22,
    maxRadiusDesktop = 38,
    minRadiusMobile = 32,
    maxRadiusMobile = 42,
  } = options

  const isMobile = ref(false)

  function updateLayout() {
    isMobile.value = window.innerWidth < 640
  }

  onMounted(() => {
    updateLayout()
    window.addEventListener('resize', updateLayout)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateLayout)
  })

  const calculatedNodes = computed<CalculatedNode[]>(() => {
    const total = nodesData.length
    const sectorAngle = (2 * Math.PI) / total

    const minR = isMobile.value ? minRadiusMobile : minRadiusDesktop
    const maxR = isMobile.value ? maxRadiusMobile : maxRadiusDesktop

    return nodesData.map((node, index) => {
      const randAngle = pseudoRandom(`${node.id}-angle`)
      const randRadius = pseudoRandom(`${node.id}-radius`)

      const baseAngle = index * sectorAngle - Math.PI / 2
      const jitterFactor = isMobile.value ? 0.2 : 0.5 
      const angleJitter = (randAngle - 0.5) * (sectorAngle * jitterFactor)
      const angle = baseAngle + angleJitter

      const randomRadius = minR + randRadius * (maxR - minR)

      const xFactor = isMobile.value ? 0.85 : 1.0

      const x = 50 + randomRadius * Math.cos(angle) * xFactor
      const y = 50 + randomRadius * Math.sin(angle)

      return {
        ...node,
        x: Number(x.toFixed(2)),
        y: Number(y.toFixed(2)),
      }
    })
  })

  return {
    calculatedNodes,
    isMobile,
  }
}