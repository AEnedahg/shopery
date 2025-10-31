<template>
    <div class="bg-white h-[89px] lg:px-17.5 lg:py-7.5 px-4 py-4 w-screen">
        <header class="flex items-center flex-row-reverse h-full justify-between lg:hidden relative">
            <div class="flex gap-x-[4px]">
                <NuxtLink to="/wishlist">
                    <IconsWishlist/>
                </NuxtLink>
                <div>
                    <NuxtLink to="/cart">
                        <IconsCart />
                    </NuxtLink>
                </div>
            </div>
      
            <NuxtLink to="/">
                <img src="/images/logo-shopery.png" alt="logo" class="size-[60px]" />
            </NuxtLink>

            <div 
                @click="toggleMenu"
                class="w-8 *:h-[3px] *:bg-[#18191C] flex h-5 flex-col justify-between items-start cursor-pointer z-[60]"
            >
                <span ref="hamOne" class="w-full"></span>
                <span ref="hamTwo" class="w-2/3"></span>
                <span ref="hamThree" class="w-1/3"></span>
            </div>

            <nav 
                ref="mobileNav"
                class="fixed top-0 left-0 w-[75%] h-screen bg-[#B4CCB4] flex flex-col items-center px-8 z-[50] -translate-x-full"
            >
                <div class="flex flex-col gap-y-6 text-2xl text-[#1A1A1A] mt-35 *:text-left *:cursor-pointer">
                    <NuxtLink to="/" @click="closeMenu">Home</NuxtLink>
                    <NuxtLink to="/shop" @click="closeMenu">Shop</NuxtLink>
                    <NuxtLink to="/product" @click="closeMenu">Product</NuxtLink>
                    <NuxtLink to="/blog" @click="closeMenu">Blog</NuxtLink>
                    <NuxtLink to="/faq" @click="closeMenu">FAQ</NuxtLink>
                    <NuxtLink to="/about" @click="closeMenu">About Us</NuxtLink>
                    <NuxtLink to="/contact" @click="closeMenu">Contact Us</NuxtLink>
                </div>
            </nav>
        </header>

        <header class="lg:flex items-center h-full justify-between hidden max-w-[1440px] mx-auto">
            <NuxtLink to="/">
                <div class="flex items-center gap-x-2">
                    <img src="/images/logo-shopery.png" alt="logo" class="size-[60px]" />
                    <h4 class="text-[24px] font-semibold text-[#18191C]">Shopery</h4>
                </div>
            </NuxtLink>

            <div class="flex gap-x-[4px]">
                <NuxtLink to="/wishlist">
                    <IconsWishlist/>
                </NuxtLink>
                <div>
                    <NuxtLink to="/cart">
                        <IconsCart />
                    </NuxtLink>
                </div>
            </div>

            <div class="flex gap-x-6 text-[#1B2534] text-base">
                <NuxtLink to="/">Home</NuxtLink>
                <NuxtLink to="/shop">Shop</NuxtLink>
                <NuxtLink to="/product">Product</NuxtLink>
                <NuxtLink to="/blog">Blog</NuxtLink>
                <NuxtLink to="/faq">FAQ</NuxtLink>
                <NuxtLink to="/about">About</NuxtLink>
                <NuxtLink to="/contact">Contact</NuxtLink>
            </div>
        </header>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const mobileNav = ref(null)
const openMobileNav = ref(false)
const hamOne = ref(null)
const hamTwo = ref(null)
const hamThree = ref(null)

onMounted(() => {
  if (mobileNav.value) {
    gsap.set(mobileNav.value, { x: '-100%', display: 'none' })
  }
})

function toggleMenu() {
  openMobileNav.value = !openMobileNav.value

  if (openMobileNav.value) {
    gsap.set(mobileNav.value, { display: 'flex' })
    gsap.to(mobileNav.value, { x: '0%', duration: 0.8, ease: 'power3.out' })

    gsap.to(hamOne.value, { rotate: 45, y: 6, duration: 0.3 })
    gsap.to(hamTwo.value, { opacity: 0, duration: 0.3 })
    gsap.to(hamThree.value, { rotate: -45, y: -10, width: '100%', duration: 0.3 })
  } else {
    closeMenu()
  }
}

function closeMenu() {
  openMobileNav.value = false
  gsap.to(mobileNav.value, {
    x: '-100%',
    duration: 0.8,
    ease: 'power3.in',
    onComplete: () => gsap.set(mobileNav.value, { display: 'none' })
  })

  gsap.to(hamOne.value, { rotate: 0, y: 0, duration: 0.3, backgroundColor: '#18191C' })
  gsap.to(hamTwo.value, { opacity: 1, duration: 0.3 })
  gsap.to(hamThree.value, { rotate: 0, y: 0, width: '33%', duration: 0.3, backgroundColor: '#18191C' })
}
</script>

<style scoped>
.router-link-active,
.router-link-exact-active {
  color: #00B207;
  font-weight: 600;
  stroke:#00B207;
}

a {
  transition: color 0.3s ease;
}
</style>
