<template>
    <v-container variant="tonal" color="#884EC3">
        <v-card class="text-center py-4">
            <v-icon color="#884EC3" icon="mdi-image" size="70" type="outline"></v-icon>
            <v-card-title class="text-center">
                <!-- Mi yo de antes -->
            </v-card-title>
            <v-row justify="center">
                <v-col v-for="n in 3" :key="n" class="d-flex child-flex" cols="10">
                    <v-img :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                        :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`" aspect-ratio="1" cover
                        class="bg-grey-lighten-2">
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