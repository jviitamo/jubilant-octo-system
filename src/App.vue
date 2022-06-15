<template>
  <Header />
  <Competences />
</template>

<script>

import Header from './components/Header.vue'
import Competences from './components/Competences.vue'

export default {
  name: 'App',
  components: {
    Header,
    Competences
  },
}
</script>

<style>
@font-face {
    font-family: "Montserrat";
    src: local("Montserrat"),
    url(./fonts/Montserrat-Regular.ttf);
  }
#app {
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>
