<template>
    <v-container>
        <v-card class="text-center pa-3" color="#EEDAF9">
            <v-icon color="#884EC3" icon="mdi-clipboard-text" size="70" type="outline"></v-icon>
            <v-card-title class="text-center">
                NOS GUSTARIA SABER MÁS...
            </v-card-title>

            <v-form ref="form">
                <v-card-text>
                    ¿Que musica te gusta?
                </v-card-text>
                <v-row justify="center" class="mx-auto">
                    <v-checkbox v.model="music" value="rock" label="ROCK"></v-checkbox>
                    <v-checkbox v.model="music" value="cumbia" label="CUMBIA"></v-checkbox>
                    <v-checkbox v.model="music" value="trap" label="TRAP"></v-checkbox>
                </v-row>
                <v-card-text>
                    ¿Que bebida te gustaria tomar?
                </v-card-text>
                <v-row justify="center" class="mx-auto">
                    <v-checkbox value="fernet" label="FERNET"></v-checkbox>
                    <v-checkbox value="campari" label="CAMPARI"></v-checkbox>
                    <v-checkbox value="gancia" label="GANCIA"></v-checkbox>
                    <v-checkbox value="gaseosa/agua" label="MI MAMÁ NO ME DEJA"></v-checkbox>
                </v-row>
                <v-card-text>
                    Si tendrias que traer lo que vas a tomar
                    <br />
                    ¿Que tomarias?
                </v-card-text>
                <v-select class="pb-8" v-model="bebida" :items="bebidas" label="Selecciona una o mas" multiple
                    hint="Elige lo que vas a traer para tomar" persistent-hint ></v-select>
            </v-form>


            <v-card-actions class="d-flex justify-space-around align-center mt-4">
                <v-btn variant="tonal" color="#884EC3">
                    Enviar
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            music: [],
            bebida: [],
            bebidas: ["Fernet", "Campari", "Gancias", "Gaseosa/agua"]
        }
    },
}
</script>