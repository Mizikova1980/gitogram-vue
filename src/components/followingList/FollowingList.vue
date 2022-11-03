<template>
  <div class="loader" v-if="loading">
      <Spinner />
  </div>
  <div class="following-container" v-else>
    <div class="following-title">
      <h1 class="title">Following</h1>
      <div class="following-quantity">{{followings.length}}</div>
    </div>
    <ul class="followings">
        <li class="followwing" v-for="following in followings" :key="following.id">
          <FollowingItem
          :username="following.full_name"
          :avatar="following.owner.avatar_url"
          :usertype="following.owner.type"
          @buttonPressed="changeFollowing(following.id)"
          />
        </li>
      </ul>
  </div>

  </template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import FollowingItem from './../following/followingItem.vue'
import Spinner from './../../icons/variants/spinner.vue'
export default {
  name: 'FollowingList',
  components: { FollowingItem, Spinner },
  data () {
    return {
      loading: false,
      error: null
    }
  },
  computed: {
    ...mapState({
      user: (state) => state.auth.user,
      followings: (state) => state.starred.data
    }),
    ...mapGetters({
      getStarredRepo: 'starred/getStarredRepo'
    })
  },
  methods: {
    ...mapActions({
      fetchFollowing: 'starred/fetchStarred',
      starRepo: 'starred/starRepo',
      unStarRepo: 'starred/unStarRepo'
    }),
    changeFollowing (id) {
      const { following } = this.getStarredRepo(id)
      if (following) {
        this.unStarRepo(id)
      } else {
        this.starRepo(id)
      }
    }
  },
  async created () {
    this.loading = true
    try {
      await this.fetchFollowing()
    } catch (e) {
      this.error = e.message
    } finally {
      this.loading = false
    }
  }

}
</script>

<style scoped>
.following-container {
  padding: 40px 126px 40px 74px;
  display: flex;
  flex-direction: column;
}

.following-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title {
  font-size: 26px;
  font-weight: 700;
  color: black;
  margin: 40px  0 30px 0;
}

.following-quantity {
  color: #9E9E9E;
  font-size: 18px;
  font-weight: 700;
}

</style>
