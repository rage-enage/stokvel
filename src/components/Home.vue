<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul v-if="!UserService.loggedIn">
      <li><router-link to="/register">Go to Register</router-link></li>
      <li><router-link to="/login">Go to Login</router-link></li>
    </ul>
    <ul v-if="UserService.loggedIn">
      <li><router-link to="/vote-event">Vote event</router-link></li>
      <li><router-link to="/create-event">Create event</router-link></li>
      <li><router-link to="/create-stokvel">Create Stokvel</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  inject: ['UserService'],
  data () {
    return {
      msg: 'Welcome to Stokvel.io'
    }
  },
  created() {
    console.log("Home user service", this.UserService);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
