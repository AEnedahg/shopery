<template>
    <div class="w-screen bg-white lg:px-17.5">
        <section class="max-w-[1440px] mx-auto">
            <div class="flex flex-col lg:flex-row flex-wrap">
                <div 
                    v-if="detailedProduct"
                class="lg:w-[45%] relative">
                    <img :src="detailedProduct.img" :alt="detailedProduct.name" 
                        class="ml-20"
                    />
                    <div class="flex flex-row lg:flex-col gap-y-[12px] absolute 
                    top-[10px]
                    lg:top-1/2 lg:-translate-y-1/2 
                    left-0">
                        <div class="bg-white">
                            <img
                            class="w-[80px] h-[90px] object-contain bg-white bg-transparent"
                        v-for="detailedProductGalleryItem of detailedProduct.gallery"
                        :src="detailedProductGalleryItem" alt="smaller images of main product" />
                        </div>
                    </div>
                </div>
                <div 
                    v-if="detailedProduct"
                class="lg:w-[55%] mt-[32px] z-50 p-4">
                    <div class="flex gap-[12px] flex-wrap items-center">
                        <h2 class="text-[36px] font-semibold text-[#1A1A1A]">
                            {{ detailedProduct.name }}
                        </h2>
                        <span class="bg-[#20B526]/20 px-[8px] py-[4px] text-[#2C742F] 
                        rounded-[4px] inline-flex items-center justify-center">In Stock</span>
                    </div>
                    <img src="/images/shop/five-star-rating.png" alt="five star rating" 
                    class="mt-[12px] w-[155px]"/>
                    <div class="mt-[23px] flex items-center">
                         <h5 class="line-through text-[20px] mr-[6px] leading-[120%] text-[#B3B3B3]">
                            ${{ detailedProduct.originalPrice }}
                        </h5>
                        <h5 class="text-[24px] font-medium leading-[150%] text-[#2C742F]">
                            {{ detailedProduct.price }}
                        </h5>
                        <span class="ml-[12px] bg-[#EA4B48]/10 px-[8px] py-[4px] text-[#EA4B48] 
                        rounded-[30px] inline-flex items-center justify-center">
                           {{ detailedProduct.discountPercent }}% Off
                        </span>
                    </div>
                    <hr class="mt-[20px] mb-[24px] text-[#E5E5E5]"/>
                    <div class="flex items-center gap-x-[8px]">
                        <small class="text-[14px] leading-[150%] text-[#1A1A1A]">Brand: </small>
                        <img src="/images/shop/product-brand-icon.png" alt="farnary logo" 
                            class="size-[56px]"
                        />
                    </div>
                    <small class="text-[#808080] text-[14px] inline-block mt-[16px]">
                        {{ detailedProduct.shortDesc }}
                    </small>
                    <hr class="mt-[20px] mb-[24px] text-[#E5E5E5]"/>
                    <div class="flex flex-wrap items-center gap-[12px]">
                        <div
                            class="w-[124px] h-[50px] flex justify-between items-center rounded-[170px] border border-[#E5E5E5] p-[8px]"
                        >
                            <button
                            class="bg-[#F2F2F2] w-[50px] rounded-full flex items-center justify-center text-[#1A1A1A] text-[14px] p-[10px]"
                           @click="cart.decrement(item.id)"
                            >
                            -
                            </button>

                            <small class="text-[16px] font-medium">{{ count }}</small>

                            <button
                            class="bg-[#F2F2F2] w-[50px] rounded-full flex items-center justify-center text-[#1A1A1A] text-[14px] p-[10px]"
                            @click="cart.increment(item.id)"
                            >
                            +
                            </button>
                        </div>
                        <NuxtLink to="/shop">
                            <button class="text-white bg-[#00B207] flex items-center justify-center
                            gap-x-[16px] py-[16px] px-[40px] rounded-[53px] cursor-pointer 
                                w-[140%]
                            lg:w-[185%]
                            hover:bg-[#00B207]/90"
                            @click="handleAddToCart(product)"
                            >
                                Add to Cart
                                <img src="/images/shop/cart-icon-white.png" alt="white cart icon" 
                                    class="w-[15px]"
                                />
                            </button>
                        </NuxtLink>
                    </div>
                    <hr class="mt-[20px] mb-[24px] text-[#E5E5E5]"/>
                    <small class="text-[#1A1A1A] block text-[14px] font-medium *:font-normal">Category:
                        <span class="!text-[#808080]">Vegetables</span>
                    </small>
                    <small class="text-[#1A1A1A] block text-[14px] font-medium *:font-normal
                        *:inline-block *:ml-[4px] 
                    ">Tag:
                        <span class="!text-[#808080]">Vegetables</span>
                        <span class="!text-[#808080]">Healthy</span>
                        <span class="!text-[#808080]">{{ detailedProduct.name }}</span>
                    </small>
                </div>
            </div>
            <hr class="mt-[40px] lg:mt-[80px] mb-[24px] mx-4 text-[#E5E5E5]" />
            <div class="flex flex-col lg:flex-row flex-wrap p-4">
                <div class="lg:w-1/2">
                    <div class="text-[#808080] text-[14px] leading-[150%]">{{ detailedProduct.paraOne }}</div>
                    <div class="text-[#808080] text-[14px] leading-[150%] mt-[40px]">{{ detailedProduct.paraTwo }}</div>
                    <div class="mt-[20px] mb-[22px]">
                        <div v-for="feature of detailedProduct.features"
                            class="flex gap-x-[8px] mb-[14px]"
                        >
                            <img src="/images/about/check-icon.png" alt="check-icon" 
                                class="size-[20px]"
                            />
                            <small class="text-[14px] text-[#666666]">{{ feature }}</small>
                        </div>
                    </div>
                    <div class="text-[#808080] text-[14px] leading-[150%] mt-[30px]">{{ detailedProduct.extraInfo }}</div>
                </div>
                <div class="lg:w-1/2 mt-[24px] lg:mt-0">
                    <img src="/images/shop/shop-delivery-guy.png" alt="image of delivery guy" 
                        class="w-full"
                    />
                    <div class="py-[24px] px-[20px] rounded-[6px] border-1 border-[#E5E5E5]
                        flex flex-wrap mt-[20px] gap-[22px]
                    ">
                        <div 
                            class="flex items-center gap-[12px]"
                        v-for="deliveryItem of deliveryList" :key="deliveryItem.id"
                        >
                            <img :src="deliveryItem.img" alt="icon for delivery item" 
                                class="size-[32px]"
                            />
                            <div class="ml-[12px]">
                                <p class="font-medium text-[14px] text-[#1A1A1A]">{{ deliveryItem.heading }}</p>
                                <p class="text-[13px] leading-[150%] text-[#808080] mt-[6px]">{{ deliveryItem.text }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, computed } from 'vue'
const router = useRouter()
import { useCartStore } from '~/stores/cart'

const cart = useCartStore()

const count = ref(0)

function handleAddToCart(product) {
  cart.addToCart(product)
  router.push('/cart')
}

const deliveryList = computed(() => [
  {
    id: 1,
    img: '/images/shop/shop-discount-icon.png',
    heading: `${detailedProduct.discountPercent}% Discount`,
    text: `Save your ${detailedProduct.discountPercent}% money with us`,
  },
  {
    id: 2,
    img: '/images/shop/shop-organic-icon.png',
    heading: '100% Organic',
    text: '100% Organic Vegetables',
  },
])

const detailedProducts = [
  {
    id: 1,
    name: 'Big Potatoes',
    img: '/images/shop/shop-product-one.png',
    shortDesc: "Fresh, hearty potatoes with rich flavor and smooth texture for all cooking styles.",
    price: 34.99,
    discountPercent: 20,
    originalPrice: 43.74,
    paraOne:
      'Big Potatoes from Shopery are naturally cultivated and harvested at their peak freshness. These potatoes have a rich, earthy taste and a creamy texture that makes them ideal for mashing, roasting, or frying. Perfect for home-cooked meals, they deliver a hearty and satisfying flavor to every dish. Packed with nutrients, they serve as an excellent source of carbohydrates and fiber, giving you the energy you need throughout the day.',
    paraTwo:
      'Whether for family dinners or professional kitchens, these large potatoes are a reliable staple that enhance any recipe with texture and nutrition.',
    features: [
      'Organically grown and chemical-free',
      'Ideal for all cooking methods',
      'High in fiber and potassium',
      'Long shelf life for kitchen storage'
    ],
    extraInfo:
      'Perfect for everyday cooking, Shopery Big Potatoes combine quality, taste, and freshness at an affordable price.',
    gallery: [
      '/images/shop/potato/potato-one.jfif',
      '/images/shop/potato/potato-two.jpg',
      '/images/shop/potato/potato-three.jpg',
      '/images/shop/potato/potato-one.jfif'
    ]
  },
  {
    id: 2,
    name: 'Chanise Cabbage',
    img: '/images/shop/shop-product-two.png',
    shortDesc: "Crisp, leafy cabbage packed with vitamins and perfect for salads or stir-fries.",
    price: 24.99,
    discountPercent: 15,
    originalPrice: 29.40,
    paraOne:
      'Shopery’s Chanise Cabbage is a fresh, leafy vegetable known for its crunchy texture and slightly sweet taste. It is rich in vitamins C and K, making it a nutritious addition to salads, soups, and stir-fries. Carefully harvested and handled, this cabbage maintains its natural crispness and color. Its tender leaves and mild flavor make it perfect for both raw and cooked dishes.',
    paraTwo:
      'Enjoy the versatility of Chanise Cabbage in wraps, salads, and side dishes that enhance your meal’s freshness and nutrition.',
    features: [
      'Crisp and fresh leaves',
      'Rich in vitamins and minerals',
      'Perfect for salads and soups',
      'Naturally grown and pesticide-free'
    ],
    extraInfo:
      'Shopery delivers premium Chanise Cabbage that keeps your meals light, fresh, and full of natural goodness.',
    gallery: [
      '/images/shop/chanise-cabbage/chanise-cabbage-one.jpg',
      '/images/shop/chanise-cabbage/chanise-cabbage-two.jpg',
      '/images/shop/chanise-cabbage/chanise-cabbage-three.jpg',
      '/images/shop/chanise-cabbage/chanise-cabbage-four.jpg'
    ]
  },
  {
    id: 3,
    name: 'Corn',
    img: '/images/shop/shop-product-three.png',
    shortDesc: "Sweet golden corn with tender kernels, ideal for grilling, soups, and salads.",
    price: 14.99,
    discountPercent: 10,
    originalPrice: 16.65,
    paraOne:
      'Shopery Corn is harvested at the perfect stage to retain its natural sweetness and tenderness. Every kernel bursts with flavor, offering a satisfying crunch whether grilled, boiled, or roasted. It’s a versatile food option suitable for salads, soups, and main dishes. High in fiber and essential vitamins, this corn not only tastes great but also promotes good digestion and overall well-being.',
    paraTwo:
      'Fresh, juicy, and golden, Shopery Corn is a customer favorite that complements every cuisine beautifully.',
    features: [
      'Naturally sweet and tender',
      'Freshly harvested and cleaned',
      'Rich in fiber and nutrients',
      'Perfect for multiple cooking styles'
    ],
    extraInfo:
      'Golden and flavorful, Shopery Corn adds natural sweetness and texture to your everyday meals.',
    gallery: [
      '/images/shop/corn/corn-one.jpg',
      '/images/shop/corn/corn-two.webp',
      '/images/shop/corn/corn-three.jpg',
      '/images/shop/corn/corn-four.webp'
    ]
  },
  {
    id: 4,
    name: 'Egg Plant',
    img: '/images/shop/shop-product-four.png',
    shortDesc: "Firm, glossy eggplants that absorb flavors beautifully for healthy tasty meals.",
    price: 24.99,
    discountPercent: 25,
    originalPrice: 33.32,
    paraOne:
      'Shopery’s Egg Plant is smooth, firm, and full of flavor. Known for its glossy skin and rich, slightly nutty taste, it is a key ingredient in Mediterranean and Asian cuisines. Whether grilled, fried, or baked, its spongy flesh absorbs flavors beautifully, making it a favorite for creative cooking. It’s low in calories but rich in fiber and antioxidants, contributing to a healthy diet and balanced meals.',
    paraTwo:
      'Perfect for stews, curries, or oven-baked dishes, Shopery Egg Plant elevates the flavor and presentation of your meals.',
    features: [
      'Glossy and firm texture',
      'Rich in antioxidants',
      'Low in calories, high in fiber',
      'Ideal for grilling and roasting'
    ],
    extraInfo:
      'Enjoy fresh, premium-quality Egg Plants from Shopery for healthier and tastier homemade dishes.',
    gallery: [
      '/images/shop/eggplant/eggplant-one.webp',
      '/images/shop/eggplant/eggplant-two.webp',
      '/images/shop/eggplant/eggplant-three.jpg',
      '/images/shop/eggplant/eggplant-four.webp'
    ]
  },
  {
    id: 5,
    name: 'Fresh Cauliflower',
    img: '/images/shop/shop-product-five.png',
    shortDesc: "Mild, nutritious cauliflower with firm florets, great for soups, curries, or roasting.",
    price: 14.99,
    discountPercent: 15,
    originalPrice: 17.64,
    paraOne:
      'Shopery’s Fresh Cauliflower offers a perfect balance of flavor, texture, and nutrition. Its firm florets and mild taste make it one of the most adaptable vegetables for any dish — from soups and salads to roasted sides and curries. It’s an excellent low-carb substitute for grains and legumes, making it a favorite among healthy eaters. Packed with vitamins C and K, it supports immunity and bone health.',
    paraTwo:
      'From classic recipes to modern diets, Fresh Cauliflower from Shopery fits every cooking style with ease and quality.',
    features: [
      'Fresh, firm florets',
      'Low in carbs, high in fiber',
      'Versatile for any dish',
      'Naturally grown and pesticide-free'
    ],
    extraInfo:
      'Shopery Cauliflower keeps your meals light, nutritious, and deliciously fresh every time.',
    gallery: [
      '/images/shop/cauliflower///cauliflower-one.jpg',
      '/images/shop/cauliflower///cauliflower-two.webp',
      '/images/shop/cauliflower///cauliflower-three.jpg',
      '/images/shop/cauliflower///cauliflower-four.webp'
    ]
  },
  {
    id: 6,
    name: 'Green Apple',
    img: '/images/shop/shop-product-six.png',
    shortDesc: "Crisp and tangy green apples full of antioxidants for a fresh daily boost.",
    price: 14.99,
    discountPercent: 10,
    originalPrice: 16.65,
    paraOne:
      'Shopery Green Apples are crisp, juicy, and perfectly tart — a refreshing snack or a zesty addition to any recipe. These apples are rich in antioxidants, vitamin C, and dietary fiber, making them an excellent choice for maintaining good health. They’re ideal for baking, juicing, or enjoying raw, bringing a fresh crunch to every bite. Grown naturally, they retain their full flavor and nutritional value.',
    paraTwo:
      'Add Shopery Green Apples to your daily diet for a naturally sweet and healthy energy boost.',
    features: [
      'Crisp and juicy texture',
      'Rich in antioxidants',
      'Perfect for baking and snacking',
      'Supports digestion and skin health'
    ],
    extraInfo:
      'Enjoy the freshness and vitality of Shopery’s Green Apples, picked at their flavorful best.',
    gallery: [
      '/images/shop/green-apple/green-apple-one.webp',
      '/images/shop/green-apple/green-apple-two.webp',
      '/images/shop/green-apple/green-apple-three.webp',
      '/images/shop/green-apple/green-apple-four.jpg'
    ]
  },
  {
    id: 7,
    name: 'Green Capsicum',
    img: '/images/shop/shop-product-seven.png',
    shortDesc: "Bright, crunchy capsicum rich in vitamin C and perfect for salads and grills.",
    price: 34.99,
    discountPercent: 20,
    originalPrice: 43.74,
    paraOne:
      'Shopery Green Capsicum, also known as bell pepper, is crisp, colorful, and versatile. Its refreshing flavor makes it suitable for salads, stir-fries, and grills. Loaded with vitamin C and antioxidants, it enhances your immunity and promotes healthy skin. Each capsicum is freshly picked, ensuring maximum juiciness and flavor retention. It’s a must-have for every kitchen that values freshness and nutrition.',
    paraTwo:
      'Shopery delivers premium-grade Green Capsicum to bring vibrancy and nutrition to your meals.',
    features: [
      'Crisp and vibrant color',
      'Rich in vitamin C',
      'Adds flavor to any meal',
      'Perfect for salads and stir-fries'
    ],
    extraInfo:
      'Bright, fresh, and full of goodness, Shopery Green Capsicum brings health and flavor together beautifully.',
    gallery: [
      '/images/shop/green-capsicum/green-capsicum-one.webp',
      '/images/shop/green-capsicum/green-capsicum-two.webp',
      '/images/shop/green-capsicum/green-capsicum-three.webp',
      '/images/shop/green-capsicum/green-capsicum-four.webp'
    ]
  },
  {
    id: 8,
    name: 'Green Chilli',
    img: '/images/shop/shop-product-eight.png',
    shortDesc: "Spicy, flavorful green chillies that bring natural heat and zest to your meals.",
    price: 14.99,
    discountPercent: 30,
    originalPrice: 21.41,
    paraOne:
      'Shopery Green Chilli brings the perfect balance of heat and flavor to your kitchen. Freshly harvested and naturally cultivated, each chilli delivers a sharp, tangy taste that enhances your curries, sauces, and soups. It’s an excellent source of vitamins A and C, which boost immunity and metabolism. Whether chopped, sliced, or blended, this spice adds zest and aroma to every dish.',
    paraTwo:
      'Bring life to your meals with Shopery’s premium Green Chilli — fiery yet flavorful.',
    features: [
      'Fresh and aromatic',
      'Perfect for spicy dishes',
      'Rich in vitamins A and C',
      'Adds natural heat and flavor'
    ],
    extraInfo:
      'Shopery Green Chilli makes every bite vibrant, energizing, and full of spice.',
    gallery: [
      '/images/shop/green-chilli/green-chilli-one.jpg',
      '/images/shop/green-chilli/green-chilli-two.webp',
      '/images/shop/green-chilli/green-chilli-three.webp',
      '/images/shop/green-chilli/green-chilli-four.webp'
    ]
  },
  {
    id: 9,
    name: 'Green Cucumber',
    img: '/images/shop/shop-product-nine.png',
    shortDesc: "Cool, refreshing cucumbers that hydrate and add crunch to every healthy dish.",
    price: 24.99,
    discountPercent: 10,
    originalPrice: 27.77,
    paraOne:
      'Shopery Green Cucumber is cool, crisp, and hydrating. Grown in ideal conditions, these cucumbers retain their juicy freshness and natural sweetness. Perfect for salads, smoothies, or as a light snack, they are rich in antioxidants and water content, helping to maintain hydration and support glowing skin. Their clean flavor and satisfying crunch make them a refreshing addition to every meal.',
    paraTwo:
      'Enjoy the crisp freshness of Shopery Green Cucumber as a healthy, daily choice.',
    features: [
      'Crisp and hydrating texture',
      'Excellent for skin health',
      'Low calorie, high water content',
      'Perfect for salads and juices'
    ],
    extraInfo:
      'Stay fresh and hydrated with Shopery’s premium Green Cucumbers, grown for taste and wellness.',
    gallery: [
      '/images/shop/green-cucumber/green-cucumber-one.webp',
      '/images/shop/green-cucumber/green-cucumber-two.jpg',
      '/images/shop/green-cucumber/green-cucumber-three.jpg',
      '/images/shop/green-cucumber/green-cucumber-four.jpg'
    ]
  },
  {
  id: 10,
  name: 'Green Lettuce',
  img: '/images/shop/shop-product-ten.png',
  shortDesc: "Fresh, crisp lettuce leaves ideal for light salads, wraps, and nutritious meals.",
  price: 19.99,
  discountPercent: 10,
  originalPrice: 22.21,
  paraOne:
    'Shopery Green Lettuce is fresh, crisp, and packed with nutrients. Ideal for salads, wraps, and sandwiches, its tender leaves provide a refreshing crunch with every bite. Carefully cultivated to preserve its natural texture and color, it brings both flavor and health benefits to your daily meals.',
  paraTwo:
    'Enjoy the clean, crisp taste of Shopery Lettuce — perfect for healthy eating and light meals.',
  features: [
    'Crisp and refreshing texture',
    'Low in calories, high in vitamins',
    'Perfect for salads and wraps',
    'Farm-fresh and chemical-free'
  ],
  extraInfo:
    'Stay healthy and refreshed with Shopery’s Green Lettuce, naturally grown for pure flavor.',
  gallery: [
    '/images/shop/green-lettuce/green-lettuce-one.webp',
    '/images/shop/green-lettuce/green-lettuce-two.webp',
    '/images/shop/green-lettuce/green-lettuce-three.webp',
    '/images/shop/green-lettuce/green-lettuce-four.webp'
  ]
},
{
  id: 11,
  name: 'Ladies Finger',
  img: '/images/shop/shop-product-eleven.png',
  shortDesc: "Tender okra pods full of nutrients and perfect for curries, soups, and stews.",
  price: 16.99,
  discountPercent: 15,
  originalPrice: 19.99,
  paraOne:
    'Shopery Ladies Finger, also known as Okra, is tender, flavorful, and rich in essential nutrients. It’s a staple in many cuisines and perfect for stews, soups, and stir-fries. The pods are fresh, slim, and full of natural goodness that adds smoothness and texture to your dishes.',
  paraTwo:
    'Enjoy delicious, home-cooked meals with Shopery Ladies Finger — fresh, nutritious, and naturally flavorful.',
  features: [
    'Tender and fresh pods',
    'Rich in fiber and vitamins',
    'Perfect for stews and curries',
    'Naturally cultivated and chemical-free'
  ],
  extraInfo:
    'Shopery Ladies Finger brings a balance of taste and nutrition to your everyday cooking.',
  gallery: [
    '/images/shop/ladies-finger/ladies-finger-one.webp',
    '/images/shop/ladies-finger/ladies-finger-two.webp',
    '/images/shop/ladies-finger/ladies-finger-three.webp',
    '/images/shop/ladies-finger/ladies-finger-four.webp'
  ]
},
{
  id: 12,
  name: 'Red Capsicum',
  img: '/images/shop/shop-product-twelve.png',
    shortDesc: "Sweet, vibrant red capsicum packed with antioxidants for colorful, healthy meals.",
  price: 29.99,
  discountPercent: 20,
  originalPrice: 37.49,
  paraOne:
    'Shopery Red Capsicum is bright, juicy, and full of sweet flavor. Known for its vibrant color and crisp texture, it adds both taste and visual appeal to your meals. Perfect for grilling, salads, or stir-fries, it’s loaded with vitamin C and antioxidants for a healthy boost.',
  paraTwo:
    'Bring color and nutrition to your table with Shopery Red Capsicum — sweet, crisp, and farm-fresh.',
  features: [
    'Vibrant red color',
    'Sweet and crunchy taste',
    'Rich in vitamin C and antioxidants',
    'Ideal for all cooking styles'
  ],
  extraInfo:
    'Shopery Red Capsicum adds natural sweetness and nutrition to every meal.',
  gallery: [
    '/images/shop/red-capsicum/red-capsicum-one.webp',
    '/images/shop/red-capsicum/red-capsicum-two.webp',
    '/images/shop/red-capsicum/red-capsicum-three.jpg',
    '/images/shop/red-capsicum/red-capsicum-four.jpg'
  ]
},
{
  id: 13,
  name: 'Red Chilli',
  img: '/images/shop/shop-product-thirteen.png',
    shortDesc: "Hot and aromatic red chillies that enhance every dish with bold spice and flavor.",
  price: 13.99,
  discountPercent: 25,
  originalPrice: 18.65,
  paraOne:
    'Shopery Red Chilli delivers fiery heat and bold flavor to your dishes. Freshly harvested and naturally dried, each chilli packs a punch of spice and aroma that enhances your curries, sauces, and stews. It’s a must-have for spice lovers who want authentic heat with natural freshness.',
  paraTwo:
    'Add a touch of intensity to your meals with Shopery Red Chilli — pure heat, pure flavor.',
  features: [
    'Hot and aromatic',
    'Rich in vitamin A and antioxidants',
    'Perfect for spicy recipes',
    'Freshly dried and preserved naturally'
  ],
  extraInfo:
    'Shopery Red Chilli brings bold flavor and vibrant color to your favorite spicy meals.',
  gallery: [
    '/images/shop/red-chilli/red-chilli-one.webp',
    '/images/shop/red-chilli/red-chilli-two.webp',
    '/images/shop/red-chilli/red-chilli-three.jpg',
    '/images/shop/red-chilli/red-chilli-four.webp'
  ]
},
{
  id: 14,
  name: 'Red Tomato',
  img: '/images/shop/shop-product-fourteen.png',
    shortDesc: "Juicy, sun-ripened tomatoes rich in lycopene, perfect for sauces and salads.",
  price: 17.99,
  discountPercent: 10,
  originalPrice: 19.99,
  paraOne:
    'Shopery Red Tomato is juicy, flavorful, and naturally ripened under the sun. Each tomato bursts with freshness, making it perfect for sauces, salads, and soups. It’s rich in lycopene, vitamin C, and antioxidants that support a healthy lifestyle while adding tangy sweetness to your dishes.',
  paraTwo:
    'Enjoy the taste of freshness in every bite with Shopery Red Tomato — naturally grown and handpicked.',
  features: [
    'Naturally ripened and juicy',
    'Rich in vitamins and lycopene',
    'Perfect for all cuisines',
    'Farm-fresh and chemical-free'
  ],
  extraInfo:
    'Shopery Red Tomatoes bring a perfect blend of freshness, color, and nutrition to your meals.',
  gallery: [
    '/images/shop/red-tomato/red-tomato-one.jpg',
    '/images/shop/red-tomato/red-tomato-two.webp',
    '/images/shop/red-tomato/red-tomato-three.jpg',
    '/images/shop/red-tomato/red-tomato-four.webp'
  ]
},
{
  id: 15,
  name: 'Fresh Mango',
  img: '/images/shop/shop-product-fifteen.png',
    shortDesc: "Sweet tropical mangoes bursting with flavor, ideal for desserts, drinks, and snacks.",
  price: 24.99,
  discountPercent: 25,
  originalPrice: 33.32,
  paraOne:
    'Shopery Fresh Mango is the king of fruits — juicy, aromatic, and bursting with tropical sweetness. Grown in rich, fertile soil, each mango offers a delightful blend of smooth texture and natural flavor. It’s packed with vitamins A and C, boosting your immunity and supporting radiant skin. Perfect for smoothies, desserts, or eating fresh, Shopery Mango brings a taste of sunshine to your table.',
  paraTwo:
    'Enjoy every bite of Shopery Mango — a fresh, sweet, and naturally vibrant experience.',
  features: [
    'Sweet tropical flavor',
    'Rich in vitamins and antioxidants',
    'Perfect for desserts and drinks',
    'Freshly picked and naturally ripened'
  ],
  extraInfo:
    'Taste pure joy with Shopery’s Fresh Mango — nature’s sweetest delight, delivered with care.',
  gallery: [
    '/images/shop/fresh-mango/fresh-mango-one.jpg',
    '/images/shop/fresh-mango/fresh-mango-two.jpg',
    '/images/shop/fresh-mango/fresh-mango-three.jpg',
    '/images/shop/fresh-mango/fresh-mango-four.jpg'
  ]
}
]

const detailedProduct = detailedProducts.find(
  (item) => item.id === Number(route.params.id)
)
</script>