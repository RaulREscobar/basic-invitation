<template>
    <div class="text-center">
        <v-btn variant="tonal" color="#884EC3" @click="dialog = true">
            Regalar
        </v-btn>

        <v-dialog v-model="dialog" width="auto">
            <v-card>
                <v-card-text class="text-center">
                    <b>CVU:</b>
                    0000003100075320459939
                    <br />
                    <b>Alias:</b>
                    david.356.pure.mp
                    <br />
                    <b>CUIT/CUIL:</b>
                    20314449356
                    <br />
                    <b>Mercado Pago</b>
                </v-card-text>
                <v-card-actions>
                    <v-btn variant="tonal" color="#884EC3" block @click="dialog = false">Cerrar</v-btn>
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