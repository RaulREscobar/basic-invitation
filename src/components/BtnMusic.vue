<template>
    <v-btn icon="mdi-play-circle-outline" v-if="isPlaying" @click="play()" variant="tonal" color="#884EC3"
        position="fixed">
    </v-btn>
    <v-btn v-else icon="mdi-pause-circle-outline" @click="pause()" variant="tonal" color="#884EC3"
        position="fixed">
    </v-btn>
</template>

<script setup>
import song from '../assets/yanovuelvas.mp3'
import { ref } from 'vue';

const player = ref(new Audio(song));
const isPlaying = ref(true);

let play = () => {
    player.value.play();
    isPlaying.value = false;
}

let pause = () => {
    player.value.pause();
    isPlaying.value = true;
}
</script>