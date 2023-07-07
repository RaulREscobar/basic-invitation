<template >
    <v-btn class="ind9999 color-dorado" size="small" icon="mdi-play" v-if="isPlaying" @click="play()" variant="flat" color="#0005"
        position="fixed">
    </v-btn>
    <v-btn v-else class="ind9999 color-dorado" size="small" icon="mdi-pause" @click="pause()" variant="flat" color="#0005"
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
    //player.value.autoplay = true;
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
    top: 50px;
}
</style>