<template>
    <v-container>
        <v-card class="text-center pa-3">
            <v-icon color="#884EC3" icon="mdi-gift-outline" size="70" type="outline"></v-icon>
            <v-card-title class="text-center">
                OBSEQUIOS
            </v-card-title>
            <v-card-text>
                Sabemos lo complicado que puede ser buscar el obsequio ideal.
            </v-card-text>
            <v-card-text>
                Por eso, una buena alternativa es permitir que la quinceañera elija su regalo. Te proporcionamos un enlace
                donde puedes depositar la cantidad que desees!!!
            </v-card-text>
            <div class="d-flex justify-space-around align-center mt-4">
                <Dialog :dialog="dialog" />
            </div>
        </v-card>
    </v-container>
</template>
<script setup>
import Dialog from './Dialog.vue';

const dialog = false;
</script>