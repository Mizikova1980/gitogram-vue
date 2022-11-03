<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names
<template>
    <button :class="buttonClass" @click="following = !following">{{btnText}}</button>
</template>

<script>
export default {
  name: 'xButton',
  data () {
    return {
      following: false
    }
  },
  computed: {
    btnText: function () {
      if (this.following) {
        return 'Unfollow'
      }
      return 'Follow'
    },
    buttonClass: function () {
      if (this.following === false) {
        return 'green'
      }
      return 'grey'
    }
  }
}
</script>

<style scoped>

.green {
    height: 100%;
    width: 100%;
    background: #31AE54;
    outline: none;
    border: none;
    border-radius: 4px;
    color: #ffff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
}

.grey {
    height: 100%;
    width: 100%;
    background: grey;
    outline: none;
    border: none;
    border-radius: 4px;
    color: #ffff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
}

</style>
