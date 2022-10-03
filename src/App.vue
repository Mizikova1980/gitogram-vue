<template>
  <Feeds/>
</template>

<script>
import Feeds from './components/Feeds.vue'

export default {
  name: 'App',
  components: {
    Feeds
  }
}
</script>

<style src="./global.scss" lang="scss">
html,
body {
  height: 100%;
}

body {
  margin: 0;
}

p {
  margin: 0;
}

</style>
