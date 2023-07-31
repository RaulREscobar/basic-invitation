<template>
    <v-container>
        <v-card class="text-center pa-4">
            <v-icon color="#D2BD80" icon="mdi-checkbox-multiple-outline" size="70" type="outline"></v-icon>
            <v-card-title class="font">
                ¿VENIS?
            </v-card-title>
            <v-card-text class="mb-4 font">
                <b>
                    CONFIRMEN ASISTENCIA
                    <br />
                    <br/>
                    Familia: {{ familia }}
                    <br />
                </b>
                <p class="text-caption">
                    <b>*Puedes elegir más de una opción</b>
                </p>
            </v-card-text>
            <v-form ref="formConfirm" @submit.prevent="confirm">
                <v-row class="mx-auto font" justify="center" v-for="invitado in invitados" :key="invitado">
                    <v-checkbox :value="invitado" :label="invitado" color="#D2BD80"></v-checkbox>
                </v-row>
                <v-card-actions class="d-flex justify-space-around align-center mt-4">
                    <v-btn :loading="store.loadingConfirm" type="submit" variant="tonal" color="#D2BD80">
                        Confirmar
                    </v-btn>
                </v-card-actions>
                <v-overlay v-model="store.overlayConfirm" contained class="align-center justify-center">
                    <v-btn append-icon="mdi-check" color="#D2BD80">confirmados</v-btn>
                </v-overlay>
            </v-form>
            <p class="text-caption font">
                <b>*Pulsa en confirmar luego de seleccionar</b>
            </p>
        </v-card>
    </v-container>
</template>
<script setup>
import { useAuthStore } from '../stores/AuthStore';
import { doc, updateDoc } from "firebase/firestore";
import { db } from '../firebase';

//inicializamos store y obtenemos el uid de la familia
const userLogget = JSON.parse(localStorage.getItem("user"));
const store = useAuthStore();
const uidFamilia = userLogget?.uidFamilia;

//inicialisamos variables
const invitados = userLogget?.invitadosFamilia;
const familia = userLogget?.familia;
const invitadosConfirmados = [];


//obtenemos los datos de la  familia logueada. 
const familiRef = doc(db, "famili", uidFamilia);

//al confirmar se actualiza la lista de invitados confirmados.
const confirm = async (e) => {

    try {
        // Cambiamos la variable de estado para poder ver el loading en el boton.
        store.loadingConfirm = true;

        store.overlayConfirm = false;
        // Recorremos los invitados y los ponemos en una variable
        for (let index = 0; index < e.target.length - 1; index++) {
            const invitado = e.target[index];
            invitado.checked ? invitadosConfirmados.push(invitado.value) : "";
        }
        // Actualizamos la db con la variable creada con los invitados confirmados.
        await updateDoc(familiRef, {
            confirm: [...new Set(invitadosConfirmados)]
        })
        // Reseteamos la  variable de estado para no mostrar el spinner.
        store.loadingConfirm = false;

        store.overlayConfirm = true;
        setTimeout(() => { store.overlayConfirm = false }, 1500)

    } catch (err) {
        console.log(err)
    }
}


</script>