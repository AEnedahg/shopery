<template>
    <NewsLetter />
    <div class="w-screen bg-[#1A1A1A] lg:px-17.5 px-4 lg:py-20 py-10 mt-20">
        <section class="max-w-[1440px] mx-auto 
            lg:grid lg:grid-cols-7 lg:grid-rows-1 flex flex-col flex-wrap
            lg:gap-x-[50px] gap-[30px]
        ">
            <div class="lg:col-span-2 lg:row-span-1 flex flex-col gap-y-[16px]">
                <h6 class="font-medium text-white text-[20px]">About Shopery</h6>
                <small class="text-[14px] text-[#808080]">Shopery delivers fresh groceries, pantry staples,
                     and gourmet delights right to your door. 
                    From everyday essentials to premium ingredients, we make food 
                    shopping effortless and enjoyable.
                </small>
                <div class="flex justify-between">
                    <small class="text-white font-medium underline underline-offset-4 decoration-2
                        decoration-[#00B207]
                    ">
                        +234 81 108 344 37
                    </small>
                    <small class="text-[14px] text-[#808080]">or</small>
                    <small class="text-white font-medium underline underline-offset-8 decoration-2
                        decoration-[#00B207]
                    ">
                        aenedah61@gmail.com
                    </small>
                </div>
            </div>
            <div v-for="footerLinksGroup of footerLinksGroups" :key="footerLinksGroup.id"
                class="lg:col-span-1 lg:row-span-1"
            >
                <h6 class="font-medium text-white text-[20px] text-[#1A1A1A] mb-[20px]">{{ footerLinksGroup.heading }}</h6>
                <div class="flex flex-col gap-y-[12px]">
                    <small 
                        class="text-[14px] text-[#808080]"
                    v-for="footerLinksItem in footerLinksGroup.content" :key="footerLinksItem">{{ footerLinksItem}}</small>
                </div>
            </div>
            <div class="lg:col-span-2 lg:row-span-1">
                <h6 class="font-medium text-white text-[20px]">About Shopery</h6>
                <div class="flex flex-wrap mt-[20px] gap-[8px]">
                    <button 
                        v-for="appStore of appStores" :key="appStore.id"
                    class="bg-[#333333] flex justify-between items-center rounded-[4px] p-[10px]">
                        <img :src="appStore.img" :alt="appStore.text" />
                        <div>
                            <small class="text-[11px] text-[#B3B3B3] leading-[130%]">Download on the</small>
                            <p class="text-base text-white font-medium">{{ appStore.text }}</p>
                        </div>
                    </button>
                </div>
            </div>
        </section>
        <hr class="text-[#808080] mt-[80px]" />
        <div class="lg:grid lg:grid-cols-7 lg:grid-rows-1 flex flex-wrap py-[28px] items-center gap-[20px]">
            <div class="lg:col-span-1 lg:row-span-1 flex *:size-[40px] lg:*:size-[30px] justify-between w-full">
                <img v-for="socialIcon of socialIcons" :key="socialIcon.id" 
                    :src="socialIcon.img" :alt="socialIcon.alt"
                />
            </div>
            <small class="lg:col-span-4 row-span-1 text-center text-[#808080] text-[14px] leading-[150%]">Shopery eCommerce &copy; {{ new Date().getFullYear() }}. All Rights Reserved</small>
            <div class="lg:col-span-2 lg:row-span-1 flex flex-wrap gap-[20px] *:max-w-[65px] *:min-h-[32px] justify-between">
                <img v-for="footerBrand of footerBrands" :key="footerBrand.id" 
                    :src="footerBrand.img" :alt="footerBrand.alt"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
const footerLinksGroups = [
    {
        id: 1,
        heading: 'My Account',
        content: [
            'My Account',
            'Order History',
            'Shoping Cart',
            'Wishlist',
            'Settings'
        ]
    },
    {
        id: 2,
        heading: 'Help',
        content: [
            'Contact',
            'Faqs',
            'Terms & Conditions',
            'Privacy Policy'
        ]
    },
    {
        id: 3,
        heading: 'Proxy',
        content: [
            'About',
            'Shop',
            'Product',
            'Product Details',
            'Track Order'
        ]
    },
    
]
const appStores = [
    {
        id: 1,
        img: '/images/home/footer/apple-store-icon.svg',
        text: 'App Store'
    },
    {
        id: 2,
        img: '/images/home/footer/google-playstore-icon.svg',
        text: 'Google play'
    },
]

const socialIcons = [
    {
        id: 1,
        img: '/images/home/footer/facebook-icon.png',
        alt: 'facebook icon'
    },
    {
        id: 2,
        img: '/images/home/footer/x-icon.png',
        alt: 'x icon'
    },
    {
        id: 3,
        img: '/images/home/footer/pinterest-icon.png',
        alt: 'pinterest icon'
    },
    {
        id: 4,
        img: '/images/home/footer/instagram-icon.png',
        alt: 'instagram icon'
    }
]
const footerBrands = [
    {
        id: 1,
        img: '/images/home/footer/bottom-footer-icon-one.png',
        alt: 'apple pay icon'
    },
    {
        id: 2,
        img: '/images/home/footer/bottom-footer-icon-two.png',
        alt: 'visa icon'
    },
    {
        id: 3,
        img: '/images/home/footer/bottom-footer-icon-three.png',
        alt: 'discover icon'
    },
    {
        id: 4,
        img: '/images/home/footer/bottom-footer-icon-four.png',
        alt: 'master card icon'
    },
    {
        id: 5,
        img: '/images/home/footer/bottom-footer-icon-five.png',
        alt: 'secure payment icon'
    }
]
</script>