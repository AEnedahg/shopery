<template>
    <div class="w-screen bg-white lg:px-17.5 px-4">
        <section class="max-w-[1440px] mx-auto py-[80px] lg:grid lg:grid-cols-4 lg:grid-rows-1 flex flex-wrap
            gap-[24px]
        ">
            <div class="px-[20px] shadow-lg max-w-[312px] mx-auto lg:col-span-1 lg:row-span-1 rounded-[8px]">
                <div v-for="contactInfo of contactInfos" :key="contactInfo.id"
                    class="p-[24px] flex flex-col gap-y-[16px]"
                >
                    <img :src="contactInfo.img" :alt="contactInfo.alt" 
                        class="size-[51px] mx-auto"
                    />
                    <div class="*:text-[16px] *:leading-[170%] *:text-[#333333] *:text-center">
                        <p>{{ contactInfo.text }}</p>
                        <p>{{ contactInfo.textTwo }}</p>
                    </div>
                    <hr
                        :class="['text-[#E5E5E5]',
                            contactInfo.borderBottom == true ? 'block' : 'hidden'
                        ]"
                    />
                </div>
            </div>
            <form class="lg:col-span-3 lg:row-span-1 pt-[44px] px-[20px] lg:px-[50px] pb-[50px] shadow-lg w-full mx-auto">
                <h3 class="text-[24px] font-semibold text-[#1A1A1A] mb-[8px]">Just Say Hello!</h3>
                <small class="text-[14px] text-[#808080] leading-[150%] mb-[24px] inline-block">Do you fancy saying hi to me or you want to get started with your project and you need my help? Feel free to contact me.</small>
                <div class="lg:grid lg:grid-cols-2 lg:grid-rows-4 flex flex-wrap gap-[16px]">
                    <input type="text" name="name" placeholder="Jane Doe" 
                    class="placeholder:text-[#666666] py-[14px] px-[16px] 
                        text-[#1A1A1A] active:border-[#00B207]
                    border-1 border-[#E5E5E5] rounded-[6px] lg:col-span-1 lg:row-span-1 w-full"/>
                    <input type="email" name="email" placeholder="janedoe22@gmail.com" 
                    class="placeholder:text-[#666666] py-[14px] px-[16px] 
                        text-[#1A1A1A] active:border-[#00B207]
                    border-1 border-[#E5E5E5] rounded-[6px]
                        lg:col-span-1 lg:row-span-1 w-full
                    " />
                    <input type="text" name="subject" placeholder="Subject" 
                    class="placeholder:text-[#666666] py-[14px] px-[16px] 
                        text-[#1A1A1A] active:border-[#00B207]
                    border-1 border-[#E5E5E5] rounded-[6px]
                        lg:col-span-2 lg:row-span-1 w-full
                    "/>
                    <textarea rows="3" name="message" placeholder="Message" class="placeholder:text-[#666666] py-[14px] px-[16px] 
                        text-[#1A1A1A] active:border-[#00B207]
                    border-1 border-[#E5E5E5] rounded-[6px]
                        lg:col-span-2 lg:row-span-2 w-full
                    "></textarea>
                </div>
                <button class="text-white rounded-[43px] font-semibold text-[16px] px-[40px] 
                    inline-block mt-[16px]
                py-[16px] bg-[#00B207]">
                    Send Message
                </button>
            </form>
        </section>
    </div>
</template>

<script setup>
const contactInfos = [
    {
        id: 1,
        img: '/images/contact/map-icon.png',
        alt: 'location icon',
        text: '92 Uwanse Street, Mount Zion, Calabar, Cross River State, Nigeria',
        textTwo: '',
        borderBottom: true
    },
    {
        id: 2,
        img: '/images/contact/mail-icon.png',
        alt: 'mail icon',
        text: 'aenedah61@gmail.com',
        textText: 'enedahanthony54@gmail.com',
        borderBottom: true
    },
    {
        id: 3,
        img: '/images/contact/phone-icon.png',
        alt: 'phone icon',
        text: '+234 81 108 344 37',
        textTwo: '',
        borderBottom: false
    }
]
</script>
        