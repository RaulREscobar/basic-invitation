<template>
  <v-app class="font">
    <KeepAlive>
      <BtnLogout />
    </KeepAlive>
    <BtnMenu v-if="user.userLogget" />
    <KeepAlive>
      <BtnMusic v-if="user.userLogget" />
    </KeepAlive>
    <!-- <Loading v-if="user.loading" /> -->
    <Loading v-if="user.loading && !user.userLogget" />
    <Suspense>
      <Login v-if="!user.userLogget" />
      <v-main v-else>
        <HeaderName />
        <Paragraph text="La fiesta esta por empezar...." />
        <Paragraph text="18 de Septiembre 2023" />
        <Count />
        <CardLocation />
        <DressCode />
        <CardTask />
        <Confirm />
        <Gift />
        <Spotify />
        <Footer />
      </v-main>
    </Suspense>
  </v-app>
</template>

<script setup>
import CardLocation from './components/CardLocation.vue';
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
import Login from './components/Login.vue';
//Stores
import { useAuthStore } from './stores/AuthStore';
import Loading from './components/Loading.vue';
import BtnLogout from './components/BtnLogout.vue';
import BtnMenu from './components/BtnMenu.vue';


const user = useAuthStore();
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Imperial+Script&family=Libre+Caslon+Display&display=swap');

body{
  background-color: #121212;
}

.font {  
  font-family: 'Libre Caslon Display', serif;
  font-size: 18px;
  color: #D2BD80;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.font-title {
  font-family: 'Imperial Script', cursive;
  color: #CDA974;
  text-align: center;
  text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-size: 64px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
  margin: 15px, auto;
}

.color-dorado {
    color:#D2BD80 !important;
}
</style>
