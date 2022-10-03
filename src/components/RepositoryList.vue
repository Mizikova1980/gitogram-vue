<template>
  <div class="repository-list">
    <div class="repository-list__container">
      <RepositoryItem v-for="user in users" :key="user.id">
        <div class="x-container">
          <div class="user-info">
            <Avatar
            :avatar="user.avatar"
            :username="user.name"/>
          </div>
          <div class="repository-container">
            <RepositoryDescription
            :userskills="user.skills"
            :skillsdescription="user.skillsDesc"
            :likesCount="user.likesCount"
            :followers="user.followers"
            />
          </div>

        </div>
      </RepositoryItem>
    </div>
  </div>
</template>

<script>
import users from './data.json'
import RepositoryItem from '@/components/RepositoryItem'
import RepositoryDescription from './RepositoryDescription'
import Avatar from './Avatar.vue'

export default {
  name: 'RepositoryList',
  components: {
    RepositoryItem,
    RepositoryDescription,
    Avatar
  },
  data () {
    return {
      users
    }
  }
}
</script>

<style scoped>
.repository-list {
  background: #E5E5E5;;
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
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.07);
  border-radius: 10px;
  margin-bottom: 18px;
}

</style>
