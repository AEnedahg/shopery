<template>
    <div class="w-screen bg-white lg:px-17.5 px-4">
        <section class="max-w-[1440px] mx-auto">
            <div class="bg-[#EDF2EE] lg:mt-[24px] mt-[30px] rounded-[8px] p-4 lg:p-0 flex flex-col lg:flex-row relative">
                <div class="md:pt-[182px] md:pl-[100px] md:pb-[120px] 
                max-w-[596px]">
                    <small class="tracking-[2%] text-[14px] text-[#00B207] font-medium uppercase mb-[8px] inline-block">Welcome to shopery</small>
                    <h1 class="text-[48px] lg:text-[72px] font-semibold leading-[120%] text-[#1A1A1A] mb-[16px] lg:mb-[28px]">Fresh & Healthy Organic Food</h1>
                    <h3 class="text-[28px] lg:text-[36px] text-[#1A1A1A] mb-[12px]">Sale up to <span class="!text-[#FF8A00] !font-semibold">30% OFF</span></h3>
                    <small class="text-[14px] text-[#808080] inline-block mb-[32px]">Free shipping on all your order. we deliver, you enjoy</small>
                    <NuxtLink to="/shop">
                        <button class="text-white bg-[#00B207] flex items-center gap-x-[16px] py-[16px] px-[40px] rounded-[53px] cursor-pointer 
                        hover:bg-[#00B207]/90">
                            Shop now
                            <img src="/images/icons/right-arrow-icon.svg" alt="right arrow icon" />
                        </button>
                    </NuxtLink>
                </div>
                <div class="lg:flex lg:items-center lg:w-1/2 mt-8 lg:mb-0 mb-15">
                    <img src="/images/home/hero/hero-img.png" alt="image of fruits and vegetables" 
                    />
                </div>
                <div class="bg-white p-4 lg:p-[40px] lg:absolute lg:-bottom-[10%] 
                    gap-[32px]
                    rounded-[8px]
                md:left-[24px] md:right-[24px]
                lg:grid lg:grid-cols-4 lg:grid-rows-1 flex flex-wrap shadow-lg">
                    <div v-for="heroItem of heroList" :key="heroItem.id"
                        class="flex max-w-[306px] gap-[16px] col-span-1 row-span-1 items-center"
                    >
                        <img :src="heroItem.img" :alt="heroItem.heading" 
                            class="size-[40px]"
                        />
                        <div class="mt-[8px]">
                            <p class="text-[16px] text-[#1A1A1A] font-semibold">{{ heroItem.heading }}</p>
                            <small class="text-[14px] text-[#999999]">{{ heroItem.para }}</small>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
const heroList = [
    {
        id: 1,
        img: '/images/home/hero/hero-list-icon-one.svg',
        heading: 'Free Shipping',
        para: 'Free shipping on all your order'
    },
    {
        id: 2,
        img: '/images/home/hero/hero-list-icon-two.svg',
        heading: 'Customer Support 24/7',
        para: 'Instant access to Support'
    },
    {
        id: 3,
        img: '/images/home/hero/hero-list-icon-three.svg',
        heading: '100% Secure Payment',
        para: 'We ensure your money is save'
    },
    {
        id: 4,
        img: '/images/home/hero/hero-list-icon-four.svg',
        heading: 'Money-Back Guarantee',
        para: '30 Days Money-Back Guarantee'
    }
]
</script>