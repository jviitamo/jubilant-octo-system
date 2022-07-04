<template>
  <router-view/>
</template>

<script>


export default {
  name: 'App',
  components: {

  },
  // state
  data() {
    return {
      language: "fi"
    }
  },
  // actions
  methods: {
    changeLanguage(lang) {
      this.language = lang
    }
  }
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
  background-image: url('./assets/bg4.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed; 
}
</style>
