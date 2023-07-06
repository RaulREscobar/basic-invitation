<template>
    <v-container >
        <p class="font">
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
