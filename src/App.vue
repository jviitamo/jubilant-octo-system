<template>
  <Header @changeLanguage="this.changeLanguage" :lang="this.language" />
  <Competences :lang="this.language" />
  <FooterContainer :lang="this.language"/>
</template>

<script>

import Header from './components/Header.vue'
import Competences from './components/Competences.vue'
import FooterContainer from './components/FooterContainer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Competences,
    FooterContainer
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
