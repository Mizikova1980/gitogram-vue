<template>

    <div class="header-wrapper">
        <div class="xContainer">
            <div class="header-content">
                <div class="logo logo__black">
                    <Logo/>
                </div>
                <div class="icons">
                    <div class="icons-home">
                        <Home/>
                    </div>
                    <div class="icons-currentUser" @click="this.$router.push({name: 'UserProfile'})">
                        <div class="avatar__logo">
                            <img :src="$store.state.auth.user.avatar_url" alt="" class="avatar__logo-img" />
                        </div>
                    </div>
                    <div class="icons-exit" @click="logout">
                        <Exit/>
                    </div>
            </div>
        </div>
    </div>
</div>

</template>

<script>
import Logo from './../../icons/variants/logo.vue'
import Home from './../../icons/variants/home.vue'
import Exit from './../../icons/variants/exit.vue'
import { mapActions, mapState } from 'vuex'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Header',
  components: { Logo, Exit, Home },
  props: {

  },
  computed: {
    ...mapState({
      user: (state) => state.auth.user
    })
  },
  methods: {
    ...mapActions({
      logout: 'auth/logout'
    })
  }
}
</script>

<style scoped>
.header-wrapper {
        background: #FAFAFA;
        padding: 0 0 0;
        display: flex;
        justify-content: space-between;
    }

    .header-content {
        display: flex;
        justify-content: space-between;
    }

.logo__black {
      width: 174px;
      height: 35px;
      color: black;
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
      width: 37px;
      height: 37px;
      border-radius: 50%;
      margin-right: 28px;
  }

  .avatar__logo .avatar__logo-img {
    width: 37px;
      height: 37px;
      border-radius: 50%;
  }

  .icons-exit {
      width: 25px;
      height: 25px;
  }
</style>
