<template>
    <div class="userItem" @click="$emit('onPress')">
        <div class="avatar">
            <img :src="avatar" class="img" alt="username avatar" />
        </div>
        <div class="username" :username="username">{{username}}</div>
    </div>
</template>

<script>
export default {
  name: 'UserItem',
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
.userItem {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.avatar {
    width: 80px;
    height: 80px;
    border:1px solid #A6328D;
    border-radius: 100%;
    transition: 3s;
    display: flex;
    align-items: center;
    justify-content: center;

}

.avatar:hover {
  border: 0px;
}
.img {
    border-radius: 50%;
    padding: 4px;
    width: 100%;
    height: 100%;

}
.username {
    margin-top: 10px;
}
</style>
