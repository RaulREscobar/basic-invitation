<template>
    <v-container>
        <v-card class="text-center pa-3" >
            <v-icon color="#D2BD80" icon="mdi-pinterest" size="70" type="outline"></v-icon>
            <v-card-title class="font">
                ALGUNAS IDEAS DE 
                <br/>
                VESTIMENTA...
            </v-card-title>
            <v-card-text class="font">
                La fiesta va a ser tematica,
                <br/>
                nos gustaria que vengas... 
            </v-card-text>

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
            <v-card-actions class="d-flex justify-space-around align-center mt-4">
                <v-btn target="_blank" href="https://ar.pinterest.com/raulrescobar/lazaro-y-betiana/" variant="tonal" color="#D2BD80">
                    VER MAS IDEAS
                </v-btn>
            </v-card-actions>
            
        </v-card>
    </v-container>
</template>

<script setup>

const getImageUrl = (name) => {
    return new URL(`../assets/${name}.jpg`, import.meta.url).href
}
const images = [
    {
        id: 1, url: '../assets/vest1.jpg', name: 'vest1'
    },
    {
        id: 2, url: '../assets/vest2.jpg', name: 'vest2'
    },
    {
        id: 3, url: '../assets/vest3.jpg', name: 'vest3'
    },
]

</script>