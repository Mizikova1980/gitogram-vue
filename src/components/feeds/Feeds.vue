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
            <img src="./../../../src/avatars/Oval.png" alt="avatar" />
          </div>
          <div class="icons-exit">
            <Exit/>
          </div>
        </div>
      </template>
      <template #content>
        <ul class="users">
          <li class="user-item" v-for="item in items" :key="item.id" >
            <UserItem
              v-bind="getFeedData(item)"
              @onPress="handlePress(item.id)"
             />
          </li>
        </ul>
      </template>
    </Topline>
  </div>
  <RepositoryList/>
</template>

<script>
import RepositoryList from './../repositoryList/RepositoryList.vue'
import Topline from './../topline/Topline.vue'
import Logo from './../../icons/variants/logo.vue'
import Home from './../../icons/variants/home.vue'
import Exit from './../../icons/variants/exit.vue'
import UserItem from './../userItem/UserItem.vue'
import * as api from './../../api'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Feeds',
  components: { RepositoryList, Topline, Logo, Home, Exit, UserItem },
  data () {
    return {
      items: []
    }
  },
  methods: {
    getFeedData (item) {
      return {
        avatar: item.owner.avatar_url,
        name: item.owner.login
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
