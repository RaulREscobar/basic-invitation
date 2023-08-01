<template>
    <v-container class="mt-14">
        <p> Total {{ total.length }} </p>
        <v-table fixed-header height="75vh">
            <thead>
                <tr>
                    <th class="text-center">
                        Numero
                    </th>
                    <th class="text-center">
                        Nombre
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in total" :key="item">
                    <td class="text-center">{{ index + 1 }}</td>
                    <td class="text-center">{{ item }}</td>
                </tr>
            </tbody>
        </v-table>
    </v-container>
</template>

<script setup>
import { onBeforeRouteUpdate, useRoute } from 'vue-router';
import { ref, watch } from 'vue'
import { db } from '../firebase'
import { collection, query, onSnapshot } from "firebase/firestore";

const route = useRoute();
const total = ref([])
const params = ref(route.params.totalInvitados)

params.value = route.params.totalInvitados



//seteamos la ruta parametrizada
 onBeforeRouteUpdate( async (to, from) => {
    if (to.params.totalInvitados !== from.params.totalInvitados) {
        params.value = to.params.totalInvitados 
        //await fetchUser(to.params.totalInvitados)
      }
    });
//Llamamos a la coleccion de la db.
const q = query(collection(db, "famili"));

watch( params, (newValue, oldValue) => {
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
    total.value = [];
    //Recorremos las familias de la base de datos
    querySnapshot.forEach((doc) => {
        if (params.value === "totalFamilias") {
            //Agregamos todas las familias al array totalFamilias
            total.value.push(doc.data().familia)

        } else if (params.value === "totalInvitados") {
            //Agregamos todas los invitados al array totalFamilias
            doc.data().invitados.forEach((invitado) => {
                total.value.push(invitado + " " + doc.data().familia)
            })
        } else if (params.value === "invitadosConfirm") {
            //Agregamos todas los invitados confirmados al array totalFamilias
            if (doc.data().confirm.length > 0) {
                doc.data().confirm.forEach((invitado) => {
                    total.value.push(invitado + " " + doc.data().familia)
                })
            }
        } else if (params.value === "invitadosNoConfirm") {
            //Agregamos todas los invitados no confirmados al array totalFamilias
            if (!doc.data().confirm.length > 0) {
                doc.data().invitados.forEach((invitado) => {
                    total.value.push(invitado + " " + doc.data().familia)
                })
            }
        }
    })
})
})


//Con onSnapshot hacemos reactiva la petición.
const unsubscribe = onSnapshot(q, (querySnapshot) => {
    //Recorremos las familias de la base de datos
    querySnapshot.forEach((doc) => {
        if (params.value === "totalFamilias") {
            //Agregamos todas las familias al array totalFamilias
            total.value.push(doc.data().familia)

        } else if (params.value === "totalInvitados") {
            //Agregamos todas los invitados al array totalFamilias
            doc.data().invitados.forEach((invitado) => {
                total.value.push(invitado + " " + doc.data().familia)
            })
        } else if (params.value === "invitadosConfirm") {
            //Agregamos todas los invitados confirmados al array totalFamilias
            if (doc.data().confirm.length > 0) {
                doc.data().confirm.forEach((invitado) => {
                    total.value.push(invitado + " " + doc.data().familia)
                })
            }
        } else if (params.value === "invitadosNoConfirm") {
            //Agregamos todas los invitados no confirmados al array totalFamilias
            if (!doc.data().confirm.length > 0) {
                doc.data().invitados.forEach((invitado) => {
                    total.value.push(invitado + " " + doc.data().familia)
                })
            }
        }
    })
})
</script>