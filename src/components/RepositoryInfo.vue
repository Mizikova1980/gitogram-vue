<template>
   <div class="message">
    <button class="message__likesCount likesCount">
      <div class="likesCount__icon">
        <div class="likesCount__img">
          <Star/>
        </div>
        <div class="likesCount__desc">Star</div>
      </div>
      <div class="likesCount__value">{{ likesCount }}</div>
    </button>
    <button class="message__followers followers">
      <div class="followers__icon">
        <div class="followers__img">
          <Git/>
        </div>
        <div class="followers__desc">Fork</div>
      </div>

      <div class="followers__value">{{ followers }}</div>
    </button>
   </div>
</template>

<script>
import Star from '../icons/variants/star.vue'
import Git from '../icons/variants/git.vue'

export default {
  name: 'RepositoryInfo',
  props: {
    likesCount: {
      type: String,
      required: true
    },
    followers: {
      type: String,
      required: true
    }
  },
  components: { Star, Git }
}
</script>

<style scoped lang="scss">
  .message {
    display: flex;
  }
  .likesCount {
    display: flex;
    min-height: 28px;
  }
  .likesCount__icon {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #FAFBFC;
    border: 1px solid rgba(27, 31, 35, 0.15);
    border-radius: 6px 0px 0px 6px;
    padding: 5px 11px;

  }
  .likesCount__img {
    width: 15px;
    height: 15px;
    margin-right: 5px;

  }
  .likesCount__desc {
    font-size: 14px;
    font-weight: 400;
    color: #24292E;
  }
  .likesCount__value {
    padding: 6px 11px;
    font-size: 14px;
    font-weight: 400;
    background: #FFFFFF;
    box-shadow: inset 0px -1px 0px rgba(27, 31, 35, 0.12), inset 0px 1px 0px rgba(27, 31, 35, 0.12);
  }
  .followers {
    display: flex;
  }
  .followers__icon {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 5px 12px;
    background: #FAFBFC;
    border: 1px solid rgba(27, 31, 35, 0.15);

  }
  .followers__img {
    width: 12px;
    height: 14px;
    margin-right: 6px;

  }
  .followers__desc {
    font-size: 12px;
    font-weight: 600;
    color: #24292E;
  }
  .followers__value {
    font-size: 12px;
    font-weight: 600;
    padding: 5px 11px;
    border-radius: 0px 6px 6px 0px;
    border: 1px solid rgba(27, 31, 35, 0.15);
    background: #FFFFFF;
    box-shadow: inset 0px -1px 0px rgba(27, 31, 35, 0.12), inset 0px 1px 0px rgba(27, 31, 35, 0.12);
  }

</style>
