<template>
  <div class="repository-list">
    <div class="repository-list__container">
      <RepositoryItem v-for="item in items" :key="item.id">
        <div class="x-container">
          <div class="user-info">
            <Avatar
            v-bind="getFeedData(item)"/>
          </div>
          <div class="repository-container">
            <RepositoryDescription v-bind="getFeedData(item)"
            />
          </div>

        </div>
      </RepositoryItem>
    </div>
  </div>
</template>

<script>
import * as api from './../../api'
import RepositoryItem from './../repositoryItem/RepositoryItem.vue'
import RepositoryDescription from './../repositoryDescription/RepositoryDescription.vue'
import Avatar from './../avatar/Avatar.vue'

export default {
  name: 'RepositoryList',
  components: {
    RepositoryItem,
    RepositoryDescription,
    Avatar
  },
  data () {
    return {
      items: []
    }
  },
  methods: {
    getFeedData (item) {
      return {
        avatar: item.owner.avatar_url,
        name: item.owner.login,
        userskills: item.full_name,
        skillsdescription: item.description,
        likesCount: item.stargazers_count,
        followers: item.forks
      }
    }
  },
  async created () {
    try {
      const { data } = await api.trendings.getTrendings()
      this.items = data.items
      console.log(this.items)
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style scoped>
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
