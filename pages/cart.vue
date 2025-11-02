<template>
    <div class="w-screen bg-[#F2F2F2] lg:px-17.5 px-4">
        <div class="max-w-[1440px] mx-auto py-[48px]">
            <h5 class="text-[#00B207] text-[16px]">Cart</h5>
        </div>
    </div>
  <div class="p-8">

    <div v-if="cart.items.length === 0">
      <p>Your cart is empty.</p>
    </div>

    <div v-else>
      <div v-for="item in cart.items" :key="item.id" class="flex flex-col flex-wrap lg:flex-row lg:justify-between items-center border-b py-2">
        <div class="flex items-center gap-3">
          <img :src="item.img" class="w-16 h-16 object-cover rounded" />
          <div>
            <p class="font-semibold">{{ item.name }}</p>
            <p class="text-sm text-gray-500">${{ item.price }}</p>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <button @click="cart.decrement(item.id)">−</button>
          <span>{{ item.quantity }}</span>
          <button @click="cart.increment(item.id)">+</button>
        </div>

        <p class="font-semibold">${{ (item.price * item.quantity).toFixed(2) }}</p>

        <button @click="cart.removeFromCart(item.id)" class="text-red-500">Remove</button>
      </div>

      <div class="mt-6 flex justify-between font-semibold text-lg">
        <p>Total:</p>
        <p>${{ cart.totalPrice.toFixed(2) }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '/stores/cart'
const cart = useCartStore()
</script>
