<template>
  <div class="row">
    <div class="medium-10 medium-offset-1 columns">
      <h3>Events available to vote for</h3>

      <div class="row columns"> 
        <h3>Select an event</h3>
        <select v-model="selectedStokvel">
          <option v-for="stokvel in stokvels" v-bind:value="stokvel">{{stokvel.title}}</option>
        </select>
      </div>

      <div class="row align-middle" v-for="event in selectedStokvel.events" v-if="selectedStokvel">
        <div class="small-9 columns">
          <h5>Event: {{event.title}} - R{{event.price}}</h5>
          <p>
            {{event.description}}
          </p>
          <div class="small-6 small-offset-3 columns">
            <button type="button" class="waves-effect waves-light btn vote-button light-blue darken-4" v-on:click="voteForEvent(event)">Vote</button>
          </div>
        </div>
        <div class="vote-bubble btn btn-floating green lighten-2" v-bind:class="{pulse: event.shouldPulse}"> 
          {{event.votes}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'voteEvent',
  data() {
    return {
      stokvels: [
        {
          'title': 'Connors stokvel',
          'description': 'I believe',
          'events': [
            {
              'title': 'Cool chair',
              'description' : 'Slam the chair',
              'price' : 130,
              'votes' : 2,
              'shouldPulse': false
            },
            {
              'title': 'A new window',
              'description' : 'Gotta fix the cracked window',
              'price' : 60,
              'votes' : 0,
              'shouldPulse': false
            },
            {
              'title': 'Cool chair',
              'description' : 'Slam the chair',
              'price': 400,
              'votes' : 10,
              'shouldPulse': false
            },
          ]
        },
        {
          'title': 'iOS Hipster',
          'description': 'Gotta get apple  EMOJI! 😸🐱',
          'total': 5500,
          'events': [
            {
              'title': 'A big desk',
              'description' : 'We need a big desk to do things',
              'price' : 300,
              'votes' : 2,
              'shouldPulse': false
            },
            {
              'title': 'Siri homepad',
              'description' : 'Satisfy those hipster cravings',
              'price' : 5000,
              'votes' : 0,
              'shouldPulse': false
            },
          ]
        }
      ],
      selectedStokvel : {}
    };
  },
  methods: {
    voteForEvent(event) {
      event.votes ++;
      event.shouldPulse = true;
      setTimeout(() => {
        event.shouldPulse = false;
      }, 350)
    }
  }
}
</script>

<style>
  .vote-button {
    width: 100%;
  }

  select {
    display: block;
  }

  .vote-bubble {
    border-radius: 50%;
    height: 55px;
    width: 55px;
    line-height: 55px;
  }
</style>
