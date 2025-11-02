import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: []
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
      this.saveCart()
    },

    removeFromCart(id) {
      this.items = this.items.filter((item) => item.id !== id)
      this.saveCart()
    },

    increment(id) {
      const item = this.items.find((i) => i.id === id)
      if (item) item.quantity++
      this.saveCart()
    },

    decrement(id) {
      const item = this.items.find((i) => i.id === id)
      if (item && item.quantity > 1) item.quantity--
      this.saveCart()
    },

    saveCart() {
      if (process.client) {
        localStorage.setItem('cart', JSON.stringify(this.items))
      }
    },

    loadCart() {
      if (process.client) {
        const saved = localStorage.getItem('cart')
        if (saved) {
          this.items = JSON.parse(saved)
        }
      }
    }
  }
})
