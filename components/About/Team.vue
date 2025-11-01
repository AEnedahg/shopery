<template>
    <div class="w-screen bg-[#EDF2EE] lg:px-17.5 px-4 lg:py-20 py-10">
        <section class="max-w-[1440px] mx-auto">
            <h1 class="font-semibold text-[#1A1A1A] text-[32px] lg:text-[48px] leading-[120%] text-center">Our Awesome Team</h1>
            <p class="mt-[12px] text-[#666666] text-[16px] text-center leading-[150%] max-w-[640px] mx-auto">
                Our team works together to bring you the best experience every time. From planning to execution, 
                every member contributes creativity, 
                passion, and precision to make Shopery the marketplace you can always trust.</p>
            <div class="mt-[50px] lg:grid lg:grid-cols-4 lg:grid-rows-1 flex flex-wrap gap-[24px]">
                <div v-for="teamMember of teamMembers" :key="teamMember.id" 
                class="max-w-[312px] mx-auto rounded-[10px] flex flex-col gap-y-[4px]">
                    <img :src="teamMember.img" :alt="teamMember.name" />
                    <div class="bg-white py-[16px] px-[20px]">
                        <h6 class="text-[18px] leading-[150%] font-medium">{{ teamMember.name }}</h6>
                        <small class="text-[14px] leading-[150%] text-[#808080]">{{ teamMember.role }}</small>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
const teamMembers = [
    {
        id: 1,
        img: '/images/about/about-team-member-one.png',
        name: 'Robert Wilson',
        role: 'CEO & Founder'
    }, {
        id: 2,
        img: '/images/about/about-team-member-two.png',
        name: 'James Cooper',
        role: 'Worker'
    }, {
        id: 3,
        img: '/images/about/about-team-member-three.png',
        name: 'Cody Fisher',
        role: 'Security Guard'
    }, {
        id: 4,
        img: '/images/about/about-team-member-four.png',
        name: 'Robert Fox',
        role: 'Senior Farmer Manager'
    }
]
</script>