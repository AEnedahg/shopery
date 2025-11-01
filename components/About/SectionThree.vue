<template>
    <div class="w-screen bg-white lg:px-17.5 px-4 py-[80px]">
        <section class="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-[58px] items-center justify-center">
            <div class="max-w-[590px]">
                <h1 class="text-[42px] lg:text-[56px] font-semibold leading-[120%] 
                text-[#1A1A1A] mb-[16px] lg:mb-[28px]">We Deliver, You Enjoy Your Order
                </h1>
                <p class="text-[16px] lg:text-[18px] leading-[150%] text-[#666666]">At Shopery, we make every delivery smooth 
                    and satisfying. Your orders arrive fresh, fast, and in perfect condition so you can relax 
                    and enjoy every item. 
                    Our reliable service ensures you always get the quality and convenience you deserve.
                </p>
                <div class="mt-[20px] mb-[22px]">
                    <div v-for="deliveryFeature of deliveryFeatures"
                        class="flex gap-x-[8px]"
                    >
                        <img src="/images/about/check-icon.png" alt="check-icon" 
                            class="size-[20px]"
                        />
                        <small class="text-[14px] text-[#666666]">{{ deliveryFeature }}</small>
                    </div>
                </div>
                 <NuxtLink to="/shop">
                    <button class="text-white bg-[#00B207] flex 
                    items-center gap-x-[16px] py-[16px] px-[40px] rounded-[53px] cursor-pointer 
                    hover:bg-[#00B207]/90">
                        Shop now
                        <img src="/images/icons/right-arrow-icon.svg" alt="right arrow icon" />
                    </button>
                </NuxtLink>
            </div>
            <img src="/images/about/about-section-three-img.png" 
            alt="image of man delivering grocery of food stuff" 
                class="w-full max-w-[680px] lg:min-w-[720px]
                lg:h-[700px] max-h-[492px]"
            />
        </section>
    </div>
</template>

<script setup>
const deliveryFeatures = [
    'Fast & Reliable Shipping',
    'Freshness Guaranteed',
    'Track Your Order'
]
</script>