<template >
    <v-btn class="ind9999" icon="mdi-play-circle-outline" v-if="isPlaying" @click="play()" variant="tonal" color="#884EC3"
        position="fixed">
    </v-btn>
    <v-btn v-else class="ind9999" icon="mdi-pause-circle-outline" @click="pause()" variant="tonal" color="#884EC3"
        position="fixed">
    </v-btn>
</template>

<script setup>
import { onActivated } from 'vue';
import song from '../assets/JVKE-goldenhour.mp3'
import { ref } from 'vue';

const player = ref(new Audio(song));
const isPlaying = ref(false);

onActivated(() => {
    player.value.volume = 0.3;
    player.value.autoplay = true;
})

let play = () => {
    player.value.play();
    isPlaying.value = false;
}

let pause = () => {
    player.value.pause();
    isPlaying.value = true;
}
</script>
<style scoped>
.ind9999 {
    z-index: 99999;
}
</style>