<template>
    <section class="footer">
        <div class="goodbye-text">
            <p>Thank you for visiting my website. If you have any questions, please contact me with the form on the side!</p>
        </div>
        <form>
            <label for="name">Name:</label><br>
            <input type="text" v-model="name"><br>
            <label for="content">Content:</label><br>
            <input type="text" v-model="content"><br>
            <label for="email">Email:</label><br>
            <input type="text" v-model="email">
        </form>
    </section>
    <button @click="sendMail(this.name, this.content, this.email)">test</button>
</template>

<script>
import axios from 'axios'


/* eslint-disable */
export default {
  name: 'FooterContainer',
  data() {
    return {
        name: "",
        content: "",
        email: ""
    }
  },
  props: {
    msg: String
  },
  methods: {
    sendMail(name, content, email) {
        axios({
            method: 'post',
            url: process.env.VUE_APP_API,
            data: {
                "name": name, 
                "content": content, 
                "toEmail": email
            }
        })
        .then(data => console.log(data))
    }
  }
}
    
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .footer {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    .goodbye-text {
        flex-basis: 50%;
    }
</style>
