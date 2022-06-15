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
</template>

<script>
/* eslint-disable */
export default {
  name: 'FooterContainer',
  props: {
    msg: String
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
    form {
    }
</style>
