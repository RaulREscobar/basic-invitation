//Se saca componente por pedido de la quinceañera.

<template>
    <v-container variant="tonal" color="#884EC3">
        <v-card class="text-center py-4">
            <v-icon color="#884EC3" icon="mdi-image" size="70" type="outline"></v-icon>
            <v-card-title class="text-center">
                Esta soy YO...
            </v-card-title>
            <v-row justify="center">
                <v-col v-for="image in images" :key="image.id" class="d-flex child-flex" cols="10">
                    <v-img :src=getImageUrl(image.name) :alt="image.name" class="bg-grey-lighten-2">
                        <template v-slot:placeholder>
                            <v-row align-content="center" class="fill-height ma-0" justify="center">
                                <v-progress-circular indeterminate color="grey-lighten-5"></v-progress-circular>
                            </v-row>
                        </template>
                    </v-img>
                </v-col>
            </v-row>
        </v-card>
    </v-container>
</template>
<script setup>

const getImageUrl = (name) => {
    return new URL(`../assets/${name}.jpeg`, import.meta.url).href
}
const images = [
    {
        id: 1, url: '../assets/daf1.jpeg', name: 'daf1'
    },
    {
        id: 2, url: '../assets/daf2.jpeg', name: 'daf2'
    },
    {
        id: 3, url: '../assets/daf3.jpeg', name: 'daf3'
    },
]

</script>