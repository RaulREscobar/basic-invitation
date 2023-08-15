<template>
    <v-container>
        <v-card class="text-center pa-4">
            <v-icon color="#D2BD80" icon="mdi-checkbox-multiple-outline" size="70" type="outline"></v-icon>
            <v-card-title class="font">
                ¿VENIS?
            </v-card-title>
            <v-card-text class="mb-4">
                <b>
                    CONFIRMEN ASISTENCIA
                    <br />
                    <br />
                </b>
                <p class="">
                    <b>Queremos estar seguros que vienen a mi cumple.
                        <br />
                        Asi que te dejamos un boton debajo para que hables con mi mama,
                        <br />
                        se llama PAMELA,
                    </b>
                </p>
            </v-card-text>
            <v-btn @click=sendMsj type="submit" variant="tonal" color="">
                <v-icon color="#25D366" icon="mdi-whatsapp" type="outline"></v-icon>
                Confirmar
            </v-btn>
            <p class="text-caption font">
                <b>*Confirmar por WhatsApp</b>
            </p>
        </v-card>
    </v-container>
</template>

<script setup>
//CAMBIAR VALORES DE NROTEL Y MSJ PARA MANDAR MSJ WHATSAPP
const nroTel = "5491138126917"
const msj = "Hola, quiero confirmar asistencia al cumple, soy "

const msjCod = msj.replace(/\s+/g, '%20')
const msjTot = `https://wa.me/${nroTel}?text=${msjCod}`

const sendMsj = () => { location.replace(msjTot) }
</script>