import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: []
  }),

  getters: {
    totalItems: (state) =>
      state.items.reduce((sum, item) => sum + item.quantity, 0),

    totalPrice: (state) =>
      state.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  },

  actions: {
    // ✅ Add product to cart
    addToCart(product) {
      const existing = this.items.find((item) => item.id === product.id)
      if (existing) {
        existing.quantity++
      } else {
        this.items.push({ ...product, quantity: 1 })
      }
      this.saveToStorage()
    },

    // ✅ Remove a product
    removeFromCart(id) {
      this.items = this.items.filter((item) => item.id !== id)
      this.saveToStorage()
    },

    // ✅ Increment / Decrement
    increment(id) {
      const item = this.items.find((i) => i.id === id)
      if (item) item.quantity++
      this.saveToStorage()
    },
    decrement(id) {
      const item = this.items.find((i) => i.id === id)
      if (item && item.quantity > 1) item.quantity--
      this.saveToStorage()
    },

    // ✅ Persist cart to localStorage
    saveToStorage() {
      if (process.client) {
        localStorage.setItem('cart', JSON.stringify(this.items))
      }
    },

    // ✅ Load cart from localStorage
    loadFromStorage() {
      if (process.client) {
        const stored = localStorage.getItem('cart')
        if (stored) {
          this.items = JSON.parse(stored)
        }
      }
    }
  }
})
