<!-- eslint-disable vue/multi-word-component-names -->
<template>
<div class="c-placeholder">
    <div class="mainpic"></div>
    <div class="content" v-for="n in paragraphs" :key="n">
      <div class="item"></div>
    </div>
  </div>
</template>

<script>

export default {
  title: 'Placeholder',
  props: {
    paragraphs: {
      type: Number,
      default: 1
    }
  }
}
</script>

<style scoped>
.c-placeholder {
  color: #dedede;
}

.mainpic {
  height: 170px;
  margin-bottom: 28px;
  border-radius: 4px;
  background: currentColor;
}

.content {
    margin-bottom: 24px;
  }

  .content:last-child {
    margin-bottom: 0;
  }

  .content:after, .content:before, .item {
    content: "";
    display: block;
    background: currentColor;
    height: 17px;
    border-radius: 3px;
    margin-bottom: 10px;
  }

  .content:before {
    width: 67%;
  }

  .content .item {
    width: 80%;
  }

  .content:after {
    width: 53%;
  }

</style>
