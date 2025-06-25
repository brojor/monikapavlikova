<script setup lang="ts">
import IconGlasses from './icon/Glasses.vue'
import IconPen from './icon/Pen.vue'
import IconSpellcheck from './icon/Spellcheck.vue'

const packages = [
  {
    icon: IconGlasses,
    title: 'Betačtení',
    description: 'Píšete vlastní příběh a chcete, aby byl čtivý? Nejste si jistí, zda jej neokupují nelogičnosti? Určitě se ozvěte. Na Vaši otázku odpovím a ještě poradím, jak text vylepšit či oživit.',
    price: 39,
  },
  {
    icon: IconSpellcheck,
    title: 'Korektura',
    description: 'Máte perfektní text a chcete si být jistí, že je perfektní i co se gramatiky týče? Neváhejte a napište mi. Ráda jej zkontroluji.',
    price: 69,
  },
  {
    icon: IconPen,
    title: 'Redigace',
    description: 'Napsali jste text, který by potřeboval odborný zásah? Chcete, aby byl srozumitelný a dobře stylisticky napsaný? Svěřte mi ho. Já jej zhodnotím a nabídnu prostor pro zlepšení.',
    price: 119,
  },
]
</script>

<template>
  <BaseSection id="nabizim" title="Nabízím:">
    <div>
      <div class="flex flex-col md:flex-row gap-12">
        <div v-for="pkg in packages" :key="pkg.title" class="border border-[#EDDBC4] bg-surface-even rounded-lg p-12 flex-1">
          <div class="flex flex-col items-center gap-4 h-full">
            <div class="flex md:flex-col items-center gap-4 md:gap-6">
              <div class="rounded-full p-4 bg-accent">
                <component :is="pkg.icon" class="w-6 h-6 md:w-12 md:h-12 text-white" />
              </div>
              <h3 class="text-2xl font-semibold">
                {{ pkg.title }}
              </h3>
            </div>
            <div class="text-center flex-1">
              <p class="mb-6">
                {{ pkg.description }}
              </p>
            </div>
            <div class="flex flex-col items-center">
              <p class="text-4xl font-semibold">
                {{ pkg.price }} Kč
              </p>
              <small class="text-xs text-slate-700">
                za normostranu<sup>*</sup>
              </small>
              <NuxtLink to="#kontakt" class="bg-accent hover:bg-accentHover text-white px-4 py-2 rounded-md mt-8">
                Ozvěte se mi
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <small class="text-xs text-slate-700 text-center flex-basis-full mt-4 block">
        <sup>*</sup>Normostranou se rozumí 1800 znaků včetně mezer. Cena je uvedena včetně DPH.
      </small>
    </div>
  </BaseSection>
</template>
