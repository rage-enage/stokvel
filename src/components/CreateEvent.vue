<template>
  <div class="row">
    <div class="medium-10 medium-offset-1 columns">
      <h1>Create Event</h1>
      <form>
        <label>
          Event name
          <input type='text' />
        </label>
        <label>
          Event description
          <input type='text' />
        </label>
        <label>
          Event price
          <input type='number' />
        </label>
        <input type='submit' v-on:click="createEvent" class="light-blue darken-4 waves-effect waves-light btn"/>
      </form>
    </div>
  </div>
</template>
<script>
  import colorLog from '../colorLog.js';
  export default {
    name: 'createEvent',
    data () {
      return {}
    },
    methods: {
      createEvent() {
        colorLog('yo');
      }
    }
  }
</script>
