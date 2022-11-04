<template>
    <div class="c-topline">
    <Topline>
      <template #headline>
        <Header />
      </template>
      <template #content>
        <ul class="users">
          <li class="user-item" v-for="trending in trendings" :key="trending.id" >
            <UserItem
              :avatar="trending.owner.avatar_url"
              :username="trending.owner.login"
              @onPress="activateSlider(trending.id)"
             />
          </li>
        </ul>
      </template>
    </Topline>
  </div>
  <div class="repository-list">
    <div class="repository-list__container">
      <ul class="repositories">
        <li class="repository-item" v-for="starred in starreds" :key="starred.id">
          <RepositoryItem
            :avatar="starred.owner.avatar_url"
            :username="starred.owner.login"
            :userskills="starred.name"
            :skillsdescription="starred.description"
            :likesCount="starred.stargazers_count"
            :followers="starred.forks"
            :issues="starred.issues?.data"
            :loading="starred.issues?.loading"
            @loadContent="loadIssues({ id: starred.id, owner: starred.owner.login, repo: starred.name})"
          />
        </li>
      </ul>

    </div>
  </div>

</template>

<script>
import Topline from './../topline/Topline.vue'
import RepositoryItem from './../repositoryItem/RepositoryItem.vue'
import UserItem from './../userItem/UserItem.vue'
import Header from './../header/Header.vue'
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Feeds',
  components: { Topline, UserItem, Header, RepositoryItem },
  computed: {
    ...mapState({
      user: (state) => state.auth.user,
      trendings: (state) => state.trendings.data,
      starreds: (state) => state.starred.data
    }),
    ...mapGetters(
      ['getUnStarredOnly'], {
        UserAvatar: 'auth/getUserAvatar'
      })
  },
  methods: {
    ...mapActions({
      fetchTrendings: 'trendings/fetchTrendings',
      fetchStarred: 'starred/fetchStarred',
      fetchIssues: 'starred/fetchIssuesForRepo'
    }),

    loadIssues ({ id, owner, repo }) {
      this.fetchIssues({ id, owner, repo })
    },
    activateSlider (id) {
      this.$router.push({
        name: 'stories',
        params: { initialSlide: id }
      })
    }
  },
  mounted () {
    this.fetchTrendings()
    this.fetchStarred({ limit: 10 })
  }

}

</script>

<style scoped>

  .users {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .repository-list {
  background: #fff;
}
.repository-list__container {
  width: 980px;
  margin: 0 auto;
}
.user-info {
  display: flex;
  justify-content: flex-start;
  margin: 24px 0 16px 0;
  }

  .repository-container {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 979px;
  background:#FFFFFF;
  padding: 24px 20px;
  border: 1px solid #F1F1F1;
  box-shadow: 0px 4px 40px 0px #00000012;
  border-radius: 10px;
  margin-bottom: 18px;
}

</style>
