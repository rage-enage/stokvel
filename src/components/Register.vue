<template>

    <div class="register">
        <form v-on:submit.prevent>
            <label>First Name: {{meow}}</label>
            <input type='text' v-model="register.name"/>
            <br/>
            <label>Last Name: </label>
            <input type='text'v-model="register.surname"/>
            <br/>
            <label>Email address:</label>
            <input type='text'v-model="register.email"/>
            <br/>
            <label>Password:</label>
            <input type='password'v-model="register.password"/>
            <br/>
            <input type='submit' v-on:click="register"/>
        </form>
    </div>
  
</template>

<script>
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
        meow: 'rawr'
      };
  },
  methods: {
    register: function (event) {
        event.preventDefault();
        console.log("hello", this.register)
        console.log(JSON.stringify(this.register))
        this.$http.get('https://rehive.com/api/3/').then(response => {
            console.log(JSON.stringify(this.register))
            console.log(response)
            this.meow = response.body;
            this.$swal({
                title: "Auto close alert!",
                text: "I will close in 2 seconds.",
                timer: 2000,
                showConfirmButton: false
            });
        }, err => {
            // error callback
        });
    }
  }
}
</script>

<style scoped>

</style>
