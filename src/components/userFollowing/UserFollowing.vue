<template>
    <div class="header-profile">
      <Header/>
    </div>
    <div class="xConteiner">
      <div class="content">
        <div class="left-side">
          <User
          :login="user.login"
          :userAvatar="user.avatar_url"
          :userRepos = "user.public_repos"
          :userFollowing="followings.length"
          />
        </div>
        <div class="right-side">
          <FollowingList/>
        </div>
      </div>
    </div>
  </template>

<script>
import Header from './../header/Header.vue'
import User from './../user/User.vue'
import FollowingList from './../followingList/FollowingList.vue'
import { mapState } from 'vuex'
export default {
  name: 'UserFollowing',
  components: { Header, User, FollowingList },
  computed: {
    ...mapState({
      user: (state) => state.auth.user,
      followings: (state) => state.starred.data
    })
  }
}

</script>

  <style scoped>

  .header-profile {
    background: #FAFAFA;
    border-bottom: 1px solid #c6c6c8;
    padding: 42px 0 32px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .content {
    display: flex;
    flex: 1;
    }
  .left-side {
    width: 35%;
    border-right: 1px solid #c6c6c8;
    display: flex;
    justify-content: center;
    }
  .right-side {
    width: 65%;
}

  </style>
