<template>
    <div class="w-screen bg-[#EDF2EE] lg:px-17.5 px-4 lg:py-20 py-10 mt-20">
        <section class="max-w-[1440px] mx-auto 
        
        flex flex-col flex-wrap lg:flex-row lg:justify-between items-center">
            <div class="flex items-center gap-x-2">
                <img src="/images/logo-shopery.png" alt="logo" class="size-[60px]" />
                <h4 class="text-[24px] font-semibold text-[#18191C]">Shopery</h4>
            </div>
            <div>
                <h6 class="text-[24px] leading-[150%] font-medium text-[#1A1A1A]
                    mt-[24px] lg:mt-0
                ">Subcribe our Newsletter</h6>
                <small class="text-[14px] inline-block text-[#999999] leading-[150%]
                    text-center lg:text-left my-[24px] lg:my-0
                ">Fresh deals, tasty recipes & exclusive foodie perks</small>
            </div>
            <form class="flex flex-col lg:hidden gap-[24px] max-w-4/5 mx-auto">
                <input type="email" name="email" placeholder="Your email address" 
                    class="bg-white rounded-[46px] py-[14px] px-[24px] placeholder:text-[#808080]"
                />
                <button class="text-white rouned-[46px] bg-[#00B207] py-[16px] px-[40px]
                    rounded-[46px]
                ">
                    Subscribe
                </button>
            </form>
            <form class="relative hidden lg:inline-block">
                <input type="email" name="email" placeholder="Your email address" 
                    class="bg-white rounded-[46px] py-[14px] px-[24px] placeholder:text-[#808080]"
                />
                <button class="text-white rouned-[46px] bg-[#00B207] py-[16px] px-[40px]
                    rounded-[46px] absolute -right-[10%]
                ">
                    Subscribe
                </button>
            </form>
        </section>
    </div>
</template>

<script setup>

</script>