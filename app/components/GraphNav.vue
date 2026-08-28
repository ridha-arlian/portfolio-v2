<script setup lang="ts">
  import { ref } from 'vue'
  import { Button } from '@/components/ui/button'
  import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
  import { useNetworkNodes } from '@/composables/useNetworkNodes'
  import { navigationNodes } from '@/data/navigation'
  import NetworkLines from '@/components/NetworkLines.vue'

  const active = ref('center')
  const { calculatedNodes, isMobile } = useNetworkNodes(navigationNodes)
</script>

<template>
  <TooltipProvider :delay-duration="0">
    <section class="relative isolate h-[65vh] min-h-105 max-h-190 w-full overflow-hidden bg-paper text-ink sm:h-[76vh]">
      <div 
        class="absolute inset-0 -z-10 opacity-55 bg-[linear-gradient(var(--color-line)_1px,transparent_1px),linear-gradient(90deg,var(--color-line)_1px,transparent_1px)] bg-size-[40px_40px] sm:bg-size-[64px_64px] mask-[radial-gradient(ellipse_at_center,black_20%,transparent_78%)]" 
        aria-hidden="true" 
      />

      <div class="absolute left-3 top-3 font-mono text-[10px] tracking-widest text-muted-foreground sm:left-6 sm:top-6 sm:text-xs">
        NODE NAV // V1.0
      </div>
      <div class="absolute bottom-3 right-3 font-mono text-[10px] tracking-widest text-muted-foreground sm:bottom-6 sm:right-6 sm:text-xs">
        SELECT A NODE TO EXPLORE
      </div>

      <NetworkLines :nodes="calculatedNodes" />

      <div class="group absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center">
        <Button
          variant="ghost"
          type="button"
          class="h-5 w-5 rounded-full cursor-pointer bg-ink p-0 ring-1 ring-ink ring-offset-4 ring-offset-paper transition-all duration-300 hover:bg-ink hover:scale-110 hover:ring-offset-8 focus-visible:ring-1 focus-visible:ring-ink sm:h-6 sm:w-6"
          @click="active = active === 'center' ? '' : 'center'"
          @focus="active = 'center'"
        >
          <span class="sr-only">
            Toggle Identity
          </span>
        </Button>
        
        <div 
          class="absolute top-8 text-center whitespace-nowrap transition-opacity duration-300 pointer-events-none sm:top-10"
          :class="active === 'center' ? 'opacity-100' : 'opacity-0'"
        >
          <strong class="block font-sans text-sm font-bold leading-tight tracking-wide sm:text-lg">
            RIDHA<br/>ARLIAN
          </strong>
          <small class="mt-0.5 block font-mono text-[9px] tracking-widest text-muted-foreground uppercase sm:mt-1 sm:text-xs">
            SOFTWARE ENGINEER
          </small>
        </div>
      </div>

      <template v-if="isMobile">
        <div
          v-for="node in calculatedNodes"
          :key="node.id"
          class="absolute -translate-x-1/2 -translate-y-1/2"
          :style="{ left: `${node.x}%`, top: `${node.y}%` }"
        >
          <Button
            as-child
            variant="ghost"
            class="group relative h-4 w-4 rounded-full p-0 hover:bg-transparent focus-visible:ring-1 focus-visible:ring-ink"
          >
            <NuxtLink :to="node.href || '#'">
              <span 
                class="h-3 w-3 rounded-full border border-ink bg-paper transition-all duration-350 active:scale-[1.35] active:bg-ink" 
              />

              <span class="absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap text-center">
                <strong class="block font-sans text-[11px] font-semibold leading-tight text-ink">
                  {{ node.label }}
                </strong>
                <small class="mt-0.5 block font-mono text-[8px] leading-none tracking-widest text-muted-foreground uppercase">
                  {{ node.detail }}
                </small>
              </span>
            </NuxtLink>
          </Button>
        </div>
      </template>

      <template v-else>
        <Tooltip v-for="node in calculatedNodes" :key="node.id">
          <TooltipTrigger as-child>
            <Button
              as-child
              variant="ghost"
              class="group absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full p-0 transition-all duration-700 ease-out hover:bg-transparent focus-visible:ring-1 focus-visible:ring-ink"
              :style="{ left: `${node.x}%`, top: `${node.y}%` }"
            >
              <NuxtLink
                :to="node.href || '#'"
                @mouseenter="active = node.id"
                @mouseleave="active = 'center'"
                @focus="active = node.id"
                @blur="active = 'center'"
              >
                <span 
                  class="h-3 w-3 rounded-full border border-ink bg-paper transition-all duration-350 group-hover:scale-[1.35] group-hover:bg-ink group-hover:ring-1 group-hover:ring-ink group-hover:ring-offset-4 group-hover:ring-offset-paper sm:h-3.5 sm:w-3.5" 
                />
                <span class="sr-only">{{ node.label }}</span>
              </NuxtLink>
            </Button>
          </TooltipTrigger>

          <TooltipContent 
            side="right" 
            :side-offset="16" 
            class="border-none bg-transparent p-0 shadow-none [&>svg]:hidden [&>span]:hidden"
          >
            <div class="text-left whitespace-nowrap">
              <strong class="block font-sans text-base font-semibold leading-tight tracking-normal text-ink">
                {{ node.label }}
              </strong>
              <small class="mt-0.5 block font-mono text-xs leading-none tracking-widest text-muted-foreground uppercase">
                {{ node.detail }}
              </small>
            </div>
          </TooltipContent>
        </Tooltip>
      </template>

    </section>
  </TooltipProvider>
</template>