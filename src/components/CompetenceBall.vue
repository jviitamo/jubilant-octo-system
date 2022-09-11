<template>
    <div class="ball" :style="{backgroundColor: color}" @click="showPopup()">
      <p>{{ msg }}</p>
    </div> 
    <div class="overlay-container" :style="[!this.Popup ? 'display: none' : '']">
      <div class="overlay">
          <div @click="showPopup()" class="closebutton">X</div>
          <slot />
      </div>
  </div>
</template>

<script>

/* eslint-disable */
export default {
  name: 'CompetenceBall',
  props: {
    color: String,
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
    .ball {
        border-radius: 2em;  
        height: 10vw;
        width: 30vw;
        text-align: center;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 30px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;    
    }
    .ball:hover {
        opacity: 0.7
    }

    .ball > p {
      font-size: 24px;
    }
    .overlay-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: black;
        z-index: 1;
        background-color:rgba(0,0,0,.75);
        display: flex;
        justify-content: center;
        align-items: center;

    }
    .overlay {
        background-color: white;
        opacity: 1 !important;
        height: 60%;
        width: 60%;
        border-radius: 2em;
    }
    .closebutton {
        position: relative;
        right: 30px;
        top: 20px;
        text-align: right;
        cursor: pointer;
    }
    .closebutton:hover {
        opacity: 0.7;
    }
    @media screen and (max-width: 1050px) {
      .overlay {
          height: 70%;
          width: 70%;
      }
    }
    @media screen and (max-width: 800px) {
      .ball {
          width: 80%;
          height: 100px;
      }
    }
    @media screen and (max-width: 600px) {
      .overlay {
          height: 80%;
          width: 90%;
      }
      .ball {
          width: 80%;
          height: 70px;
      }
      .ball > p {
        font-size: 16px;
      }
    }

</style>