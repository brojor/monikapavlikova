<template>
  <section id="hero" class="md:pt-12 text-slate-900 even:bg-surface-even odd:bg-surface-odd relative">
    <picture>
      <source media="(max-width: 767px)" srcset="/hero-mobile.jpg">
      <img src="/hero-desktop.jpg" alt="Klientka při psaní" class="max-w-screen-xl mx-auto w-full rounded-md">
    </picture>
    <div class="p-4 absolute top-0 left-[50%] -translate-x-1/2 md:top-12 w-full text-slate-900 h-[calc(100%-3rem)] max-w-screen-xl mx-auto flex flex-col md:justify-center space-y-6 md:space-y-8">
      <h1 class="font-bold text-headline font-heading leading-[1.1] text-[clamp(1.75rem,4.5vw,3rem)] max-w-[15ch]">
        Každý text si zaslouží dokonalou podobu.
      </h1>
      <p class="text-[clamp(1rem,2vw,1.5rem)] text-headline leading-tight max-w-1/2 md:max-w-1/3">
        Od první myšlenky po poslední tečku. Pečuji o každé Vaše slovo s maximální pozorností.
      </p>
      <NuxtLink to="#kontakt" class="bg-accent hover:bg-accentHover text-white px-4 py-2 rounded-md mr-auto text-sm md:text-base">
        Ozvěte se mi
      </NuxtLink>
    </div>
  </section>
</template>
