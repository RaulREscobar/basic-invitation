<template>
    <div class="text-center">
        <v-btn variant="tonal" color="#D2BD80" @click="dialog = true">
            Regalar
        </v-btn>

        <v-dialog v-model="dialog" width="auto">
            <v-card>
                <v-card-text class="text-center">
                    <b>Mercado Pago</b>
                    <br />
                    <b>CVU:</b>
                    0000003100085665226567
                    <br />
                    <b>Alias:</b>
                    Bety.laza.casamiento
                    <br />
                    <br />
                    <b>Bancaria</b>
                    <br />
                    <b>CBU:</b>
                    0070062730004032208394
                    <br />
                    <b>Alias:</b>
                    Bety.laza.boda
                    <br />
                
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