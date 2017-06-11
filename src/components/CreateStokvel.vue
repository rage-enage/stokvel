<template>
  <div class="createStokvel">
    <h2>Create stokvel</h2>
    <form v-on:submit.prevent="createStokvel($event)"> 
      <label>
        Title
        <input type='text' />
      </label>
      <label>
        Description
        <input type='text' />
      </label>
      <label>
        Monthly Payment
        <input type='number' />
      </label>
      <input type='submit' value='Create' class='button'/>
    </form>
  </div>
</template>

<script>
export default {
  name: 'createStokvel',
  data() {
    return {}
  },
  methods: {
    createStokvel($event) {

    }
  }
}
</script>

<style>

</style>
