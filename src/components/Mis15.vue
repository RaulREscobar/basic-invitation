<template>
    <v-container>
        <h1 class="text-center font-title font-italic">Mis 15 años</h1>
    </v-container>
</template>
<script setup>
import { onMounted } from 'vue';
import { useAuthStore } from "@/stores/AuthStore";

const store = useAuthStore();

onMounted(() => {
    store.loading = false;
})
</script>