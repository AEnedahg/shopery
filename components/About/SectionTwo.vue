<template>
    <div class="w-screen bg-white pb-[80px] flex flex-col lg:flex-row-reverse gap-[58px]">
        <section class="lg:px-17.5 px-4 max-w-[1440px] mx-auto flex flex-col lg:flex-row-reverse gap-[58px] items-center justify-center">
            <div class="max-w-[590px] lg:min-w-[600px]">
                <h1 class="text-[42px] lg:text-[56px] font-semibold leading-[120%] 
                text-[#1A1A1A] mb-[16px] lg:mb-[28px]">100% Trusted Organic Food Store
                </h1>
                <p class="text-[16px] lg:text-[18px] leading-[150%] text-[#666666]">Shopery partners with trusted organic 
                    growers who prioritize soil health. Every product arrives fresh and nutrient-rich.
                     Our selection includes seasonal vegetables, heirloom varieties, and artisanal pantry 
                     staples. Shopery ensures transparency from farm to table.
                </p>
                <div class="gap-[24px] flex flex-wrap lg:grid lg:grid-cols-2 lg:grid-rows-3 mt-10">
                    <div v-for="sectionTwoItem of sectionTwoItems" :key="sectionTwoItem.id"
                        class="flex gap-x-[16px] items-center lg:col-span-1 lg:row-span-1"
                    >
                        <img :src="sectionTwoItem.img" alt="icon displaying feature" 
                            class="size-[72px]"
                        />
                        <div class="*:leading-[150%] flex flex-col gap-y-[8px]">
                            <h6 class="text-[#1A1A1A] font-semibold text-[18px]">
                                {{ sectionTwoItem.heading }}
                            </h6>
                            <small class="inline-block text-[#808080] text-[14px]">{{ sectionTwoItem.para }}</small>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <img src="/images/about/about-section-two-img.png" 
            alt="image of man holding a basket of tomatoes and onions" 
                class="w-full lg:h-[800px] object-cover max-w-[680px]"
            />
    </div>
</template>

<script setup>
const sectionTwoItems = [
    {
        id: 1,
        img: '/images/about/about-section-two-icon-one.png',
        heading: '100% Organic food',
        para: '100% healthy & Fresh food.'
    },{
        id: 2,
        img: '/images/about/about-section-two-icon-two.png',
        heading: 'Great Support 24/7',
        para: 'Instant access to Contact'
    },{
        id: 3,
        img: '/images/about/about-section-two-icon-three.png',
        heading: 'Customer Feedback',
        para: 'Our happy customer'
    },{
        id: 4,
        img: '/images/about/about-section-two-icon-four.png',
        heading: '100% Sucure Payment',
        para: 'We ensure your money is save'
    },{
        id: 5,
        img: '/images/about/about-section-two-icon-five.png',
        heading: 'Free Shipping',
        para: 'Free shipping with discount'
    },{
        id: 6,
        img: '/images/about/about-section-two-icon-six.png',
        heading: '100% Organic Food',
        para: '100% healthy & Fresh food.'
    },
]
</script>