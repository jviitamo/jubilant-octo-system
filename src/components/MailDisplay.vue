<template>
    <div class="mails-container">
      <div class="mails-card">
        <h1>Sent Mails</h1>
        <table class="mailstable">
          <tr>
            <td>id</td>
            <td>name</td>
            <td>content</td>
            <td>mail</td>
          </tr>
          <tr v-for="mail in mails[0]" :key="mail.id">
            <td>{{ mail.id }}</td>
            <td>{{ mail.name }}</td>
            <td>{{ mail.content }}</td>
            <td>{{ mail.email }}</td>
          </tr>
        </table>
      </div>
    </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'MailDisplay',
  methods: {
    changeLanguage(lang) {
      this.language = lang
    }
  },
  data() {
    return {
      mails: []
    }
  },
  created() {
    axios.get(process.env.VUE_APP_MAILS)
      .then(response => this.mails.push(response.data))
  }
}
</script>

<style>
  .mails-container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: 'Montserrat';
  }
  .mails-card {
    background-color: white;
    width: 80vw;
    height: 70vh;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  table, tr, td {
  border: 1px solid;
  background-color: white;
  width: 80%;
  text-align: center;
  padding: 5px;
}
.mailstable {
    overflow-y: scroll;
    height: 50vh;
    display: block;
}
td {
  padding: 10px;
}
</style>
