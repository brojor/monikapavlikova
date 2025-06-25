<script setup lang="ts">
const testimonials = [
  {
    name: 'Afoe Delgado',
    title: 'spisovatelka',
    text: '<span>„</span>Monika je nesmírně precizní betačtenářka a korektorka. Najde i ty nejmenší chyby, které snadno uniknou kvůli autorské slepotě a má skvělý cit pro jazyk i styl. Její návrhy nikdy nenaruší autorský hlas – jen citlivě navrhne, co a proč by mohlo fungovat lépe. Nepřepisuje texty, ale svými postřehy je dokáže pozvednout na vyšší úroveň. Navíc je vždy velmi milá, trpělivá a vstřícná, což dělá spolupráci s ní nejen přínosnou, ale i radostnou.<br><br>Jsem opravdu šťastná že mi pomáhá, aby můj příběh působil tak, jak má – srozumitelně, silně a čtivě. Povídka, kterou mi betovala se umístila mezi třicet nejlepších a dostala se do antologie <a href="https://bookla.cz/eshop/produkt/tricet">Třicet</a> od nakladatelství Bookla. Věřím, že její přínos v tom hrál velkou roli.<span>“</span>',
    image: '/afoe.jpg',
  },
  {
    name: 'Bailey String',
    title: 'autorka knižní série Definice chaosu',
    text: '<span>„</span>Spolupráce s Monikou Pavlíkovou pro mě byla velmi příjemným a přínosným zážitkem. Dělala mi betačtení druhého dílu mé knihy <a href="https://www.databazeknih.cz/prehled-knihy/definice-chaosu-definice-chaosu-2-560931">Definice chaosu 2: Bez návratu</a> a její přístup byl od začátku až do konce naprosto profesionální – a přitom lidský a vstřícný.<br><br>Oceňuji především rychlost, se kterou se do textu pustila, a zároveň kvalitu zpětné vazby, která rozhodně nebyla jen formální. Monika dokázala citlivě doplňovat své postřehy přímo do textu, což mi při následných úpravách výrazně usnadnilo práci. Navíc ke každé části připojila i celkový dojem, takže jsem měla jasný přehled o tom, co funguje a co případně ještě doladit.<br><br>Komunikace s ní probíhala hladce, vše bylo jasné, přímé a bez zbytečných prodlev. Je vidět, že Monika ví, co dělá – a dělá to s nadšením i respektem k autorově stylu. Spolupráci s Monikou mohu upřímně doporučit každému autorovi, který hledá konstruktivní, důkladnou, a přitom podporující zpětnou vazbu.<span>“</span>',
    image: '/bailey.jpg',
  },
]
</script>

<template>
  <BaseSection id="reference" title="Reference:">
    <div v-for="testimonial in testimonials" :key="testimonial.name" class="bg-surface-odd px-16 py-12 rounded-md border border-accent/30 flex-1">
      <div class="flex flex-col items-center mb-8">
        <img :src="testimonial.image" alt="testimonial.name" class="rounded-full w-32 h-32 mb-4">
        <h3 class="text-2xl font-semibold">
          {{ testimonial.name }}
        </h3>
        <p class="text-sm text-slate-700">
          {{ testimonial.title }}
        </p>
      </div>
      <p class="testimonial-text" v-html="testimonial.text" />
    </div>
  </BaseSection>
</template>

<style>
.testimonial-text span {
  font-size: 25px;
  color: #FD5657;
  line-height: 0.6;
  font-family: 'Playfair Display', serif;
}

.testimonial-text span:first-child {
  display: inline-block;
  margin-right: 4px;
}

.testimonial-text span:last-child {
  display: inline-block;
  margin-left: 4px;
}

.testimonial-text a {
  color: #FD5657;
  border-bottom: 1px solid rgba(253, 86, 87, .5);
  transition: border .3s ease-in-out;
}

.testimonial-text a:hover {
  border-bottom: 1px solid #FD5657;
}
</style>
