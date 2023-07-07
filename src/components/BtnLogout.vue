<template >
    <v-btn class="ind9999 color-dorado" icon="mdi-exit-to-app" v-if="user.userLogget" @click="logout" variant="flat" color="#0005" position="fixed">
    </v-btn>
</template>

<script setup>
import { useAuthStore } from '../stores/AuthStore';

const user = useAuthStore();

const logout = () => {
    localStorage.clear()
    location.reload();
}

</script>

<style scoped>
.ind9999 {
    z-index: 99999;
    right: 0;
}

</style>