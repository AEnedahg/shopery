<template>
  <div class="p-8">
    <h1 class="text-3xl font-bold mb-4">Your Cart</h1>

    <div v-if="cart.items.length === 0">
      <p>Your cart is empty.</p>
    </div>

    <div v-else>
      <div v-for="item in cart.items" :key="item.id" class="flex justify-between items-center border-b py-2">
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
import { useCartStore } from '~/stores/cart'
const cart = useCartStore()
</script>
