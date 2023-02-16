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
            <v-form ref="formConfirm">
                <v-row class="mx-auto" justify="center" v-for="invitado in invitados" :key="invitado">
                    <v-checkbox :value="invitado" :label="invitado" color="#884EC3"></v-checkbox>
                </v-row>
            </v-form>
            <v-card-actions class="d-flex justify-space-around align-center mt-4">
                <v-btn variant="tonal" color="#884EC3">
                    Confirmar
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>
<script>
import { useAuthStore } from '../stores/AuthStore'

export default {
    data() {
        const store = useAuthStore()
        return {
            invitados: store.invitadosFamilia[0],
            familia : store.familia
        }
    }
}
</script>