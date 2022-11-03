<template>
<div class="repos-container">
  <div class="repos-title">
    <h1 class="title">Repositories</h1>
    <div class="repos-quantity">{{user.public_repos}}</div>
  </div>

  <ul class="repos">
    <li class="repos-item" v-for="userRepo in userRepos" :key="userRepo.id">
      <RepositoryDescription
      :likesCount="userRepo.stargazers_count"
      :followers="userRepo.fork"
      :userskills="userRepo.name"
      :skillsdescription="userRepo.description"
      />
    </li>
  </ul>

</div>

</template>

<script>
import { mapState, mapActions } from 'vuex'
import RepositoryDescription from './../repositoryDescription/RepositoryDescription.vue'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'UserRepos',
  components: { RepositoryDescription },
  data () {
    return {
      loading: false,
      error: null
    }
  },
  computed: {
    ...mapState({
      userRepos: (state) => state.userRepos.data,
      user: (state) => state.auth.user
    })
  },
  methods: {
    ...mapActions({
      getUserRepos: 'userRepos/getUserRepos'
    })
  },
  async created () {
    this.loading = true
    try {
      await this.getUserRepos()
    } catch (e) {
      this.error = e.message
    } finally {
      this.loading = false
    }
  }

}
</script>

<style scoped>

.repos-container {
  padding: 40px 126px 40px 74px;
}

.repos-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title {
  font-size: 26px;
  font-weight: 700;
  color: black;
  margin: 40px  0 30px 0;
}

.repos-quantity {
  color: #9E9E9E;
  font-size: 18px;
  font-weight: 700;
}

  .repos-item {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  background:#FFFFFF;
  padding: 24px 20px;
  border: 1px solid #F1F1F1;
  box-shadow: 0px 4px 40px 0px #00000012;
  border-radius: 10px;
  margin-bottom: 18px;
}
</style>
