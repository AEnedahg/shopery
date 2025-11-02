<template>
  <Navbar />
  <slot />
  <Footer />
</template>

<script setup>
import { onMounted } from 'vue'
import { useCartStore } from '/stores/cart' // make sure the path starts with @

const cart = useCartStore()

onMounted(() => {
  cart.loadFromStorage()
})
</script>
