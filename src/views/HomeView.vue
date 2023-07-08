<template>
    <KeepAlive>
      <BtnLogout />
    </KeepAlive>
    <BtnMenu v-if="user.userLogget" />
    <KeepAlive>
      <BtnMusic v-if="user.userLogget" />
    </KeepAlive>
    <!-- <Loading v-if="user.loading" /> -->
    <Loading v-if="user.loading && !user.userLogget" />
      <v-main>
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
</template>

<script setup>
import CardLocation from '@/components/CardLocation.vue';
import CardTask from '@/components/CardTask.vue';
import Confirm from '@/components/Confirm.vue';
import Count from '@/components/Count.vue';
import DressCode from '@/components/DressCode.vue';
import Gift from '@/components/Gift.vue';
import HeaderName from '@/components/HeaderName.vue';
import Paragraph from '@/components/Paragraph.vue';
import Spotify from '@/components/Spotify.vue';
import Footer from '@/components/Footer.vue'
import BtnMusic from '@/components/BtnMusic.vue'
import Login from '@/components/Login.vue';
import Loading from '@/components/Loading.vue';
import BtnLogout from '@/components/BtnLogout.vue';
import BtnMenu from '@/components/BtnMenu.vue';

// STORES
import { useAuthStore } from '@/stores/AuthStore';

const user = useAuthStore();
</script>