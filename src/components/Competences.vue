<template>
 <div class="navcontainer">
     <div class="competences-container">
        <p>{{ a('content', 'competences', lang) }}</p>
        <section class="competences">
            <CompetenceBall :msg="a('content', 'software', lang)" color="#145364">
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
            <CompetenceBall :msg="a('content', 'consulting', lang)" color="#FD703B">
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
            <CompetenceBall :msg="a('content', 'servers', lang)" color="#fd9a3b">
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
            <CompetenceBall :msg="a('content', 'photography', lang)" color="#FDCA3B">
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
     </div>
 </div>
</template>

<script>

import CompetenceBall from './CompetenceBall.vue'
import FooterContainer from './FooterContainer.vue'
import a from "../assets/accessLocalization"


/* eslint-disable */
export default {
  name: 'Competences',
  components: {
      CompetenceBall,
      FooterContainer
  },
  props: {
    lang: String
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
    },
    a
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
    }
    .competences-container {
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 150px;
        justify-content: space-around;
        height: 100%;
    }
    .competences-container > p {
       font-size: 36px;
       margin-top: 80px;
       margin-bottom: 50px;
    }
    .competences {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 90%;
        flex-wrap: wrap;
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
    @media screen and (max-width: 1000px) {
        .competences-container {
            margin: 0 80px;
        }     
    }
    @media screen and (max-width: 650px) {
        .competences-container {
            margin: 0 10px;
        }
    }

</style>