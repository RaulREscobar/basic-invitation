<template>
    <v-container>
        <v-card class="text-center pa-3" color="#EEDAF9">
            <v-icon color="#884EC3" icon="mdi-clipboard-text" size="70" type="outline"></v-icon>
            <v-card-title class="text-center">
                NOS GUSTARIA SABER MÁS...
            </v-card-title>

            <v-form ref="form" @submit.prevent="onSubmit">
                <v-card-text>
                    ¿Que bebida te gustaria tomar?
                </v-card-text>
                <v-row v-for="drink in drinks" justify="center" class="mx-auto">
                    <v-checkbox :value='drink' :label="drink"></v-checkbox>
                </v-row>
                <v-card-text>
                    Si tendrias que traer lo que vas a tomar
                    <br />
                    ¿Que tomarias?
                </v-card-text>
                <v-select class="pb-8" :items=drinks label="Selecciona una o mas" multiple
                    hint="Elige lo que vas a traer para tomar" persistent-hint></v-select>

                <v-card-actions class="d-flex justify-space-around align-center mt-4">
                    <v-btn type="submit" variant="tonal" color="#884EC3">
                        Enviar
                    </v-btn>
                </v-card-actions>
            </v-form>
        </v-card>
    </v-container>
</template>

<script setup>
import { db } from '../firebase'
import { getDocs, query, collection } from "@firebase/firestore";

const drinks = [];
const bebidasRef = query(collection(db, "bebidas"));
const bebidas = await getDocs(bebidasRef);
bebidas.forEach(bebida => {
    drinks.push(bebida.data().bebida)
})
let isCkeck = []
let isCheckTraer = []
const onSubmit = (e) => {
    console.log(e.target[5])
    console.log(e.target[0].checked)
    console.log(e.target[5].value)
    console.log(isCkeck)
}

</script>