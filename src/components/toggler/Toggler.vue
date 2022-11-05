<template>
  <button :class="['button', {'active': isActive}]" @click="btnClick">
    <span class="text">{{!isActive ? "View issues" : "Hide issues"}}</span>
    <span class="icon">
      <Triangle/>
    </span>
  </button>
</template>

<script>
import Triangle from './../../icons/variants/triangle.vue'
import { ref } from 'vue'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Toggler',
  components: { Triangle },
  emits: ['btnClick'],
  setup (props, { emit }) {
    const isActive = ref(true)

    const btnClick = () => {
      isActive.value = !isActive.value
      emit('btnClick', isActive.value)
    }

    return {
      isActive,
      btnClick
    }
  }

}
</script>

<style scoped >
  .button {
    display: inline-flex;
    align-items: center;
    padding: 0;

  }

  .button.active .icon {
    transform: rotate(0deg);
  }

  .button .icon {
    width: 10px;
    transform: rotate(180deg);
  }

</style>
