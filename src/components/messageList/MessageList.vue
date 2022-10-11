<!-- eslint-disable vue/valid-v-for -->
<template>
  <MessageItem
    v-for="user in users"
    :name="user.name"
    :message="user.message"
  />
</template>

<script>
import MessageItem from './../messageItem/MessageItem.vue'
import users from './../data.json'

export default {
  name: 'MessageList',
  components: { MessageItem },
  data () {
    return {
      users
    }
  }
}
</script>
