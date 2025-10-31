<template>
    <div class="w-screen bg-white lg:px-17.5 px-4 mb-[150px]">
        <section class="max-w-[1440px] mx-auto">
            <h1 class="text-[#1A1A1A] font-semibold text-center mt-[150px] text-[35px] leading-[120%] mb-[70px]">
                Follow us on Instagram
            </h1>
            <div class="lg:grid lg:grid-cols-6 lg:grid-rows-1 flex flex-wrap gap-[24px]">
                <img v-for="instagramImage of instagramImages" :key="instagramImage" 
                    :src="instagramImage" alt="shopery instagram image of food"
                    class="size-[200px] mx-auto lg:mx-0"
                />
            </div>
        </section>
    </div>
</template>

<script setup>
const instagramImages = ['/images/home/instagram/instagram-one.png','/images/home/instagram/instagram-two.png','/images/home/instagram/instagram-three.png','/images/home/instagram/instagram-four.png','/images/home/instagram/instagram-five.png','/images/home/instagram/instagram-six.png',]
</script>