<template>
  <v-app>
    <BtnMusic />  
    <v-main> 
      <HeaderName />
      <Count />
      <Paragraph text="Hay momentos que no se pueden borrar
        personas que no se pueden olvidar
        y recuerdos como éste que siempre
        voy a atesorar...." />
      <Mis15 />
      <CardLocation />
      <CardPhotos />
      <CardTask />
      <Confirm />
      <Gift />
      <DressCode />
      <Spotify />
      <Footer />
    </v-main>
  </v-app>
</template>

<script setup>
import CardLocation from './components/CardLocation.vue';
import CardPhotos from './components/CardPhotos.vue';
import CardTask from './components/CardTask.vue';
import Confirm from './components/Confirm.vue';
import Count from './components/Count.vue';
import DressCode from './components/DressCode.vue';
import Gift from './components/Gift.vue';
import HeaderName from './components/HeaderName.vue';
import Mis15 from './components/Mis15.vue';
import Paragraph from './components/Paragraph.vue';
import Spotify from './components/Spotify.vue';
import Footer from './components/Footer.vue'
import BtnMusic from './components/BtnMusic.vue'
</script>
