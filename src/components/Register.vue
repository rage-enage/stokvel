<template>

    <div class="register">
        <form>
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
        console.log(this);
        this.$http.get('https://rehive.com/api/3/').then(response => {
            console.log(response)
            this.meow = response.body;

        }, err => {
            // error callback
        });
    }
  }
}
</script>

<style scoped>

</style>
