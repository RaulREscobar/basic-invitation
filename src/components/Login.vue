<template>
    <v-container class="">
        <div class="d-flex flex-column">
            <h1 class="font-title mb-2">
                Lázaro 
            </h1>
            <h1 class="font-title mb-3">
                y
            </h1>
            <h1 class="font-title">
                Betiana
            </h1>
        </div>
        <Paragraph text="Hola!!! Esta es mi invitación a nuestra boda
                         pero antes debes ingresar tu nombre y contraseña que te mandamos por privado." />
        <v-form v-model="form" @submit.prevent="onSubmit">
            <v-container class="">
                <v-row>
                    <v-col cols="12" md="4">
                        <v-text-field color="#D2BD80" label="Nombre" type="email" required></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-text-field color="#D2BD80" label="Contraseña" type="password" required></v-text-field>
                    </v-col>
                    <v-btn :loading="store.loadingLogin" type="submit" block class="mt-2" variant="tonal" color="#D2BD80">
                        Ir a la invitacion
                    </v-btn>
                </v-row>
            </v-container>
        </v-form>
        <v-alert v-show="store.errorLogin" type="error" variant="tonal" class="mt-2"
            text="Verifica usuario y contraseña"></v-alert>
    </v-container>
</template>

<script setup>
import { onMounted, watch } from 'vue';
import Paragraph from './Paragraph.vue';
import { useAuthStore } from "@/stores/AuthStore";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../firebase';
import { getDocs, query, collection } from "@firebase/firestore";
import { useRoute, useRouter } from 'vue-router';

const familiRef = query(collection(db, "famili"));
const familias = await getDocs(familiRef);

const form = false;
const store = useAuthStore();


const route = useRoute();
const router = useRouter();


onMounted(() => {
    store.loading = false;
})

const onSubmit = (e) => {
    const email = e.target[0].value + "@mail.com";
    const password = e.target[1].value;

    // Cambiamos la variable de estado para poder ver el loading en el boton.
    store.loadingLogin = true;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            user.displayName = e.target[0].value;
            store.userLogget = true;
            store.uidUserLogget = user.uid;
            // Si coinciden con el uid mando los invitados al store
            familias.forEach(familia => {
                if (familia.data().uidUser === user.uid) {
                    const userSession = {
                        uidUserLogget: user.uid,
                        userLogget: true,
                        familia: familia.data().familia,
                        uidFamilia: familia.id,
                        invitadosFamilia: familia.data().invitados,
                        rol: familia.data().rol,
                    }
                    localStorage.setItem("user", JSON.stringify(userSession))
                }
            })
            // Reseteamos la  variable de estado para no mostrar el spinner.
            store.loadingLogin = false;
            store.errorLogin = false;
            /* router.push({name:'home'}) */
            location.reload()
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            store.loadingLogin = false;
            store.errorLogin = true;
            // ..
        });
    }

</script>