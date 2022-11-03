<template>
    <div>
        <h1 class="title">My profile</h1>
        <div class="about">
            <div class="user-avatar">
            <img :src="userAvatar" class="img" alt="username avatar" />
            </div>
            <div class="desc">
              <div class="username" >{{login}} </div>
              <div class="user-repos">
                <div class="repos-qnt" @click="this.$router.push({name: 'UserProfile'})">
                  <b>{{userRepos}}</b>
                  reposts</div>
                <div class="following-qnt" @click="this.$router.push({name: 'UserFollowing'})">
                  <b>{{userFollowing}}</b>
                  watchers</div>
              </div>
            </div>

        </div>

    </div>
</template>

<script>

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'User',
  props: {
    login: {
      type: String,
      required: true
    },
    userAvatar: {
      type: String,
      required: true
    },
    userRepos: {
      type: String,
      required: true
    },
    userFollowing: {
      type: String,
      required: true
    }

  }
}
</script>

<style scoped>
.title {
  font-size: 26px;
  font-weight: 700;
  color: black;
  margin: 40px  0 30px 0;
}

.about {
    display: flex;
    align-items: center;
    justify-content: center;
}
.user-avatar {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;

}

.img {
    width: 100%;
    height: 100%;
    border-radius: 50%;

}
.username {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 9px;
}

.user-repos {
  display: flex;
  justify-content: space-between;
}

.repos-qnt:hover {
  color: green
}
.following-qnt:hover {
  color: green
}
</style>
