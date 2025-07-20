<script setup lang="ts">
import IconFacebook from './icon/Facebook.vue'
import IconLocation from './icon/Location.vue'
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
    <div class="flex flex-wrap gap-4 md:gap-8 w-full">
      <div v-for="contact in contacts" :key="contact.title" class="bg-surface-even p-8 rounded-lg border border-accent/50 flex-shrink-1 flex-grow-1 flex-basis-100% sm:flex-basis-[calc(50%-1rem)] lg:flex-basis-[calc(25%-2rem)] box-border">
        <div class="flex flex-col items-center">
          <div class="rounded-full p-3 bg-accent mb-4">
            <component :is="contact.icon" class="w-4 h-4 md:w-8 md:h-8 text-white" />
          </div>
          <h3 class="text-2xl font-semibold mb-2">
            {{ contact.title }}
          </h3>
          <NuxtLink :to="contact.link" target="_blank" class="inline-block text-center">
            {{ contact.text }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </BaseSection>
</template>
