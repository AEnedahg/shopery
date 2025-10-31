<template>
    <NewsLetter />
    <div class="w-screen bg-[#1A1A1A] lg:px-17.5 px-4 lg:py-20 py-10 mt-20">
        <section class="max-w-[1440px] mx-auto 
            lg:grid lg:grid-cols-7 lg:grid-rows-1 flex flex-col flex-wrap
            lg:gap-x-[50px] gap-[30px]
        ">
            <div class="lg:col-span-2 lg:row-span-1 flex flex-col gap-y-[16px]">
                <h6 class="font-medium text-white text-[20px] text-[#1A1A1A]">About Shopery</h6>
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
        </section>
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
</script>