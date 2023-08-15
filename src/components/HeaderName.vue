<template>
    <v-container class="bg-arg">
        <div class="text-center">
            <h1 class="">
                FESTEJAMOS
                <br />
                MIS 11 AÑOS ?
            </h1>
        </div>
    </v-container>
</template>
<style scoped>
.bg-arg {
    background-image: url(../assets/bg-arg.jpeg);
    background-repeat: no-repeat;
    background-size: contain;
    max-height: 600px;
    height: 32%;
    max-width: 355px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    gap: 55px;
    align-items: center;
}

.font {
    text-align: center;
}

@media (width < 345px) {
    .font {
        font-size: 16px;
    }
}
</style>