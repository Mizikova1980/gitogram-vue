<template>
    <div class="wrapper">
        <div class="logo">
            <Logo/>
        </div>
        <div class="text">
            <p>More than just one repository. This is our digital world.</p>
        </div>
        <div class="auth" @click="loginHandler">
            <div class="auth-text">Authorize with github</div>
            <div class="auth-icon">
                <Cat/>
            </div>
        </div>
        <div class="auth-img">
            <img src="../../img/img_auth.png" alt="auth-img"/>
        </div>
    </div>
    <footer class="footer">
        <div>
            © Gitogram from Loftschool
        </div>
    </footer>

</template>

<script>
import Logo from './../../icons/variants/logo.vue'
import Cat from './../../icons/variants/cat.vue'
import * as api from './../../api'
import { mapActions } from 'vuex'

export default {

  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Auth',
  components: { Logo, Cat },
  methods: {
    ...mapActions({
      getUser: 'auth/getUser'
    }),
    loginHandler () {
      api.auth.sendUserToAuthPage()
    }
  },
  async created () {
    const code = new URLSearchParams(window.location.search).get('code')

    if (code) {
      try {
        const { data } = await api.auth.getToken(code)
        await api.token.set(data.token, true)
        await this.getUser()
        this.$router.replace({ name: 'Feeds' })
      } catch (error) {
        console.log(error)
      }
    }
  }
}

</script>

<style scoped>
    .wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;

    }

    .logo {
        width: 200px;
        height: 41px;
        margin: 200px 0 13px 0;
    }

    .text {
        display: block;
        width: 256px;
        height: 56px;
        font-size: 18px;
        font-weight: 400;
        line-height: 28px;
        color: #6F6F6F;
        margin-bottom: 38px;
        text-align: center;
    }

    .auth {
     margin-bottom: 86px;
     background: #31AE54;
     padding: 10px 24px;
     border-radius: 5px;
     color: white;
     font-size: 16px;
     font-weight: 700;
     display: flex;
    }
    .auth-text {
    margin-right: 13px;
}
    .auth-icon {
        width: 23px;
        height: 23px;
    }

    .footer {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 84px;
        margin-bottom: 0;
    }
</style>
