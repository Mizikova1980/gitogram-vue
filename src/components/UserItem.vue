<template>
    <button class="c-user-item" @click="$emit('onPress')">
        <div class="avatar">
            <img :src="avatar" class="img" alt="username avatar" />
        </div>
        <div class="username">{{name}}</div>
    </button>
</template>

<script>
export default {
  props: {
    avatar: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.c-user-item {
    display: flex;
    flex-direction: column;
    align-items: center
}
.avatar {
    width: 80px;
    height: 80px;
    border:1px solid #A6328D;
    border-radius: 100%;
    transition: 3s;
    &:hover {
        border: 0px;
    }
}
.img {
    border-radius: 100%;
    padding: 4px;
}
.username {
    margin-top: 10px;
}
</style>
