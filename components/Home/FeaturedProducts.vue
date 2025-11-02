<template>
  <div class="w-screen bg-white lg:px-17.5 px-4">
    <section class="max-w-[1440px] mx-auto">
      <h1 class="text-[#1A1A1A] font-semibold text-center mt-[150px] text-[40px] leading-[120%] mb-[70px]">
        Featured Products
      </h1>

      <div class="lg:grid lg:grid-cols-5 lg:grid-rows-1 flex flex-wrap justify-center gap-[21px]">
        <div
          v-for="featuredProductItem of featuredProductsList"
          :key="featuredProductItem.id"
          :class="[
            selectedProduct === featuredProductItem.id ? 'border-green-500' : 'border-[#E5E5E5]',
            'hover:border-green-500'
          ]"
          @click="handleProductClick(featuredProductItem.id)"
          class="card max-w-[246px] mx-auto lg:col-span-1 lg:row-span-1 border-1 border-[#E5E5E5] rounded-[8px]"
        >
          <img :src="featuredProductItem.img" :alt="featuredProductItem.text" />
          <div class="flex items-center mt-[12px] justify-between px-[16px] py-[12px]">
            <div>
              <small class="text-[14px] text-[#4D4D4D] inline-block mb-[3px]">{{ featuredProductItem.name }}</small>
              <p class="text-[16px] text-[#1A1A1A] mb-[3px] font-semibold">${{ featuredProductItem.price }}</p>
              <img src="/images/home/featured-products/stars-small.svg" alt="stars rating" />
            </div>
            <button
              @click.stop="toggleCart(featuredProductItem)"
              class="p-2 rounded-full transition-all duration-300 cursor-pointer"
              :class="isInCart(featuredProductItem.id) ? 'bg-green-500' : 'bg-[#F2F2F2]'"

            >
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" fill="none" />
                <path
                  d="M16.6667 18.3333H14.1667L12.5 27.5H27.5L25.8333 18.3333H23.3333M16.6667 18.3333V15.8333C16.6667 13.9924 18.1591 12.5 20 12.5C21.8409 12.5 23.3333 13.9924 23.3333 15.8333V18.3333M16.6667 18.3333H23.3333M16.6667 18.3333V20.8333M23.3333 18.3333V20.8333"
                  :stroke="isInCart(featuredProductItem.id) ? '#fff' : '#1A1A1A'"
                  stroke-width="1.3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div class="lg:grid lg:grid-cols-4 lg:grid-rows-1 lg:mt-[50px] flex flex-wrap gap-[24px] justify-center">
        <div class="lg:col-span-1 lg:row-span-1 max-w-[312px] mx-auto lg:mx-0">
          <h4 class="featuredHeading">Hot Deals</h4>
          <div class="space-y-[16px]">
            <div
              v-for="hotDealItem of hotDealsList"
              :key="hotDealItem.id"
              class="flex p-[2px] border-1 border-[#E5E5E5] rounded-[8px]"
              @click="handleProductClick(hotDealItem.id)"
            >
              <img :src="hotDealItem.img" :alt="hotDealItem.text" class="size-[102px]" />
              <div class="my-[24px] mx-[12px]">
                <small class="text-[14px] text-[#4D4D4D] inline-block mb-[3px]">{{ hotDealItem.name }}</small>
                <p class="text-[16px] text-[#1A1A1A] mb-[3px] font-semibold">${{ hotDealItem.price }}</p>
                <img src="/images/home/featured-products/stars-big.svg" alt="stars rating" />
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-1 lg:row-span-1">
          <h4 class="featuredHeading">Best Seller</h4>
          <div class="space-y-[16px]">
            <div
              v-for="bestSellerItem of bestSellersList"
              :key="bestSellerItem.id"
              class="flex p-[2px] border-1 border-[#E5E5E5] rounded-[8px]"
              @click="handleProductClick(bestSellerItem.id)"
            >
              <img :src="bestSellerItem.img" :alt="bestSellerItem.text" class="size-[102px]" />
              <div class="my-[24px] mx-[12px]">
                <small class="text-[14px] text-[#4D4D4D] inline-block mb-[3px]">{{ bestSellerItem.name }}</small>
                <p class="text-[16px] text-[#1A1A1A] mb-[3px] font-semibold">${{ bestSellerItem.price }}</p>
                <img src="/images/home/featured-products/stars-big.svg" alt="stars rating" />
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-1 lg:row-span-1">
          <h4 class="featuredHeading">Top Rated</h4>
          <div class="space-y-[16px]">
            <div
              v-for="topRatedItem of topRatedsList"
              :key="topRatedItem.id"
              class="flex p-[2px] border-1 border-[#E5E5E5] rounded-[8px]"
              @click="handleProductClick(topRatedItem.id)"
            >
              <img :src="topRatedItem.img" :alt="topRatedItem.text" class="size-[102px]" />
              <div class="my-[24px] mx-[12px]">
                <small class="text-[14px] text-[#4D4D4D] inline-block mb-[3px]">{{ topRatedItem.name }}</small>
                <p class="text-[16px] text-[#1A1A1A] mb-[3px] font-semibold">${{ topRatedItem.price }}</p>
                <img src="/images/home/featured-products/stars-big.svg" alt="stars rating" />
              </div>
            </div>
          </div>
        </div>

        <div
          class="bg-[url('/images/home/featured-products/summer-sale-img.png')] 
          lg:col-span-1 lg:row-span-1 bg-contain lg:mt-4 w-[312px] h-[426px]
          flex flex-col items-center"
        >
          <small class="inline-block uppercase text-[14px] font-medium tracking-[3%] mt-[46px]">Summer Sale</small>
          <h2 class="text-[32px] font-semibold text-[#00B207] uppercase mb-[16px]">75% off</h2>
          <NuxtLink to="/shop">
            <button
              class="text-[#00B207] bg-white flex items-center gap-x-[16px] py-[16px] px-[40px] rounded-[53px] cursor-pointer hover:bg-white/90"
            >
              Shop now
              <img src="/images/icons/right-arrow-green-icon.svg" alt="arrow" />
            </button>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '/stores/cart'

const router = useRouter()
const cart = useCartStore()
const selectedProduct = ref(null)
const isInCart = (id) => cart.items.some((item) => item.id === id)

function handleProductClick(id) {
  selectedProduct.value = id
  router.push(`/shop/${id}`)
}

const featuredProductsList = [
  { id: 6, img: '/images/home/featured-products/featured-products-one-img.png', name: 'Green Apple', price: 14.99 },
  { id: 2, img: '/images/home/featured-products/featured-products-two-img.png', name: 'Chinese Cabbage', price: 24.99 },
  { id: 10, img: '/images/home/featured-products/featured-products-three-img.png', name: 'Green Lettuce', price: 19.99 },
  { id: 8, img: '/images/home/featured-products/featured-products-four-img.png', name: 'Green Chilli', price: 14.99 },
  { id: 3, img: '/images/home/featured-products/featured-products-five-img.png', name: 'Corn', price: 14.99 }
]

const hotDealsList = [
  { id: 6, img: '/images/home/featured-products/hot-deals-one-img.png', name: 'Green Apple', price: 14.99 },
  { id: 7, img: '/images/home/featured-products/hot-deals-two-img.png', name: 'Indian Malta', price: 9.25 },
  { id: 10, img: '/images/home/featured-products/hot-deals-three-img.png', name: 'Green Lettuce', price: 19.99 }
]

const bestSellersList = [
  { id: 4, img: '/images/home/featured-products/best-seller-one-img.png', name: 'Egg Plant', price: 24.99 },
  { id: 11, img: '/images/home/featured-products/best-seller-two-img.png', name: 'Ladies Fingers', price: 16.99 },
  { id: 14, img: '/images/home/featured-products/best-seller-three-img.png', name: 'Red Tomato', price: 17.99 }
]

const topRatedsList = [
  { id: 1, img: '/images/home/featured-products/top-rated-one-img.png', name: 'Big Potatoes', price: 34.99 },
  { id: 3, img: '/images/home/featured-products/top-rated-two-img.png', name: 'Corn', price: 14.99 },
  { id: 5, img: '/images/home/featured-products/top-rated-three-img.png', name: 'Fresh Cauliflower', price: 14.99 }
]

function toggleCart(item) {
  cart.addToCart(item)
}
</script>

<style scoped>
.card {
  transition: border-color 0.3s ease;
}
.featuredHeading {
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 16px;
  color: #1A1A1A;
}
</style>
