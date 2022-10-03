<template>
  <div class="avatar">
    <div class="avatar__logo">
      <img :src="avatar" alt="" class="avatar__logo-img" />
    </div>
    <div class="avatar__text">
      <p>{{ username }}</p>
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
}

.avatar__text {
  font-size: 18px;
  font-weight: 700;
}
</style>
