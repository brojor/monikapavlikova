<template>
  <Html lang="cs" class="text-main font-sans">
    <NavBar class="max-w-[1680px] mx-auto" />
    <main class="max-w-[1680px] mx-auto pt-12 bg-[#FAF6EC]">
      <div class="relative">
        <picture>
          <source media="(max-width: 767px)" srcset="/hero-mobile.jpg">
          <img src="/hero-desktop.jpg" alt="Klientka při psaní">
        </picture>
        <div class="flex flex-col mt-4 md:mt-0 md:justify-center h-full px-4 md:px-10 lg:px-16 absolute top-0 left-0 w-full space-y-[clamp(1.75rem,1.5vw,2.5rem)]">
          <h1 class="font-bold text-headline font-heading leading-[1.1] text-[clamp(2rem,4vw,4rem)] md:max-w-[15ch]">
            Každý text si zaslouží dokonalou podobu.
          </h1>
          <p class="text-[clamp(1.25rem,1.75vw,1.75rem)] text-headline font-subheading leading-tight max-w-1/2 md:max-w-1/3 mb-12">
            Od první myšlenky po poslední tečku. Pečuji o každé Vaše slovo s maximální pozorností.
          </p>
          <button class="bg-[#D10002] hover:bg-[#B00003] text-white px-4 py-2 rounded-md mr-auto">
            Ozvěte se mi
          </button>
        </div>
      </div>
    </main>
  </Html>
</template>
