<template>
  <Html lang="cs" class="text-main font-sans">
    <NavBar class="max-w-[1680px] mx-auto" />
    <main class="max-w-[1680px] mx-auto pt-12 md:pt-0">
      <HeroSection />
      <AboutSection />
      <PackagesSection />
      <TestamonialsSection />
      <ContactSection />
    </main>
  </Html>
</template>

<style>
a:not(nav a) {
  color: #FD5657;
  border-bottom: 1px solid rgba(253, 86, 87, .5);
  transition: border .3s ease-in-out;
}

a:not(nav a):hover {
  border-bottom: 1px solid #FD5657;
}
</style>
