<template>

    <div class="register">
        <form v-on:submit.prevent>
            <label>Name: {{meow}}</label>
            <input type='text'/>
            <input type='submit' v-on:click="register"/>
        </form>
    </div>
  
</template>

<script>
export default {
  name: 'register',
  data() {
      return {
          meow: 'rawr'
      };
  },
  methods: {
    register: function (event) {
        event.preventDefault();
        this.$http.get('https://rehive.com/api/3/').then(response => {
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
