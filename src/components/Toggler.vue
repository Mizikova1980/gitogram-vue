<template>
  <button :class="['button', {'active': isActive}]" @click="btnClick">
    <span class="text">{{!isActive ? "View issues" : "Hide issues"}}</span>
    <span class="icon">
      <Triangle/>
    </span>
  </button>
</template>

<script>
import Triangle from '@/icons/variants/triangle.vue'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Toggler',
  components: { Triangle },
  data () {
    return {
      isActive: true
    }
  },
  methods: {
    btnClick () {
      this.isActive = !this.isActive
      this.$emit('btnClick', this.isActive)
    }
  }
}
</script>

<style scoped lang="scss">
  .button {
    display: inline-flex;
    align-items: center;
    padding: 0;

    .icon {
    width: 10px;
    transform: rotate(180deg);
  }

    &.active {
      .icon {
        transform: rotate(0deg);
      }
    }
  }

</style>
