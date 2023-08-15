<template>
    <h1 class="text-center text-h5">¿ Cuanto Falta ?</h1>
    <v-container class=" text-center text-h5 d-flex justify-space-evenly">
        <div class="d-flex flex-column">
            <span class="mb-4">{{ days }}</span>
            <span>DIAS</span>
        </div>
        :
        <div class="d-flex flex-column">
            <span class="mb-4">{{ hours }}</span>
            <span>HORAS</span>
        </div>
        :
        <div class="d-flex flex-column">
            <span class="mb-4">{{ min }}</span>
            <span>MIN.</span>
        </div>
        :
        <div class="d-flex flex-column">
            <span class="mb-4"> {{ seg }}</span>
            <span>SEG.</span>
        </div>
    </v-container>
</template>    

<style scoped>
.count {
    width: 100vw;
}

.bg body {
    background-color: #121212;
}
</style>

<script setup>
import { ref } from 'vue';

const days = ref(0);
const hours = ref(0);
const min = ref(0);
const seg = ref(0);

//FECHA DEL EVENTO FORMATO AAAA-MM-DD T HH:MM:SS
const dateTarget = new Date('2023-08-20T13:00:00');
const milisecondOfASecond = 1000;
const milisecondsOfAMinute = milisecondOfASecond * 60;
const milisecondsOfAHour = milisecondsOfAMinute * 60;
const milisecondsOfADay = milisecondsOfAHour * 24;

const updateCountdown = () => {
    const now = new Date();
    const duration = dateTarget - now;

    const remainingDays = Math.floor(duration / milisecondsOfADay);
    const remaininHours = Math.floor((duration % milisecondsOfADay) / milisecondsOfAHour);
    const remainingMinutes = Math.floor((duration % milisecondsOfAHour) / milisecondsOfAMinute);
    const remainingSeconds = Math.floor((duration % milisecondsOfAMinute) / milisecondOfASecond);

    days.value = remainingDays;
    hours.value = remaininHours;
    min.value = remainingMinutes;
    seg.value = remainingSeconds;
}
updateCountdown()
setInterval(updateCountdown, milisecondOfASecond)

</script>
