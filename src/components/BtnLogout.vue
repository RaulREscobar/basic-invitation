<template >
    <v-btn class="ind9999 color-dorado" icon="mdi-exit-to-app" v-if="user.userLogget" @click="logout" variant="flat"
        color="#0005" position="fixed">
    </v-btn>
</template>

<script setup>
import { useAuthStore } from '../stores/AuthStore';
import { getAuth, signOut } from "firebase/auth";
import { useRoute, useRouter } from 'vue-router'

const user = useAuthStore();
const router = useRouter();
const route = useRoute();
const auth = getAuth();

const logout = () => {
    localStorage.clear()
    signOut(auth).then(() => {
        /* router.push({ name: 'login' }) */
        location.reload()
    }).catch((error) => {
        console.log('Hubo un error al desloguearte en firebase')
    });
}

</script>

<style scoped>
.ind9999 {
    z-index: 99999;
    right: 0;
}
</style>