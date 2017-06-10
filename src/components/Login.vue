<template>
  <div class="login">
    <div class="row">
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
    methods: {
      loginUser(event) {
        event.preventDefault();
        this.$http.post('http://www.mocky.io/v2/5185415ba171ea3a00704eed', { data: JSON.stringify(this.register) }).then(response => {
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
