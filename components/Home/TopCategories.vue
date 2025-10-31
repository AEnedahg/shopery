<template>
    <div class="w-screen bg-white lg:px-17.5 px-4">
        <section class="max-w-[1440px] mx-auto">
            <h1 class="text-[#1A1A1A] font-semibold text-center mt-[150px] text-[40px] leading-[120%] mb-[70px]">
                Top Category
            </h1>
            <div class="lg:grid lg:grid-cols-6 lg:grid-rows-1 flex flex-wrap justify-center mt-[70px] gap-[24px]">
                <div v-for="topCategoryItem of topCategoryList" :key="topCategoryItem.id"
                    class="flex flex-col justify-center items-center w-[200px] mx-auto lg:mx-0 border-1 border-[#EDEDED]
                        rounded-[6px] py-[32px]
                    "
                >
                    <img :src="topCategoryItem.img" :alt="topCategoryItem.heading" 
                        class="mb-[20px] size-[80px]"
                    />
                    <h6 class="text-[18px] text-[#1A1A1A] font-medium mb-[6px]">{{ topCategoryItem.heading }}</h6>
                    <small class="text-[14px] text-[#808080]">{{ topCategoryItem.number }} Products</small>
                </div>
            </div>
            <div class="my-[100px] lg:grid lg:grid-cols-3 lg:grid-rows-1 flex flex-wrap justify-center
                gap-[24px]
            ">
                <div v-for="topCategoryBigItem of topCategoryBigList" :key="topCategoryBigItem.id"
                    class="lg:col-span-1 lg:row-span-1 bg-contain lg:bg-cover w-[315px] lg:w-[380px] min-h-[400px] lg:min-h-[500px] flex flex-col items-center pt-[35px]
                        bg-no-repeat mx-auto lg:mx-0 rounded-[8px]
                    "
                    :style="{ backgroundImage: `url(${topCategoryBigItem.img})` }"
                >
                    <small :class="['uppercase font-medium text-[14px] mb-[16px]',
                        topCategoryBigItem.id ? `${topCategoryBigItem.smallTextColor}` : ''
                    ]">{{ topCategoryBigItem.smallText }}</small>
                    <h3
                        :class="['text-[29px] lg:text-[40px] font-semibold leading-[120%] mb-[12px] text-center',
                            topCategoryBigItem.id ? `${topCategoryBigItem.headingColor}`: ''
                        ]"
                    >{{ topCategoryBigItem.heading }}</h3>
                    <span v-html="topCategoryBigItem.html" class="mb-[28px]"></span>
                    <NuxtLink to="/shop">
                        <button class="text-[#00B207] bg-white flex items-center gap-x-[16px] py-[16px] px-[40px] rounded-[53px] cursor-pointer 
                        hover:bg-white/90">
                            Shop now
                            <img src="/images/icons/right-arrow-green-icon.svg" alt="right arrow icon" />
                        </button>
                    </NuxtLink>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
const topCategoryList = [
    {
        id: 1,
        img: '/images/home/top-category/top-category-one-img.png',
        heading: 'Vegetables',
        number: '165'
    },
    {
        id: 2,
        img: '/images/home/top-category/top-category-two-img.png',
        heading: 'Fresh Fruit',
        number: '137'
    },{
        id: 3,
        img: '/images/home/top-category/top-category-three-img.png',
        heading: 'River Fish',
        number: '34'
    },{
        id: 4,
        img: '/images/home/top-category/top-category-four-img.png',
        heading: 'Meat',
        number: '165'
    },{
        id: 5,
        img: '/images/home/top-category/top-category-five-img.png',
        heading: 'Water and Drinks',
        number: '48'
    },{
        id: 6,
        img: '/images/home/top-category/top-category-six-img.png',
        heading: 'Snacks',
        number: '165'
    },
]
const topCategoryBigList = [
    {
        id: 1,
        img: '/images/home/top-category/top-category-big-one-img.png',
        smallText: 'best deals',
        smallTextColor: 'text-white',
        heading: 'Sale of the Month',
        headingColor: 'text-white',
        html: "<h5 class='text-white text-[20px]'>Started at <span class='!text-[#00B207] !font-semibold'>$29.99</span></h5>"
    },
    {
        id: 2,
        img: '/images/home/top-category/top-category-big-two-img.png',
        smallText: '85% fat free',
        smallTextColor: 'text-white',
        heading: 'Low-Fat Meat',
        headingColor: 'text-white',
        html: "<h5 class='text-white text-[20px]'>Started at <span class='!text-[#FF8A00] !font-semibold'>$79.99</span></h5>"
    },
    {
        id: 3,
        img: '/images/home/top-category/top-category-big-three-img.png',
        smallText: 'summer sale',
        smallTextColor: 'text-[#1A1A1A]',
        heading: '100% Fresh Fruit',
        headingColor: 'text-[#1A1A1A]',
        html: "<h5 class='text-[#1A1A1A] text-[20px]'>Started at <span class='!text-[#FCC900] py-[6px] rounded-[5px] px-[12px] bg-[#1A1A1A] !font-semibold'>$29.99</span></h5>"
    }
]
</script>