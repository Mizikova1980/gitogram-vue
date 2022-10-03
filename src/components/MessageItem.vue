<template>
  <div class="message">
    <span class="message__name">{{ name }}</span>
    <span class="message__text">{{ message }}</span>
  </div>
</template>

<script>
export default {
  name: 'MessageItem',
  props: ['name', 'message']
}
</script>

<style>
.message {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.message__text {
  margin-left: 8px;
  margin-bottom: 6px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #262626;
}

.message__name {
  font-weight: 700;
  font-size: 14px;
  color: #262626;
}
</style>
