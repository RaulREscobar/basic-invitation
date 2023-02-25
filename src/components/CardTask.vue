<template>
    <v-container>
        <v-card class="text-center pa-3">
            <v-icon color="#884EC3" icon="mdi-clipboard-text" size="70" type="outline"></v-icon>
            <v-card-title class="text-center">
                ¿QUÉ TOMAS?
            </v-card-title>

            <v-form @submit.prevent="confirmDrinks">
                <v-card-text>
                    ¿Qué bebida te gustaría tomar?
                    <p>
                        <b>*Puedes elegir más de una opción</b>
                    </p>
                </v-card-text>

                <v-row v-for="drink in drinks" justify="center" class="mx-auto">
                    <v-checkbox :value='drink' :label="drink"></v-checkbox>
                </v-row>
                <v-card-actions class="d-flex justify-space-around align-center mt-4">
                    <v-btn :loading="store.loadingDrink" type="submit" variant="tonal" color="#884EC3">
                        Enviar
                    </v-btn>
                </v-card-actions>
                <v-overlay v-model="store.overlayDrink" contained class="align-center justify-center">
                    <v-btn append-icon="mdi-check" color="#884EC3">Guardado</v-btn>
                </v-overlay>
            </v-form>
            <p>
                <b>*Pulsa enviar luego de seleccionar</b>
            </p>
        </v-card>
    </v-container>
</template>

<script setup>
import { db } from '../firebase';
import { getDocs, query, collection, doc, updateDoc } from "@firebase/firestore";
import { useAuthStore } from '../stores/AuthStore';

//inicializamos el store y obtenemos el uid de la familia
const store = useAuthStore();
const uidFamilia = store.uidFamilia;

//inicializamos variables
const drinks = [];
const drinksConfirmados = [];

//se llama a la lista de bebidas
const bebidasRef = query(collection(db, "bebidas"));
const bebidas = await getDocs(bebidasRef);
bebidas.forEach(bebida => {
    drinks.push(bebida.data().bebida)
})

//se llama a la familia que esta logueada
const familiRef = doc(db, "famili", uidFamilia);

//al confirmar actualiza la lista de bibidas que va a beber
async function confirmDrinks(e) {
    try {
        // Cambiamos la variable de estado para poder ver el loading en el boton.
        store.loadingDrink = true;
        store.overlayDrink = false;
        for (let index = 0; index < e.target.length - 1; index++) {
            const drink = e.target[index];

            drink.checked ? drinksConfirmados.push(drink.value) : "";
        }
        await updateDoc(familiRef, {
            confirmBebida: [...new Set(drinksConfirmados)]
        })
        //una vez que termina de modificar la db reseteamos la variable de estado.
        store.loadingDrink = false;
        store.overlayDrink = true;
        setTimeout(() => { store.overlayDrink = false }, 1500)
    } catch (err) {
        console.error(err)
    }
}

</script>