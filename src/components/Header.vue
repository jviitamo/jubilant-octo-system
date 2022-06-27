<template>
 <div class="navcontainer">
    <div class="languageselector">
        <div @click="$emit('changeLanguage', 'fi')" :style="[lang === 'fi' ? 'text-decoration: underline' : '']">FI</div>
        <div>|</div>
        <div @click="$emit('changeLanguage', 'en')" :style="[lang === 'en' ? 'text-decoration: underline' : '']">EN</div>
    </div>
     <div class="welcome-text">
        <p>{{ a("header", "hello", lang) }}</p>
     </div>
     <div class="navcontent">
        <div class="description">{{ a("header", "description", lang) }}</div>
        <div class="links-container">
            <div class="images-container">
                <a href="https://www.linkedin.com/in/juhana-viitamo/" target="a_blank"><img src="../assets/github.png" /></a>
                <a href="https://github.com/jviitamo/" target="a_blank"><img src="../assets/linkedin.png" /></a>
                <a href="https://www.instagram.com/juhanaviitamophotography/" target="a_blank"> <img src="../assets/instagram.png" /></a>
            </div>
            <div class="cv-link">
                <a href="resume.pdf" download>
                    <p>{{ a("header", "cv", lang) }}</p>
                </a>
            </div>
        </div>
     </div>
 </div>
</template>

<script>

import a from "../assets/accessLocalization"

/* eslint-disable */
export default {
  name: 'Header',
  props: {
    lang: String
  },
  // actions
  methods: {
    a
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .languageselector {
        position: absolute;
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
        opacity: 0.7;
    }
    .navcontainer {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        height: 100vh;
        font-family: "Montserrat";
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
    .welcome-text {
        color: white;
        text-align: center;
        font-size: 70px;
        height: 50vh;
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

    @media only screen and (max-device-width: 480px){
       .navcontainer {
            height: calc(100vh - 80px);
        }
    }

     @media screen and (min-width: 1300px) {
         .description {
             font-size: 24px;
         }
         .welcome-text {
             font-size: 96px;
         }
     }

    @media screen and (max-width: 715px) {
        .navcontent {
            flex-direction: column;
            padding: 30px 30px;
        }
        .links-container {
            margin-top: 30px;
        }
        .welcome-text {
            height: 35vh
        }
    }
    @media screen and (max-width: 450px) {
        .navcontent {
            margin: 0 10px;
        }
        .welcome-text {
            height: 25vh
        }
    }

</style>