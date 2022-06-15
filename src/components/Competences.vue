<template>
 <div class="navcontainer">
     <div class="competences-container">
        <section class="competences">
            <CompetenceBall :msg="'Software Development'">
                <div class="ballcontent">
                    <div class="description-text">
                        <p>I have been studying information networks, which is heavily focused around software development. In addition, my own interests have been moving myself towards programming.</p>
                        <p>I have been coding backend with Java, Kotlin and Scala. On the other hand I fluent with React and Vue.</p>
                        <p>My work experience around software development includes CTO position at my student guild and IT-consultant at Oikeat Oliot Oy.</p>
                    </div>
                    <div class="languages-container">
                        <p>Vue</p>
                        <p>React</p>
                        <p>Kotlin/Java</p>
                        <p>Scala</p>
                        <p>Python</p>
                    </div>
                </div>
            </CompetenceBall>
            <CompetenceBall :msg="'Consulting '">
                <div class="ballcontent">
                    <div class="description-text">
                        <p>I have been studying information networks, which is heavily focused around software development. In addition, my own interests have been moving myself towards programming.</p>
                        <p>I have been coding backend with Java, Kotlin and Scala. On the other hand I fluent with React and Vue.</p>
                        <p>My work experience around software development includes CTO position at my student guild and IT-consultant at Oikeat Oliot Oy.</p>
                    </div>
                    <div class="languages-container">
                        <p>Vue</p>
                        <p>React</p>
                        <p>Kotlin/Java</p>
                        <p>Scala</p>
                        <p>Python</p>
                    </div>
                </div>
            </CompetenceBall>
            <CompetenceBall :msg="'Servers'">
                <div class="ballcontent">
                    <div class="description-text">
                        <p>I have been studying information networks, which is heavily focused around software development. In addition, my own interests have been moving myself towards programming.</p>
                        <p>I have been coding backend with Java, Kotlin and Scala. On the other hand I fluent with React and Vue.</p>
                        <p>My work experience around software development includes CTO position at my student guild and IT-consultant at Oikeat Oliot Oy.</p>
                    </div>
                    <div class="languages-container">
                        <p>Vue</p>
                        <p>React</p>
                        <p>Kotlin/Java</p>
                        <p>Scala</p>
                        <p>Python</p>
                    </div>
                </div>
            </CompetenceBall>
        </section>
        <FooterContainer />
     </div>
 </div>
</template>

<script>

import CompetenceBall from './CompetenceBall.vue'
import FooterContainer from './FooterContainer.vue'

/* eslint-disable */
export default {
  name: 'Competences',
  components: {
      CompetenceBall,
      FooterContainer
  },
  props: {
    msg: String
  },
  // state
  data() {
    return {
      Popup: false
    }
  },
  // actions
  methods: {
    showPopup() {
      this.Popup = !this.Popup
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .navcontainer {
        display: flex;
        flex-direction: column;
        height: 100%;
        min-height: 100%;   
        font-family: "Montserrat";
        background-image: url('../assets/bg4.jpg');
        background-repeat: no-repeat;
        background-size: cover;
    }
    .competences-container {
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 50px;
        justify-content: space-around;
        height: 100%;
    }
    .competences {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 100%;
    }
    .ballcontent {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        height: 80%;
        padding-top: 30px;
    }
    .description-text {
        flex-basis: 60%;
    }
    .languages-container {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        flex-basis: 20%;
    }
    .languages-container > p {
        padding: 10px;
        background-color: #145364;
        text-align: center;
        border-radius: 2em;
        min-width: 70px;
        color: white;
    }

    @media screen and (max-width: 600px) {
      .ballcontent {
          flex-direction: column;
          padding: 30px;
      }
      .languages-container {
          flex-direction: row;
          flex-wrap: wrap;
      }
    }
    @media screen and (max-width: 800px) {
      .competences {
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
      }
    }
    @media screen and (max-width: 450px) {
        .competences-container {
            margin: 0 10px;
        }
    }

</style>