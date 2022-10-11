<template>
    <div class="topline">
        <div class="xContainer">
            <div class="headline">
                <slot name="headline" />
            </div>
            <div class="content" v-if="$slots.content">
                <slot name="content" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Topline'
}

</script>

<style scoped>
    .topline {
        background: #FAFAFA;
        border-bottom: 1px solid #c6c6c8;
        padding: 42px 0 32px;
        display: flex;
    }

    .headline {
        display: flex;
        justify-content: space-between;
    }

    .content {
        margin-top: 37px;
        display: flex;
    }
</style>
