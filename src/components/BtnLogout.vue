<template >
    <v-btn class="ind9999" v-if="user.userLogget" @click="logout" variant="tonal" color="#884EC3" position="fixed">
        salir
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