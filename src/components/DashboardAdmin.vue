<template>
    <v-container class="mt-16">
      <v-row class="mb-3">
        <v-col class="d-flex flex-column justify-center align-center">
          <p>Total de invitados</p>
          <v-progress-circular :rotate="180" :size="100" :width="15" :model-value="totalInvitados.length" color="secondary">
            {{ totalInvitados.length }}
          </v-progress-circular>
          <p @click="irUrl('totalInvitados')" class="">Ver</p>
        </v-col>
  
        <v-col class="d-flex flex-column justify-center align-center">
          <p>Total de familias</p>
          <v-progress-circular :rotate="180" :size="100" :width="15" :model-value="totalFamilias.length" color="orange">
            {{ totalFamilias.length }}
          </v-progress-circular>
          <p @click="irUrl('totalFamilias')" class="">Ver</p>
        </v-col>
      </v-row>
  
      <v-row class="d-flex flex-column justify-center align-center">
        <p class="text-h5">Invitados Confirmados</p>
        <v-progress-circular class="mb-3" :rotate="180" :size="200" :width="25" :model-value="invitadosConfirm.length"
          color="primary">
          {{ invitadosConfirm.length }}
        </v-progress-circular>
        <p @click="irUrl('invitadosConfirm')" class="">Ver</p>
      </v-row>
      <v-row class="d-flex flex-column justify-center align-center">
        <p class="text-h5">Invitados no confirmados</p>
        <v-progress-circular class="mb-3 d-flex justify-center align-center" :rotate="180" :size="200" :width="25"
          :model-value="invitadosNoConfirm.length" color="red">
          {{ invitadosNoConfirm.length }}
        </v-progress-circular>
        <p @click="irUrl('invitadosNoConfirm')" class="">Ver</p>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { db } from '../firebase'
  import { collection, query, onSnapshot } from "firebase/firestore";
  import { useRouter } from 'vue-router';
  
//Inicializamos router
const router = useRouter();

  //Declaramos las variables que vamos a mostrar.
  const totalInvitados = ref([]);
  const totalFamilias = ref([]);
  const invitadosConfirm = ref([]);
  const invitadosNoConfirm = ref([]);
  
  //Llamamos a la coleccion de la db.
  const q = query(collection(db, "famili"));
  //Con onSnapshot hacemos reactiva la petición.
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    //Recorremos las familias de la base de datos
    querySnapshot.forEach((doc) => {
      //Agregamos todas las dfamilias al array totalFamilias
      totalFamilias.value.push(doc.data().familia)
  
      //Agregamos todos los invitados al array totalInvitados
      doc.data().invitados.forEach((invitado) => {
        totalInvitados.value.push(invitado)
      })
      //Si hay invitados confirmados, los sumammos al array InvitadosConfirm
      if (doc.data().confirm.length > 0) {
        doc.data().confirm.forEach((invitado) => {
          invitadosConfirm.value.push(invitado)
        })
        //Si no lo sumamos al array invitadosNoConfirm
      } else {
        doc.data().invitados.forEach((invitado) => {
          invitadosNoConfirm.value.push(invitado)
        })
      }
    });
  });
  
  const irUrl = (url) => {
    router.push(`/invitados/${url}`)
  }
  </script>
  