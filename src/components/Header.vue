<template>
 <div class="navcontainer">
    <div class="languageselector">
        <div @click="toFI()">FI</div>
        <p>|</p>
        <div @click="toEN()">EN</div>
    </div>
     <div class="container1">
        <p v-if="this.language === 'FI'">Hei!</p>
        <p v-if="this.language === 'EN'">Hello!</p>
     </div>
     <div class="navcontent">
        <div v-if="this.language === 'FI'" class="description">Olen tuotantotalouden maisteripoiskelija Aalto-yliopistosta. Opiskelen pääaineessa Product and Innovation Management, ja tarkoitukseni on suunnata kohti tuotejohtamisen työtehtäviä. Pidän sekä tekniikasta että taloudesta, ja intohimoni on käyttää erilaisia työkaluja luodakseni arvoa asiakkaille.</div>
        <div v-if="this.language === 'EN'" class="description">IEM MSc student majoring in product and innovation management. Interests in product development, software engineering and mathematical analysis. Passionate about using modern technologies and data to create better products. Aiming towards product management to create innovation, growth and direction for businesses.</div>
        <div class="links-container">
            <div class="images-container">
                <a href="https://www.linkedin.com/in/juhana-viitamo/" target="a_blank"><img src="../assets/github.png" /></a>
                <a href="https://www.linkedin.com/in/juhana-viitamo/" target="a_blank"><img src="../assets/linkedin.png" /></a>
                <a href="https://www.linkedin.com/in/juhana-viitamo/" target="a_blank"> <img src="../assets/instagram.png" /></a>
            </div>
            <div class="cv-link">
                <a href="resume.pdf" download>
                    <p v-if="this.language === 'FI'">Ansioluetteloni</p>
                    <p v-if="this.language === 'EN'">My resume</p>
                </a>
            </div>
        </div>
     </div>
 </div>
</template>

<script>

/* eslint-disable */
export default {
  name: 'Header',
  props: {
    msg: String
  },
  // state
  data() {
    return {
      language: "FI"
    }
  },
  // actions
  methods: {
    toEN() {
      this.language = "EN"
    },
    toFI() {
      this.language = "FI"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .languageselector {
        position: fixed;
        right: 15px;
        top: 15px;
        display: flex;
        flex-direction: row;
        font-size: 20px;
        color: white;
    }
    .languageselector > div {
        cursor: pointer;
        margin: 0 10px;
    }
    .languageselector > div:hover {
        text-decoration: underline;
    }
    .navcontainer {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        height: 100vh;
        font-family: "Montserrat";
        background-image: url('../assets/bg4.jpg');
        background-repeat: no-repeat;
        background-size: cover;
    }
    .navcontent {
        background-color: white;
        border-radius: 1em 1em 0 0;
        display: flex;
        flex-direction: row;
        padding: 30px 70px;
        margin: 0 50px;
        align-items: center;
        justify-content: space-around;
    }
    .description {
        flex-basis: 60%;
        font-size: 16px;
    }
    .container1 {
        color: white;
        text-align: center;
        font-size: 70px;
        height: 40vh;
    }

    .images-container {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
    }
    
    .images-container > a > img {
        height: 60px;
        margin: 0 10px;
        opacity: 0.7;
    }
    .images-container > a > img:hover {
        opacity: 0.4;
    }
    .cv-link {
        background-color: #FDCA3B;
        border-radius: 1em;
        padding: 10px;
        text-align: center;
        margin: 10px;
        cursor: pointer;
    }
    .cv-link > a {
        color: black;
        text-decoration: none;
    }
    .cv-link:hover {
        opacity: 0.7;
    }

    @media screen and (max-width: 715px) {
        .navcontent {
            flex-direction: column;
            padding: 30px 30px;
        }
        .links-container {
            margin-top: 30px;
        }
        .container1 {
            height: 20vh;
        }
    }
    @media screen and (max-width: 450px) {
        .navcontent {
            margin: 0 10px;
        }
        .container1 {
            height: 15vh;
        }
    }

</style>