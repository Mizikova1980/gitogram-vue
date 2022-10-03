<template>
  <div class="c-topline">
    <Topline>
      <template #headline>
        <div class="logo">
          <Logo/>
        </div>
        <div class="icons">
          <div class="icons-home">
            <Home/>
          </div>
          <div class="icons-currentUser">
            <img src="./../avatars/Oval.png" alt="avatar" />
          </div>
          <div class="icons-exit">
            <Exit/>
          </div>
        </div>
      </template>
      <template #content>
        <ul class="users">
          <li class="user-item" v-for="user in users" :key="user.id" >
            <UserItem
              :avatar="user.avatar"
              :name="user.name"
              @onPress="handlePress(user.id)"
             />
          </li>
        </ul>
      </template>
    </Topline>
  </div>
  <RepositoryList/>
</template>

<script>
import RepositoryList from '@/components/RepositoryList'
import Topline from '@/components/Topline'
import Logo from '@/icons/variants/logo.vue'
import Home from '@/icons/variants/home.vue'
import Exit from '@/icons/variants/exit.vue'
import UserItem from './UserItem.vue'
// eslint-disable-next-line no-unused-vars
import users from './data.json'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Feeds',
  components: { RepositoryList, Topline, Logo, Home, Exit, UserItem },
  data () {
    return {
      users
    }
  }
}

</script>

<style scoped lang="scss">
  .logo {
      width: 174px;
      height: 35px;
  }

  .icons {
      display: flex;
      justify-content: space-between;
      align-items: center;

    }
  .icons-home {
      width: 25px;
      height: 25px;
      margin-right: 28px;
  }
  .icons-currentUser {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      margin-right: 28px;
  }

  .icons-exit {
      width: 25px;
      height: 25px;
  }
  .users {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

</style>
