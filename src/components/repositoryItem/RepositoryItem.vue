<template>
  <div class="wrapper">
    <div class="x-container">
          <div class="user-info">
            <Avatar
            :avatar="avatar"
            :username="username"
            />
          </div>
          <div class="repository-container">
            <RepositoryDescription
            :userskills="userskills"
            :skillsdescription="skillsdescription"
            :likesCount="likesCount"
            :followers="followers"
            />
          </div>
      <Toggler @btnClick="onTogglerClick" />
      <div class="content-loader" v-if="loading">
      <ContentLoader/>
      </div>
      <div class="issues-container" v-if="isShowMessage && issues?.length">
        <ul class="issues">
          <li class="issues-item" v-for="issue in issues" :key="issue.id" >
            <MessageItem
            :name="issue.user.login"
            :message="issue.title"
            />
          </li>
        </ul>

      </div>

  </div>
  </div>

</template>

<script>
import Avatar from './../avatar/Avatar.vue'
import RepositoryDescription from './../repositoryDescription/RepositoryDescription.vue'
import Toggler from './../toggler/Toggler.vue'
import MessageItem from './../messageItem/MessageItem.vue'
import ContentLoader from './../contentLoader/ContentLoader.vue'
import { ref } from 'vue'

export default {
  name: 'RepositoryItem',
  components: { Toggler, MessageItem, Avatar, RepositoryDescription, ContentLoader },
  emits: ['loadContent'],
  props: {
    avatar: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    userskills: {
      type: String,
      required: true
    },
    skillsdescription: {
      type: String,
      required: true
    },
    likesCount: {
      type: String,
      required: true
    },
    followers: {
      type: String,
      required: true
    },
    issues: {
      type: Array,
      default: () => []
    },
    loading: {
      type: Boolean
    }

  },
  setup (props, { emit }) {
    const isShowMessage = ref(false)

    const onTogglerClick = (isShow) => {
      isShowMessage.value = isShow

      if (isShow && props.issues?.length === 0) {
        emit('loadContent')
      }
    }

    return {
      isShowMessage,
      onTogglerClick
    }
  }

}
</script>

<style scoped >

.user-info {
  display: flex;
  justify-content: flex-start;
  margin: 24px 0 16px 0;
}
.repository-container {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 979px;
  background: white;
  padding: 24px 20px;
  border: 1px solid #f1f1f1;
  box-shadow: 0px 4px 40px 0px #00000012;
  border-radius: 10px;
  margin-bottom: 18px;
}
</style>
