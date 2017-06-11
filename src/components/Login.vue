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
        <input type='submit' v-on:click="loginUser" value="log in" class="button"/>
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
    // We get the user service object, this is injected
    // So it will be shared accross the app.
    inject: ['UserService'],
    methods: {
      loginUser(event) {
        event.preventDefault();
        // http://www.mocky.io/v2/593c54f8100000791cc4781b
        // this.$http.post('http://www.mocky.io/v2/5185415ba171ea3a00704eed', { data: JSON.stringify(this.register) }).then(response => {
        this.$http.get('http://www.mocky.io/v2/593c54f8100000791cc4781b').then(response => {
          // Set the header
          this.$http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk';
          // For some reason in our test data None does not have "",
          // To remedy that lets replace none with ""
          const parsedBody = response.bodyText.replace(/None/g, `""`);
          const data = JSON.parse(parsedBody);

          // Let's set our variables
          this.UserService.token = data.data.token;;
          this.UserService.email = data.data.user.email;
          this.UserService.first_name = data.data.user.first_name;
          this.UserService.loggedIn = true;
          this.$router.push('/')
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
