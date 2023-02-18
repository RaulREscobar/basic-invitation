<template>
    <v-container>
        <v-card class="text-center pa-4">
            <v-icon color="#884EC3" icon="mdi-checkbox-multiple-outline" size="70" type="outline"></v-icon>
            <v-card-title class="text-center">
                CONFIRMAR ASISTENCIAS...
            </v-card-title>
            <v-card-text class="mb-4">
                Estamos preparando todo para que la pasemos fabuloso y para ello necesitamos que :
                <br />
                <br />
                <b>
                    COMFIRMEN ASISTENCIA
                    <br />
                    Familia: {{ familia }}
                </b>
            </v-card-text>
            <v-form ref="formConfirm" @submit.prevent="confirm">
                <v-row class="mx-auto" justify="center" v-for="invitado in invitados" :key="invitado">
                    <v-checkbox :value="invitado" :label="invitado" color="#884EC3"></v-checkbox>
                </v-row>
                <v-card-actions class="d-flex justify-space-around align-center mt-4">
                    <v-btn type="submit" variant="tonal" color="#884EC3">
                        Confirmar
                    </v-btn>
                </v-card-actions>
            </v-form>
        </v-card>
    </v-container>
</template>
<script setup>
import { useAuthStore } from '../stores/AuthStore'
import { query, doc, setDoc, getDocs, collection, updateDoc } from "firebase/firestore";
import { db } from '../firebase'

//store
const store = useAuthStore();
const uidFamilia = store.uidFamilia;
//
const invitadosConfirmados = [];
// 
const familiRef = doc(db, "famili", uidFamilia);
console.log(familiRef)

const confirm = (e) => {
    for (let index = 0; index < e.target.length - 1; index++) {
        const invitado = e.target[index];
        invitado.checked ? invitadosConfirmados.push(invitado.value) : "";
    }
    updateDoc(familiRef, {
        confirm: [...new Set(invitadosConfirmados)]
    })
}
const invitados = store.invitadosFamilia[0]
const familia = store.familia


</script>