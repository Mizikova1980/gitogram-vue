
<template>
    <div :class="['slaider-wrapper', {active:active}]">
        <div class="progress">
            <x-progressBar :active="active" @onFinish="$emit('onProgressFinish')"/>
        </div>
        <div class="slider-avatar">
            <Avatar :avatar="data.avatar" :username="data.username"/>
        </div>
        <div class="slider-content">
            <div class="loader" v-if="loading">
                <Spinner />
            </div>
            <div class="info" v-else>
                <div v-if="data.content?.length" class="content-text" v-html="data.content"></div>
                <Placeholder v-else :paragraphs="2"/>
            </div>

        </div>
        <div class="slider-button">
            <xButton
            :loading = "data.following.loading"
            :theme="data.following.status ? 'grey' : 'green'"
            @click="$emit(data.following.status ? 'onUnfollow' : 'onFollow', data.id)"
            > {{data.following.status ? 'Unfollow' : 'Follow'}}</xButton>
        </div>
        <template v-if="active">
            <button v-if="btnShown.includes('next')" class="btn btn-next" @click="$emit('onNextSlide')">
                <span class="arrow">
                    <Next/>
                </span>
            </button>
            <button v-if="btnShown.includes('prev')" class="btn btn-prev" @click="$emit('onPrevSlide')">
                <span class="arrow">
                    <Prev/>
                </span>
            </button>
        </template>
    </div>

</template>

<script>
import Avatar from './../avatar/Avatar.vue'
import xButton from './../button/button.vue'
import ProgressBar from './../progressBar/ProgressBar.vue'
import Next from '../../icons/variants/next.vue'
import Prev from '../../icons/variants/prev.vue'
import Placeholder from './../placeholder/Placeholder.vue'
import Spinner from '../../icons/variants/spinner.vue'

export default {
  title: 'SliderItem',
  components: {
    Avatar,
    xButton,
    xProgressBar: ProgressBar,
    Next,
    Prev,
    Placeholder,
    Spinner
  },
  emits: ['onPrevSlide', 'onNextSlide', 'onProgressFinish', 'onFollow', 'onUnFollow'],
  props: {
    active: Boolean,
    loading: Boolean,
    fpllpwing: {
      type: Boolean
    },
    btnShown: {
      type: Array,
      default: () => ['next', 'prev'],
      validator (value) {
        return value.every((item) => item === 'next' || item === 'prev')
      }
    },
    data: {
      type: Object,
      required: true,
      default: () => ({})
    }
  }

}
</script>

<style scoped>
.slaider-wrapper {
    width: 375px;
    height: 667px;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    position: relative;
    background: white;
    transform: scale(.8);
    transition: .4s;

}

.slaider-wrapper.active {
    width: 376px;
    height: 667px;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    position: relative;
    background: white;
    transform: scale(1);
    z-index: 1000;

}

.slider-avatar {
    border-bottom: 1px solid #c6c6c8;
    height: 57px;
    margin: 0px 12px;
}

.progress {
    margin: 8px 8px 0px 8px;
}

.slider-content {
    font-size: 14px;
    font-weight: 400;
    border-bottom: 1px solid #c6c6c8;
    overflow-y: scroll;
    padding: 0 24px 0 18px;
    margin-bottom: 24px;
}

.slider-button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 53px 53px;
    width: 270px;
    height: 44px;
}
.btn {
    width: 37px;
    height: 37px;
    background: white;
    border-radius: 50%;
    border: 2px solid #000000;
    display: flex;
    align-items: center;
    justify-content: center;
}
.btn-next {
    position:absolute;
    top:50%;
    right:-50px;

}
.btn-prev {
    position:absolute;
    top:50%;
    left:-50px;

}

.loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

}

.info {
    padding: 22px 20px 6px 20px;
    flex: 1;
    font-size: 10px;
}

</style>
