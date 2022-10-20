<template>
   <div class="wrapper">
    <div class="logo">
        <Logo/>
    </div>
    <div>
        <p>More than just one repository. This is our digital world.</p>
    </div>
    <button class="btn btn__auth"> Authorize with github </button>
    <div class="auth-img">
        <img src="../../img/img_auth.png" alt="auth-img"/>
    </div>
   </div>

</template>

<script>
import Logo from './../../icons/variants/logo.vue'

export default {

  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Auth',
  components: { Logo }
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
    }
</style>
