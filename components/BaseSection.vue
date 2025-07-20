<script setup lang="ts">
defineProps<{
  title: string
  id: string
}>()
</script>

<template>
  <section :id="id" class="px-4 py-10 md:pt-16 md:pb-24 md:px-16 text-slate-900 even:bg-surface-even odd:bg-surface-odd">
    <div class="max-w-screen-xl mx-auto">
      <h2 class="text-3xl font-semibold mb-6 md:mb-12 font-heading">
        {{ title }}
      </h2>
      <div class="flex flex-col md:flex-row gap-16">
        <slot />
      </div>
    </div>
  </section>
</template>
