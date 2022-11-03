<template>
  <div class="avatar">
    <div class="avatar__logo">
      <img :src="avatar" alt="" class="avatar__logo-img" />
    </div>
    <div class="avatar__text">
      <div class="'username'">{{ username }}</div>
      <div class="usertype">{{usertype}}</div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Avatar',
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
.avatar {
  display: flex;
  align-items: center;
  justify-content: flex-start;

}
.avatar__logo-img {
  height: 44px;
  width: 44px;
  border-radius: 50%;
  margin-right: 14px;
  border-radius: 50%;
}

.avatar__text {
  font-size: 18px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.usertype {
  font-size: 12px;
  font-weight: 400;
  color: #9E9E9E
}
</style>
