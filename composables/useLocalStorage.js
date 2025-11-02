import { ref, watch, onMounted } from 'vue'

export function useLocalStorage(key, initialValue) {
  const storedValue = ref(initialValue)

  onMounted(() => {
    // Only run this in the browser
    try {
      const stored = localStorage.getItem(key)
      if (stored) {
        storedValue.value = JSON.parse(stored)
      }

      // Watch for changes and persist
      watch(
        storedValue,
        (newValue) => {
          localStorage.setItem(key, JSON.stringify(newValue))
        },
        { deep: true }
      )
    } catch (err) {
      console.error('LocalStorage error:', err)
    }
  })

  return { storedValue }
}
