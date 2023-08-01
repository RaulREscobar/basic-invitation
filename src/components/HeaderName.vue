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
            Nos complace invitarlos a ser partícipes de nuestra boda. Su presencia es importante y esperamos que nos acompañen para disfrutar de ese día tan especial.
        </p>
    </v-container>
</template>
<style scoped>
.bg-flower {
    background-image: url(../assets/fondo-invitacion-boda.png);
    background-repeat: no-repeat;
    background-size: contain ;
    max-height: 100vh;
    height: 100%;   
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
@media (width < 345px){
    .font {
        font-size: 16px;
    }
}
</style>