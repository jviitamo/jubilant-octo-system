<template>
    <section class="footer">
        <div class="goodbye-text">
            <p>Thank you for visiting my website. If you have any questions, please contact me with the form on the side!</p>
        </div>
        <form>
            <label for="fname">First name:</label><br>
            <input type="text" id="fname" name="fname"><br>
            <label for="lname">Last name:</label><br>
            <input type="text" id="lname" name="lname">
        </form>
    </section>
    <button @click="sendMail()">test</button>
</template>

<script>
import axios from 'axios'


/* eslint-disable */
export default {
  name: 'FooterContainer',
  props: {
    msg: String
  },
  methods: {
    sendMail() {
        axios({
            method: 'post',
            url: 'http://localhost:3000/api/email/order-confirmation',
            data: {
                "name":"YourName", 
                "orderNr": "12344", 
                "toEmail": "jviitamo@gmail.com"
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
