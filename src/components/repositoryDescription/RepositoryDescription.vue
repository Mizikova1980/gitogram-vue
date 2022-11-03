<template>
  <div class="skills-title">{{ userskills }}</div>
  <div class="skillsdescription">{{ skillsdescription }}</div>
  <RepositoryInfo :likesCount="likesCount" :followers="followers" />
</template>

<script>
// eslint-disable-next-line no-unused-vars
import RepositoryInfo from './../repositoryInfo/RepositoryInfo.vue'
export default {
  name: 'RepositoryDescription',
  props: ['username', 'userskills', 'skillsdescription', 'likesCount', 'followers'],
  components: {
    RepositoryInfo
  }
}
</script>

<style scoped >
  .skills-title {
    font-size: 26px;
    font-weight: 700;
    color: #292929;
    margin-bottom: 15px;
  }
  .skillsdescription{
    color: #404040;
    margin-bottom: 32px;
  }
</style>
