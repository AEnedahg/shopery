<template>
    <div class="w-screen bg-white lg:px-17.5 px-4">
        <section class="max-w-[1440px] mx-auto mt-[80px]">
            <div class="lg:grid lg:grid-cols-5 lg:grid-rows-1 flex flex-wrap justify-center gap-[21px]">
                <div
                v-for="product of products"
                :key="product.id"
                :class="[
                    selectedProduct === product.id ? 'border-green-500' : 'border-[#E5E5E5]',
                    'hover:border-green-500'
                ]"
                @click="handleProductClick(product.id)"
                class="card max-w-[246px] mx-auto lg:col-span-1 lg:row-span-1 border-1 border-[#E5E5E5] rounded-[8px]"
                >
                <img :src="product.img" :alt="product.text" />
                <div class="flex items-center mt-[12px] justify-between px-[16px] py-[12px]">
                    <div>
                    <small class="text-[14px] text-[#4D4D4D] inline-block mb-[3px]">{{ product.name }}</small>
                    <p class="text-[16px] text-[#1A1A1A] mb-[3px] font-semibold">{{ product.price }}</p>
                    <img src="/images/home/featured-products/stars-small.svg" alt="stars rating" />
                    </div>
                    <button
                    @click.stop="toggleCart(product.id)"
                    class="p-2 rounded-full transition-all duration-300 cursor-pointer"
                    :class="inCart.includes(product.id) ? 'bg-green-500' : 'bg-[#F2F2F2]'"
                    >
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="20" cy="20" r="20" fill="none" />
                        <path
                        d="M16.6667 18.3333H14.1667L12.5 27.5H27.5L25.8333 18.3333H23.3333M16.6667 18.3333V15.8333C16.6667 13.9924 18.1591 12.5 20 12.5C21.8409 12.5 23.3333 13.9924 23.3333 15.8333V18.3333M16.6667 18.3333H23.3333M16.6667 18.3333V20.8333M23.3333 18.3333V20.8333"
                        :stroke="inCart.includes(product.id) ? '#fff' : '#1A1A1A'"
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
import { useRouter } from 'vue-router'
function handleProductClick(id) {
  selectedProduct.value = id
  router.push(`/shop/${id}`)
}
const inCart = ref([])

function toggleCart(id) {
  if (inCart.value.includes(id)) {
    inCart.value = inCart.value.filter(i => i !== id)
  } else {
    inCart.value.push(id)
  }
}
const router = useRouter()
const selectedProduct = ref(null)

const products = [
    {
        id: 1,
        name: 'Big Potatoes',
        img: '/images/shop/shop-product-one.png',
        price: '$34.99'
    },
    {
        id: 2,
        name: 'Chanise Cabbage',
        img: '/images/shop/shop-product-two.png',
        price: '$24.99'
    },
    {
        id: 3,
        name: 'Corn',
        img: '/images/shop/shop-product-three.png',
        price: '$14.99'
    },
    {
        id: 4,
        name: 'Egg Plant',
        img: '/images/shop/shop-product-four.png',
        price: '$24.99'
    },
    {
        id: 5,
        name: 'Fresh Cauliflower',
        img: '/images/shop/shop-product-five.png',
        price: '$14.99'
    },
    {
        id: 6,
        name: 'Green Apple',
        img: '/images/shop/shop-product-six.png',
        price: '$14.99'
    },
    {
        id: 7,
        name: 'Green Capsicum',
        img: '/images/shop/shop-product-seven.png',
        price: '$34.99'
    },
    {
        id: 8,
        name: 'Green Chilli',
        img: '/images/shop/shop-product-eight.png',
        price: '$14.99'
    },
    {
        id: 9,
        name: 'Green Cucumber',
        img: '/images/shop/shop-product-nine.png',
        price: '$24.99'
    },
    {
        id: 10,
        name: 'Green Lettuce',
        img: '/images/shop/shop-product-ten.png',
        price: '$14.99'
    },
    {
        id: 11,
        name: 'Ladies Finger',
        img: '/images/shop/shop-product-eleven.png',
        price: '$14.99'
    },
    {
        id: 12,
        name: 'Red Capsicum',
        img: '/images/shop/shop-product-twelve.png',
        price: '$34.99'
    },
    {
        id: 13,
        name: 'Red Chilli',
        img: '/images/shop/shop-product-thirteen.png',
        price: '$14.99'
    },
    {
        id: 14,
        name: 'Red Tomato',
        img: '/images/shop/shop-product-fourteen.png',
        price: '$24.99'
    },
    {
        id: 15,
        name: 'Fresh Mango',
        img: '/images/shop/shop-product-fifteen.png',
        price: '$24.99'
    }
]
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