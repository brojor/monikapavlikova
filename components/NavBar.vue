<script setup lang="ts">
const menuItems = ['Domů', 'O mně', 'Nabízím', 'Reference', 'Kontakt']
const isMenuOpen = ref(false)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function closeMenu() {
  isMenuOpen.value = false
}
</script>

<template>
  <nav class="bg-muted fixed inset-x-0 top-0 flex transition-all duration-300 ease-out text-headline">
    <ul id="nav-list" class=" flex-1 flex flex-col pt-12 gap-4 md:p-0 md:flex-row md:items-center md:max-w-screen-md md:mx-auto overflow-hidden transition-all duration-300 ease-out" :class="`${isMenuOpen ? 'h-64' : 'h-12'}`">
      <li
        v-for="item in menuItems"
        :key="item"
        class="w-full transition-all duration-300 ease-out pl-12 md:pl-0 md:flex md:justify-center md:items-center"
      >
        <NuxtLink to="/" class="nav-link" @click="closeMenu">
          {{ item }}
        </NuxtLink>
      </li>
    </ul>
    <div class="md:hidden text-3xl p-2" @click="toggleMenu">
      <IconMenu v-if="!isMenuOpen" />
      <IconClose v-else />
    </div>
  </nav>
</template>
