<template>
  <div class="c-progress" :class="{ active }">
    <div ref="indicator" class="indicator"></div>
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  data () {
    return {
      active: false
    }
  },
  emits: ['onFinish'],
  methods: {
    emitOnFinish () {
      this.$emit('onFinish')
    }
  },
  mounted () {
    setTimeout(() => {
      this.active = true
    }, 0)
    this.$refs.indicator.addEventListener(
      'transitionend',
      this.emitOnFinish)
  },
  beforeUnmount () {
    this.$refs.indicator.removeEventListener(
      'transitionend',
      this.emitOnFinish
    )
  }

}
</script>

<style scope>
.c-progress {
  background: rgba(49, 174, 84, 0.3);
  height: 2px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
}
.active > .indicator {
  width: 100%;
  transition: 15s;
}
.indicator {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 0;
  background: #31ae54;
  transition: 15s;
}
</style>
