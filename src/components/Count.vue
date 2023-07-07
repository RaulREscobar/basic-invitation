<template>
    <h1 class="font">¿ Cuanto Falta ?</h1>
    <v-container class=" font d-flex justify-space-evenly mb-10">
        <div class="d-flex flex-column">
            <span>{{ days }}</span>
            <span>DIAS</span>
        </div>
        :
        <div class="d-flex flex-column">
            <span>{{ hours }}</span>
            <span>HORAS</span>
        </div>
        :
        <div class="d-flex flex-column">
            <span>{{ min }}</span>
            <span>MIN.</span>
        </div>
        :
        <div class="d-flex flex-column">
            <span> {{ seg }}</span>
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

const dateTarget = new Date('2023-09-18T20:00:00');
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
