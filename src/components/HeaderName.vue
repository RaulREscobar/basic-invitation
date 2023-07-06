<template>
    <v-container class="bg-flower">
        <div class="d-flex flex-column">
            <h1 class="font-title mb-2">
                Lázaro 
            </h1>
            <h1 class="font-title mb-3">
                y
            </h1>
            <h1 class="font-title">
                Betiana
            </h1>
        </div>
        
        <p class="font w-50">
            Con la bendición del amor y la alegría en nuestros corazones, nos complace invitarles a ser testigos de nuestro compromiso en el día de nuestra boda. Que vuestra presencia y amor nos acompañen mientras comenzamos este hermoso capítulo juntos.</p>
    </v-container>
</template>
<style scoped>
.bg-flower {
    background-image: url(../assets/fondo-invitacion-boda.png);
    background-repeat: no-repeat;
    background-size: contain ;
    min-height: 98vh;
    max-height: 100vh;
    height: 100%;
    width: 100%;
    max-width: 375px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 55px;
    align-items: center;
}

.font {
    text-align: center;
}
@media (width < 375px){
    .font {
        font-size: 16px;
    }
    .bg-flower {
        background-size: contain;
        gap: 10vw;
    }
}
</style>