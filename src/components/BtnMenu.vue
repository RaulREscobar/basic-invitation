<template>
    <v-btn class="color-dorado ind-9999" size="small" icon="mdi-dots-horizontal" variant="flat" color="#0005"
    position="fixed" id="btn-menu">       
</v-btn>
<v-menu activator="#btn-menu">
        <v-list>
            <v-list-item>Invitados</v-list-item>
            <v-list-item>Agregar Invitados</v-list-item>
            <v-list-item>Invitados confirmados</v-list-item>
        </v-list>
    </v-menu>
</template>
<style>
.ind-9999 {
    z-index: 99999;
}
</style>