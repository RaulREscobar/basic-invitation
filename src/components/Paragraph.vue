<template>
    <v-container class="pt-8">
        <p class="text-body-2 text-center p-3">
            {{ text }}
        </p>
    </v-container>
</template>
<script>
export default {
    props: {
        text: String
    }
}
</script>
