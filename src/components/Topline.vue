<template>
    <div class="c-topline">
        <div class="x-container">
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

<style scoped lang="scss">
    .c-topline {
        background: #FAFAFA;
        box-shadow: 0px 0.33px 0px rgba(60, 60, 67, 0.29);
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
