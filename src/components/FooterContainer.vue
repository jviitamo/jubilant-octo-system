<template>
    <section class="footer">
        <div class="goodbye-text">
            <p>{{ a('footer', 'goodbye-text', lang) }}</p>
        </div>
        <form>
            <input type="text" v-model="name" :placeholder="a('footer', 'name', lang)"><br>
            <input type="text" v-model="content" :placeholder="a('footer', 'content', lang)"><br>
            <input type="text" v-model="email" :placeholder="a('footer', 'email', lang)">
            <button @click.prevent="sendMail(this.name, this.content, this.email)">{{ a('footer', 'sendmail', lang) }}</button>
            <p>{{ this.showMessage }}</p>
        </form>
    </section>
</template>

<script>
import axios from 'axios'
import a from "../assets/accessLocalization"

/* eslint-disable */
export default {
  name: 'FooterContainer',
  data() {
    return {
        name: "",
        content: "",
        email: "",
        showMessage: ""
    }
  },
  props: {
    lang: String
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
        .then(data => {
            if (data.data.message.includes("Error sending order confirmation email or name")) {
                this.showMessage = "Incorrect email address"
            } else this.showMessage = "Message sent successfully"
        })
        .catch(error => {
            console.log(error)
            this.showMessage = "Something went from with making the request"
        }
        )

    this.name = ""
    this.content = ""
    this.email = ""
    setTimeout(() => {
        this.showMessage = ""
    }, 5000);
    },
    a
  }
}
    
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .footer {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 100%;
        font-size: 24px;
    }
    .goodbye-text {
        flex-basis: 40%;
    }
    form {
        flex-basis: 40%;
        width: 100%;
    }
    form *{
        width: 100%;
        box-sizing: border-box;
        margin: 5px;
        font-size: 18px;
    }
    button {
        padding: 1em;
        border-radius: 10px;
        background-color: #FDCA3B;
        border: 0;
        color: black;
        cursor: pointer;
    }
    button:hover {
        opacity: 0.7;
    }
    input {
        border-radius: 10px;
        padding: 20px;
        border: 1px solid black;
    }

    @media screen and (max-width: 800px) {
        .footer {
            width: 80%;
            flex-direction: column;
        }
    }
     @media screen and (max-width: 600px) {
        input {
            padding: 10px;
        }
        form * {
            font-size: 12px;
        }
        .footer {
            font-size: 18px;
        }
    }
</style>
