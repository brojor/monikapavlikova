<template>
  <section id="hero" class="relative">
    <picture>
      <source media="(max-width: 767px)" srcset="/hero-mobile.jpg">
      <img src="/hero-desktop.jpg" alt="Klientka při psaní">
    </picture>
    <div class="absolute top-12 left-0 w-full h-[calc(100%-3rem)] px-4 py-12 md:py-24 md:px-16 text-slate-900">
      <div class="max-w-screen-xl mx-auto flex flex-col justify-center h-full">
        <div class="flex flex-col space-y-[clamp(2rem,1.5vw,2.5rem)]">
          <h1 class="font-bold text-headline font-heading leading-[1.1] text-[clamp(1.5rem,5vw,4rem)] max-w-[15ch]">
            Každý text si zaslouží dokonalou podobu.
          </h1>
          <p class="text-[clamp(1rem,1.5vw,1.5rem)] text-headline leading-tight max-w-1/2 md:max-w-1/3 mb-12">
            Od první myšlenky po poslední tečku. Pečuji o každé Vaše slovo s maximální pozorností.
          </p>
          <NuxtLink to="#kontakt" class="bg-accent hover:bg-accentHover text-white px-4 py-2 rounded-md mr-auto">
            Ozvěte se mi
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
