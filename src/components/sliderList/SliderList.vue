<template>
    <div class="wrapper wrapper__slider">
          <div class="stories-container">
            <ul class="stories" ref="slider">
              <li class="stories-item" ref="item" v-for="(trending, ndx) in trendings" :key="trending.id">
                <SliderItem
                :data="getStoryData(trending)"
                :active="slideNdx === ndx"
                :loading="slideNdx === ndx && loading"
                :btnShown="activeBtn"
                @onNextSlide="handleSlide(ndx + 1)"
                @onPrevSlide="handleSlide(ndx - 1)"
                @onProgressFinish="handleSlide(ndx + 1)"
                />
              </li>
            </ul>

          </div>

    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import SliderItem from './../sliderItem/SliderItem.vue'

export default {
  name: 'SliderList',
  components: { SliderItem },
  props: {
    initialSlide: {
      type: Number
    }
  },
  data () {
    return {
      slideNdx: 0,
      slidePosition: 0,
      loading: false,
      btnShown: true
    }
  },
  computed: {
    ...mapState({
      trendings: (state) => state.trendings.data
    }),
    activeBtn () {
      if (this.btnShown === false) return []
      if (this.slideNdx === 0) return ['next']
      if (this.slideNdx === this.trendings.length - 1) return ['prev']
      return ['next', 'prev']
    }
  },
  methods: {
    ...mapActions({
      fetchTrendings: 'trendings/fetchTrendings',
      fetchReadme: 'trendings/fetchReadme'
    }),

    async fetchReadmeForActiveSlide () {
      const { id, owner, name } = this.trendings[this.slideNdx]
      await this.fetchReadme({ id, owner: owner.login, repo: name })
    },

    getStoryData (obj) {
      return {
        id: obj.id,
        avatar: obj.owner?.avatar_url,
        username: obj.owner?.login,
        content: obj.readme
      }
    },
    moveSlider (slideNdx) {
      const { slider, item } = this.$refs
      const slideWidth = parseInt(getComputedStyle(item).getPropertyValue('width'), 10)

      this.slideNdx = slideNdx
      this.slidePosition = -(slideWidth * slideNdx)

      slider.style.transform = `translateX(${this.slidePosition}px)`
    },

    async loadReadme () {
      this.loading = true
      this.btnShown = false

      try {
        await this.fetchReadmeForActiveSlide()
      } catch (error) {
        console.log(error)
        throw error
      } finally {
        this.loading = false
        this.btnShown = true
      }
    },

    async handleSlide (slideNdx) {
      this.moveSlider(slideNdx)
      await this.loadReadme()
    }
  },

  async mounted () {
    if (this.initialSlide) {
      const ndx = this.trendings.findIndex((item) => item.id === this.initialSlide)
      await this.handleSlide(ndx)
    }
    await this.fetchTrendings()
    await this.loadReadme()
  }
}

</script>

<style scoped>

  .stories {
    display: flex;
    align-items: center;
    width: 4000px;
    position: absolute;
    left: 50%;
    margin-left: -188px;
    transition: transform .4s;
    transform: translateX(0);
  }
  .stories-container {
    height: 667px;
    position: relative;
  }
  .stories-item {
    background: white;
    width: 376px;
    height: 667px;
    border-radius: 8px;
    margin-right: 20px;
  }

</style>
