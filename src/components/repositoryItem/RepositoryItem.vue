<template>
  <div class="wrapper">
      <slot />
      <Toggler @btnClick="onTogglerClick" />
    <MessageList v-if="isShowMessage" />
  </div>
</template>

<script>
import Toggler from './../toggler/Toggler.vue'
import MessageList from './../messageList/MessageList.vue'

export default {
  name: 'RepositoryItem',
  components: { Toggler, MessageList },
  data () {
    return {
      isShowMessage: true
    }
  },
  methods: {
    onTogglerClick (isShow) {
      this.isShowMessage = isShow
    }
  }
}
</script>

<style scoped >

</style>
