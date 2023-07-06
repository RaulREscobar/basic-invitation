<template>
    <v-container class=" container d-flex justify-center align-center">
        <div class="icon">
        </div>
    </v-container>
</template>

<script setup>
</script>
<style>
.container {
    height: 70vh;
}

.icon {
    border: 5px solid #f2f2f2;
    border-bottom: 5px solid #D2BD80;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: loader 2s linear infinite;
}

@keyframes loader {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>