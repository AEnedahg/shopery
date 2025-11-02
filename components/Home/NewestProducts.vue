<template>
  <div class="w-screen bg-white lg:px-17.5 px-4">
    <section class="max-w-[1440px] mx-auto">
      <h1 class="text-[#1A1A1A] font-semibold lg:text-left text-center text-[40px] leading-[120%] mb-[70px]">
        Newest Products
      </h1>

      <div class="lg:grid lg:grid-cols-5 flex flex-wrap justify-center gap-[21px]">
        <div
          v-for="featuredProductItem in featuredProductsList"
          :key="featuredProductItem.id"
          :class="[
            selectedProduct === featuredProductItem.id
              ? 'border-green-500'
              : 'border-[#E5E5E5]',
            'hover:border-green-500',
            'card max-w-[246px] mx-auto border-1 rounded-[8px]'
          ]"
          @click="handleProductClick(featuredProductItem.id)"
        >
          <img :src="featuredProductItem.img" :alt="featuredProductItem.text" />

          <div class="flex items-center mt-[12px] justify-between px-[16px] py-[12px]">
            <div>
              <small class="text-[14px] text-[#4D4D4D] inline-block mb-[3px]">
                {{ featuredProductItem.text }}
              </small>
              <p class="text-[16px] text-[#1A1A1A] mb-[3px] font-semibold">${{ featuredProductItem.price }}</p>
              <img src="/images/home/featured-products/stars-small.svg" alt="rating" />
            </div>

          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '/stores/cart.js'

const cart = useCartStore()
const router = useRouter()
const selectedProduct = ref(null)


const isInCart = (id) => cart.items.some((item) => item.id === id)

const featuredProductsList = [
  { id: 6, img: '/images/home/featured-products/featured-products-one-img.png', text: 'Green Apple', price: '14.99'},
  { id: 2, img: '/images/home/featured-products/featured-products-two-img.png', text: 'Chanise Cabbage', price: '24.99'},
  { id: 10, img: '/images/home/featured-products/featured-products-three-img.png', text: 'Green Lettuce', price: '19.99'},
  { id: 8, img: '/images/home/featured-products/featured-products-four-img.png', text: 'Green Chilli', price: '14.99' },
  { id: 3, img: '/images/home/featured-products/featured-products-five-img.png', text: 'Corn', price: '14.99' },
]

function handleProductClick(id) {
  selectedProduct.value = id
  router.push(`/shop/${id}`)
}

function toggleCart(id) {
  if (isInCart.value.includes(id)) {
    isInCart.value = isInCart.value.filter(i => i !== id)
  } else {
    isInCart.value.push(id)
  }
}
</script>

<style scoped>
.card {
  transition: border-color 0.3s ease;
}
</style>
