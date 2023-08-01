<template>
    <v-btn class="color-dorado ind-9999" size="small" icon="mdi-dots-horizontal" variant="flat" color="#0005"
        position="fixed" id="btn-menu">
    </v-btn>
    <v-menu activator="#btn-menu">
        <v-list>
            <v-list-item v-for="(route, index) in totalRoutes" :key="index">
                <p  @click="irUrl(route.path)">{{ route.title }}</p>
            </v-list-item>
        </v-list>
    </v-menu>
</template>
<style>
.ind-9999 {
    z-index: 99999;
}
</style>
<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const totalRoutes = [
    {
        path: '/',
        name: 'home',
        title: 'Ver Invitación',
    },
    {
        path: '/invitados',
        name: 'invitados',
        title: 'Invitados',
    },
    {
        path: '/invitados/totalInvitados',
        name: 'TotalInvitados',
        title: 'Total de Invitados',
    },
    {
        path: '/invitados/totalFamilias',
        name: 'TotalFamilias',
        title: 'Total de Familias',
    },
    {
        path: '/invitados/invitadosConfirm',
        name: 'InvitadosConfirmados',
        title: 'Total de Confirmados',
    },
    {
        path: '/invitados/invitadosNoConfirm',
        name: 'InvitadosNoConfirmados',
        title: 'Total de No Confirmados',
    },
    {
        path: '/',
        name: 'home'
    }
]

const irUrl = (url) => {
    router.push(url)
  }

</script>