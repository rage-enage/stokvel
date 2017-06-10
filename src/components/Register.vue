<template>
  <div class="register">
    <form>
      <label>First Name: {{meow}}</label>
      <input type='text' v-model="register.name"/>
      <br/>
      <label>Last Name: </label>
      <input type='text' v-model="register.surname"/>
      <br/>
      <label>Email address:</label>
      <input type='text'v-model="register.email"/>
      <br/>
      <label>Password:</label>
      <input type='password'v-model="register.password"/>
      <br/>
      <input type='submit' v-on:click="registerUser"/>
    </form>
  </div>
</template>

<script>
// Let's get fancy errors.
import colorLog from '../colorLog.js';

export default {
  name: 'register',
  data() {
    return {
      register: {
        name: '',
        surname: '',
        email: '',
        password: ''
      },
      meow: ''
    };
  },
  methods: {
    registerUser: function (event) {
      event.preventDefault();
      this.$http.post('http://www.mocky.io/v2/5185415ba171ea3a00704eed', { data: JSON.stringify(this.register) }).then(response => {
        // Show an alert saying the user is registered, close it then redirect
        const waitTime = 2000;
        this.$swal({
            title: "Auto close alert!",
            text: "I will close in 2 seconds.",
            type: "success",
            timer: waitTime,
            showConfirmButton: false
        });
        setTimeout(() => {
            this.$route.router.go('/');
        }, waitTime + 100); // Add 100ms before redirect.
      }, err => {
        colorLog(`There was an error ${err.bodyText}`);
        // error callback
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

<style scoped>

</style>
