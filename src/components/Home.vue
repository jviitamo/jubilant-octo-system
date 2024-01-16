<template>
    <Header @changeLanguage="this.changeLanguage" :lang="this.language" />
</template>

<script>

import Header from '../components/Header.vue'
import Competences from '../components/Competences.vue'
import FooterContainer from '../components/FooterContainer.vue'

/* eslint-disable */
export default {
  name: 'Home',
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