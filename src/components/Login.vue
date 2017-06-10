<template>
  <div class="login">
    <div class="row columns">
      <form v-on:submit.prevent="loginUser($event)">
        <label>
          Email:
          <input type='email' required />
        </label>
        <label>
          Password:
          <input type='password' required />
        </label>
        <input type='submit' v-on:click="loginUser"/>
      </form>
    </div>
  </div>
</template>
<script>
  import colorLog from '../colorLog.js';
  export default {
    name: 'login',
    data() {
      return {};
    },
    created () {
      // console.log(this.ThingIWantToShare)
    },
    methods: {
      loginUser(event) {
        event.preventDefault();
        // http://www.mocky.io/v2/593c54f8100000791cc4781b
        // this.$http.post('http://www.mocky.io/v2/5185415ba171ea3a00704eed', { data: JSON.stringify(this.register) }).then(response => {
        this.$http.get('http://www.mocky.io/v2/593c54f8100000791cc4781b').then(response => {
          const data = JSON.parse(JSON.stringify(response.bodyText));
          // Set the header
          this.$http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk';
          console.log("user is ", data);
          this.$route.router.go('/');
        },
        err => {
          colorLog(`An error occured ${err}`);
          this.$swal({
            title: "An error has occured",
            text: err.bodyText,
            type: "error"
          });
        });
      }
    }
  }
</script>
