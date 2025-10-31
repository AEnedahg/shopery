<template>
    <div class="w-screen bg-[#EDF2EE] lg:px-17.5 px-4 lg:py-20 py-10 mt-20">
        <section class="max-w-[1440px] mx-auto">
            <h1 class="text-[#1A1A1A] font-semibold lg:text-left text-center text-[40px] leading-[120%] mb-[70px]">
                Client Testimonial
            </h1>
            <div class="lg:grid lg:grid-cols-3 lg:grid-rows-1 flex flex-col flex-wrap justify-center gap-[24px]">
                <div v-for="testimonial of testimonials" :key="testimonial.id"
                    class="p-[24px] max-w-[424px] mx-auto bg-white"
                >
                    <img src="/images/home/testimonials/quote-icon.svg" alt="quote icon"
                        class="w-[32px] h-[26px]"
                    />
                    <small class="text-[14px] text-[#4D4D4D] inline-block py-[16px]">{{ testimonial.text }}</small>
                    <div class="flex justify-between items-center">
                        <div class="flex items-center">
                            <img :src="testimonial.img" :alt="testimonial.name" 
                                class="inline-block mr-[6px] size-[52px]"
                            />
                            <div>
                                <p class="text-[16px] text-[#1A1A1A] font-medium">{{ testimonial.name }}</p>
                                <small class="text-[14px] text-[#999999]">Customer</small>
                            </div>
                        </div>
                        <img src="/images/home/testimonials/five-stars-rating-icon.svg" alt="five stars ratinng" />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
const testimonials = [
    {
        id: 1,
        text: 'Shopery makes my grocery shopping so easy! Everything I need is just a click away, and the delivery is always fast and fresh.',
        img: '/images/home/testimonials/robert-fox.png',
        name: 'Robert Fox',
    },
    {
        id: 2,
        text: 'I love how convenient Shopery is — I can buy all my food items from home without worrying about quality or late deliveries.',
        img: '/images/home/testimonials/david-russell.png',
        name: 'David Russell',
    },
    {
        id: 3,
        text: 'Since I started using Shopery, shopping for food has become stress-free. The prices are great, and the service is amazing!',
        img: '/images/home/testimonials/michael-pena.png',
        name: 'Michael Pena',
    },
]
</script>