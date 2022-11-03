<template>
    <div class="following-item">
        <div class="user">
            <Avatar :username="username" :avatar="avatar" :usertype="usertype"/>
        </div>
        <div class="button">
            <xButton
            @click="$emit('buttonPressed')"/>
        </div>
    </div>
</template>

<script>
import Avatar from './../avatar/Avatar.vue'
import xButton from './../button/button.vue'

export default {
  name: 'FollowingItem',
  components: { Avatar, xButton },
  props: {
    avatar: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    usertype: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.following-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;

}
.user {
    font-weight: 500;
    font-size: 18px;
  }

  .button {
    width: 115px;
    height: 42px;
    color: #31AE54
  }

</style>
