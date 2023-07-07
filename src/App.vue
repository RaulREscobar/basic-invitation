<template>
  <v-app class="font">
    <router-view />
  </v-app>
</template>

<script setup>
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Imperial+Script&family=Libre+Caslon+Display&display=swap');

body{
  background-color: #121212;
}

.font {  
  font-family: 'Libre Caslon Display', serif;
  font-size: 18px;
  color: #D2BD80;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.font-title {
  font-family: 'Imperial Script', cursive;
  color: #CDA974;
  text-align: center;
  text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-size: 64px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
  margin: 15px, auto;
}

.color-dorado {
    color:#D2BD80 !important;
}
</style>
