<template>
  <Header />
</template>

<script>

import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
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
