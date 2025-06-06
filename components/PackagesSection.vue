<script setup lang="ts">
import IconGlasses from './icon/Glasses.vue'
import IconPen from './icon/Pen.vue'
import IconSpellcheck from './icon/Spellcheck.vue'

const packages = [
  {
    icon: IconGlasses,
    title: 'Beta čtení',
    description: 'Nezávislý čtenářský pohled, který včas odhalí logické trhliny, chybné tempo, či slepá místa.',
    price: 39,
  },
  {
    icon: IconSpellcheck,
    title: 'Korektura',
    description: 'Jazykově precizní oprava pravopisu, interpunkce a typografie pro naprosto čistý text.',
    price: 69,
  },
  {
    icon: IconPen,
    title: 'Redigace',
    description: 'Hloubková úprava stylu a kompozice, která zajistí plynulost a přirozenost textu.',
    price: 119,
  },
]
</script>

<template>
  <section id="nabizim" class="px-4 py-12 md:p-16 bg-white text-slate-900">
    <div class="mx-auto max-w-screen-xl flex flex-col md:flex-row gap-8 justify-center my-0 md:my-18">
      <div v-for="pkg in packages" :key="pkg.title" class="border border-[#EDDBC4] bg-[#F9F3EB] rounded-lg p-12">
        <div class="flex flex-col items-center gap-4">
          <div class="flex md:flex-col items-center gap-4 md:gap-6">
            <div class="rounded-full p-4 bg-accent">
              <component :is="pkg.icon" class="w-6 h-6 md:w-12 md:h-12 text-white" />
            </div>
            <h2 class="text-3xl font-semibold">
              {{ pkg.title }}
            </h2>
          </div>
          <div class="text-center ">
            <p class="mb-6 max-w-[26ch]">
              {{ pkg.description }}
            </p>
            <p class="text-4xl font-semibold">
              {{ pkg.price }} Kč
            </p>
            <small class="text-xs text-slate-700 -mt-2">
              za normostranu
            </small>
          </div>
          <button class="bg-accent hover:bg-accentHover text-white px-4 py-2 rounded-md mt-8">
            Ozvězte se mi
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
