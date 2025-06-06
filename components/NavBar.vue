<script setup lang="ts">
// const menuItems = ['Domů', 'O mně', 'Nabízím', 'Reference', 'Kontakt']
const menuItems = [
  { name: 'Domů', href: '#hero' },
  { name: 'O mně', href: '#o-mne' },
  { name: 'Nabízím', href: '#nabizim' },
  { name: 'Reference', href: '#reference' },
  { name: 'Kontakt', href: '#kontakt' },
]
const isMenuOpen = ref(false)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function closeMenu() {
  isMenuOpen.value = false
}
</script>

<template>
  <nav class="fixed inset-x-0 top-0 flex transition-all duration-300 ease-out text-headline bg-background header-backdrop bg-black/10 z-10">
    <ul class=" flex-1 flex flex-col pt-12 gap-4 md:p-0 md:flex-row md:items-center md:max-w-screen-md md:mx-auto overflow-hidden transition-all duration-300 ease-out" :class="`${isMenuOpen ? 'h-64' : 'h-12'}`">
      <li
        v-for="item in menuItems"
        :key="item.name"
        class="w-full transition-all duration-300 ease-out pl-12 md:pl-0 md:flex md:justify-center md:items-center"
      >
        <NuxtLink :to="item.href" class="nav-link" @click="closeMenu">
          {{ item.name }}
        </NuxtLink>
      </li>
    </ul>
    <div class="md:hidden text-3xl py-2 px-3" @click="toggleMenu">
      <IconMenu v-if="!isMenuOpen" />
      <IconClose v-else />
    </div>
  </nav>
</template>
