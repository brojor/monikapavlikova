<script setup lang="ts">
import IconFacebook from './icon/Facebook.vue'
import IconMail from './icon/Mail.vue'
import IconPhone from './icon/Phone.vue'

const contacts = [
  {
    icon: IconFacebook,
    title: 'Facebook',
    link: 'https://www.facebook.com/monik.denkova',
    text: 'Monika Pavlíková',
  },
  {
    icon: IconPhone,
    title: 'Telefon',
    link: 'tel:+420723123456',
    text: '601 336 878',
  },
  {
    icon: IconMail,
    title: 'Email',
    link: 'mailto:texty@monikapavlikova.cz',
    text: 'texty@monikapavlikova.cz',
  },
]
</script>

<template>
  <BaseSection id="kontakt" title="Kontakt:">
    <div class="flex flex-wrap gap-4 md:gap-6 w-full">
      <div v-for="contact in contacts" :key="contact.title" class="bg-surface-even p-8 rounded-lg border border-accent/50 flex-shrink-1 flex-grow-1 flex-basis-100% sm:flex-basis-[calc(50%-1rem)] lg:flex-basis-[calc(25%-2rem)] box-border">
        <div class="flex flex-col items-center">
          <div class="flex md:flex-col items-center gap-2 md:gap-4 mb-2">
            <div class="rounded-full md:p-3 md:bg-accent">
              <component :is="contact.icon" class="w-8 h-8 text-accent md:text-white" />
            </div>
            <h3 class="text-2xl font-semibold">
              {{ contact.title }}
            </h3>
          </div>
          <NuxtLink :to="contact.link" target="_blank" class="inline-block text-center text-sm">
            {{ contact.text }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </BaseSection>
</template>
