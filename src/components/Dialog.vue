<template>
    <div class="text-center">
        <v-btn variant="tonal" color="#D2BD80" @click="dialog = true">
            Regalar
        </v-btn>

        <v-dialog v-model="dialog" width="auto">
            <v-card>
                <v-card-text class="text-center">
                    <b>CVU:</b>
                    0000003100075320459939
                    <br />
                    <b>Alias:</b>
                    lazaro-y-betiana
                    <br />
                    <b>CUIT/CUIL:</b>
                    2035555562
                    <br />
                    <b>Mercado Pago</b>
                </v-card-text>
                <v-card-actions>
                    <v-btn variant="tonal" color="#D2BD80" block @click="dialog = false">Cerrar</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>
<script>
export default {
    props: {
        dialog: Boolean
    },
    data() {
        return {
            dialog: this.$props.dialog,
        }
    },
}
</script>