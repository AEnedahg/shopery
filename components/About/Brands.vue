<template>
  <div class="w-screen bg-white lg:px-17.5 px-4 overflow-hidden">
    <div class="max-w-[1440px] mx-auto py-[48px] relative">
      <div ref="brandTrack" class="flex gap-[60px] w-max">
        <img
          v-for="(brand, index) in [...brands, ...brands]" 
          :key="index"
          :src="brand"
          alt="brand logo"
          class="h-[60px] object-contain"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const brands = [
  '/images/about/about-brand-one.png',
  '/images/about/about-brand-two.png',
  '/images/about/about-brand-three.png',
  '/images/about/about-brand-four.png',
  '/images/about/about-brand-five.png',
  '/images/about/about-brand-six.png',
]

const brandTrack = ref(null)

onMounted(() => {
  const track = brandTrack.value
  const trackWidth = track.scrollWidth / 2

  gsap.to(track, {
    x: `-${trackWidth}px`,
    ease: 'none',
    duration: 20,
    repeat: -1,
    modifiers: {
      x: gsap.utils.unitize(x => parseFloat(x) % trackWidth)
    }
  })
})
</script>

<style scoped>
img {
  flex-shrink: 0;
}
</style>
