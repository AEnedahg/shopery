import { defineStore } from 'pinia'
import nuxtStorage from 'nuxt-storage';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: nuxtStorage.localStorage('cart', []).storedValue
  }),

  getters: {
    totalItems: (state) => state.items.reduce((sum, item) => sum + item.quantity, 0),
    totalPrice: (state) => state.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  },

  actions: {
    addToCart(product) {
      const existing = this.items.find((item) => item.id === product.id)
      if (existing) existing.quantity++
      else this.items.push({ ...product, quantity: 1 })
    },

    removeFromCart(id) {
      this.items = this.items.filter((item) => item.id !== id)
    },

    increment(id) {
      const item = this.items.find((i) => i.id === id)
      if (item) item.quantity++
    },

    decrement(id) {
      const item = this.items.find((i) => i.id === id)
      if (item && item.quantity > 1) item.quantity--
    }
  }
})
