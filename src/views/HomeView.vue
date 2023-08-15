<template>
  <template v-if="getInto">
    <div class="text-center">
      <v-dialog v-model="getInto" width="auto">
        <v-card>
          <v-card-text class="text-center">
            <b>Esta es la invitacion al cumple de</b>

            <h2>ALEJO</h2>

          </v-card-text>
          <v-card-actions>
            <v-btn variant="tonal" color="" block @click="closeDialog">Ir a la invitación</v-btn>
          </v-card-actions>
          <p class="text-caption text-center">
            *cierre la ventana para continuar
          </p>
        </v-card>
      </v-dialog>
    </div>
  </template>
  <v-main v-else>
    <KeepAlive>
      <BtnMusic />
    </KeepAlive>
    <HeaderName />
    <Paragraph text="La fiesta esta por empezar...." />
    <Paragraph text="20 de Agosto a las 13hs" />
    <Count />
    <CardLocation />
    <ConfirmBasic />
    <TanksFinish />
  </v-main>
</template>

<script setup>
import CardLocation from '@/components/CardLocation.vue';
import Count from '@/components/Count.vue';
import HeaderName from '@/components/HeaderName.vue';
import Paragraph from '@/components/Paragraph.vue';
import TanksFinish from '@/components/TanksFinish.vue';
import BtnMusic from '@/components/BtnMusic.vue';
import ConfirmBasic from '@/components/ConfirmBasic.vue';

import { ref } from 'vue'

const getInto = ref(true);

const closeDialog = () => {
  getInto.value = false;
}
</script>