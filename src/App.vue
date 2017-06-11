<template>
  <div id="app">
    <header>
      <span><router-link to="/">Stokvel.io</router-link></span>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
// Import our user services object which shall be injected.
import {UserService} from './services/UserService.js'
export default {
  name: 'app',
  // Inject any objects, ES6 destructering, would be 'UserService': UserService
  provide: {
    UserService
  }  
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #3F51B5;
  color: rgba(255,255,255,.87);
}

header a {
  color: white;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}

a {
  text-decoration: none;
}

</style>
