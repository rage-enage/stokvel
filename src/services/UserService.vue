<template>
 <h1>Sonny boy </h1>
</template>
<script>
  const ThingIWantToShare = {
    importantString: 'boop'
  };
  export default {
    name: 'User',
    provide: {
      ThingIWantToShare
    }  
  }
</script>
