<template>
    <v-container>
        <v-card class="text-center pa-3">
            <v-icon color="#D2BD80" icon="mdi-gift-outline" size="70" type="outline"></v-icon>
            <v-card-title class="text-center font">
                OBSEQUIOS
            </v-card-title>
            <v-card-text class="font">
                Sabemos lo complicado que puede ser buscar el obsequio ideal.
            </v-card-text>
            <v-card-text class="font">
                Por esta razón, una excelente opción es permitir que los novios elijan su propio regalo. Dejamos al pie un
                link con nuestras cuentas.
                Como alternativa, podrán disponer de un buzón en el salón donde pueden dejar un sobre o un espacio destinado
                a recibir obsequios.
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