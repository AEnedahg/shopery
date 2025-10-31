<template>
    <div class="w-screen bg-white lg:px-17.5 px-4">
        <section class="max-w-[1440px] mx-auto">
            <h1 class="text-[#1A1A1A] font-semibold lg:text-left text-center text-[40px] leading-[120%] mb-[70px]">
                Newest Products
            </h1>
            <div class="lg:grid lg:grid-cols-5 lg:grid-rows-1 flex flex-wrap justify-center gap-[21px]">
                <div v-for="featuredProductItem of featuredProductsList"
                    :key="featuredProductItem.id"
                    :class="[
                        selectedProduct === featuredProductItem.id ? 'border-green-500' : 'border-[#E5E5E5]',
                        'hover:border-green-500'
                        ]"
                        @click="selectProduct(featuredProductItem.id)"
                    class="card max-w-[246px] mx-auto lg:col-span-1 lg:row-span-1 border-1 border-[#E5E5E5] rounded-[8px]"
                    >
                    <img :src="featuredProductItem.img" :alt="featuredProductItem.text" />
                    <div class="flex items-center mt-[12px] justify-between px-[16px] py-[12px]">
                        <div>
                            <small class="text-[14px] text-[#4D4D4D] inline-block mb-[3px]">{{ featuredProductItem.text }}</small>
                            <p class="text-[16px] text-[#1A1A1A] mb-[3px] font-semibold">$14.99</p>
                            <img src="/images/home/featured-products/stars-small.svg" alt="image of small stars rating" />
                        </div>
                        <button
                            @click.stop="toggleCart(featuredProductItem.id)"
                            class="p-2 rounded-full transition-all duration-300 cursor-pointer"
                            :class="inCart.includes(featuredProductItem.id) ? 'bg-green-500' : 'bg-[#F2F2F2]'"
                        >
                            <svg
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <circle cx="20" cy="20" r="20" fill="none" />
                            <path
                                d="M16.6667 18.3333H14.1667L12.5 27.5H27.5L25.8333 18.3333H23.3333M16.6667 18.3333V15.8333C16.6667 13.9924 18.1591 12.5 20 12.5C21.8409 12.5 23.3333 13.9924 23.3333 15.8333V18.3333M16.6667 18.3333H23.3333M16.6667 18.3333V20.8333M23.3333 18.3333V20.8333"
                                :stroke="inCart.includes(featuredProductItem.id) ? '#fff' : '#1A1A1A'"
                                stroke-width="1.3"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const featuredProductsList = [
    {
        id: 1,
        img: '/images/home/featured-products/featured-products-one-img.png',
        text: 'Green Apple'
    },
    {
        id: 2,
        img: '/images/home/featured-products/featured-products-two-img.png',
        text: 'Chanise Cabbage'
    },
    {
        id: 3,
        img: '/images/home/featured-products/featured-products-three-img.png',
        text: 'Green Lettuce'
    },
    {
        id: 4,
        img: '/images/home/featured-products/featured-products-four-img.png',
        text: 'Green Chilli'
    },
    {
        id: 5,
        img: '/images/home/featured-products/featured-products-five-img.png',
        text: 'Corn'
    }
]
const selectedProduct = ref(null)
const inCart = ref([])

function selectProduct(id) {
  selectedProduct.value = id
}

function toggleCart(id) {
  if (inCart.value.includes(id)) {
    inCart.value = inCart.value.filter(i => i !== id)
  } else {
    inCart.value.push(id)
  }
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