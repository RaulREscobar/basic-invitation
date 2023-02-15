<template>
    <v-form v-model="form" @submit.prevent="onSubmit">
        <v-container>
            <v-row>
                <v-col cols="12" md="4">
                    <v-text-field label="E-mail" type="email" required></v-text-field>
                </v-col>

                <v-col cols="12" md="4">
                    <v-text-field label="Contraseña" type="password" required></v-text-field>
                </v-col>
                <v-btn type="submit" block class="mt-2">Entrar</v-btn>
            </v-row>
        </v-container>
    </v-form>
</template>

<script setup>

import { useAuthStore } from "@/stores/AuthStore";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from '../firebase'

const form = false;
const store = useAuthStore();
const onSubmit = (e) => {

    const email = e.target[0].value + "@mail.com";
    const password = e.target[1].value

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            user.displayName = e.target[0].value;
            store.userLogget = true;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });

}


</script>